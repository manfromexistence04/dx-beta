import { Emitter } from "./emitter";
export class HistoryChangedEvent {
    isUndoStackEmpty;
    isRedoStackEmpty;
    constructor(isUndoStackEmpty = true, isRedoStackEmpty = true) {
        this.isUndoStackEmpty = isUndoStackEmpty;
        this.isRedoStackEmpty = isRedoStackEmpty;
    }
}
export class History {
    onHistoryChangedEmitter = new Emitter();
    undoStack = [];
    redoStack = [];
    get isUndoStackEmpty() {
        return this.undoStack.length === 0;
    }
    get isRedoStackEmpty() {
        return this.redoStack.length === 0;
    }
    clear() {
        this.undoStack.length = 0;
        this.redoStack.length = 0;
    }
    /**
     * Record a local change which will go into the history
     */
    record(elementsChange, appStateChange) {
        const entry = HistoryEntry.create(appStateChange, elementsChange);
        if (!entry.isEmpty()) {
            // we have the latest changes, no need to `applyLatest`, which is done within `History.push`
            this.undoStack.push(entry.inverse());
            if (!entry.elementsChange.isEmpty()) {
                // don't reset redo stack on local appState changes,
                // as a simple click (unselect) could lead to losing all the redo entries
                // only reset on non empty elements changes!
                this.redoStack.length = 0;
            }
            this.onHistoryChangedEmitter.trigger(new HistoryChangedEvent(this.isUndoStackEmpty, this.isRedoStackEmpty));
        }
    }
    undo(elements, appState, snapshot) {
        return this.perform(elements, appState, snapshot, () => History.pop(this.undoStack), (entry) => History.push(this.redoStack, entry, elements));
    }
    redo(elements, appState, snapshot) {
        return this.perform(elements, appState, snapshot, () => History.pop(this.redoStack), (entry) => History.push(this.undoStack, entry, elements));
    }
    perform(elements, appState, snapshot, pop, push) {
        try {
            let historyEntry = pop();
            if (historyEntry === null) {
                return;
            }
            let nextElements = elements;
            let nextAppState = appState;
            let containsVisibleChange = false;
            // iterate through the history entries in case they result in no visible changes
            while (historyEntry) {
                try {
                    [nextElements, nextAppState, containsVisibleChange] =
                        historyEntry.applyTo(nextElements, nextAppState, snapshot);
                }
                finally {
                    // make sure to always push / pop, even if the increment is corrupted
                    push(historyEntry);
                }
                if (containsVisibleChange) {
                    break;
                }
                historyEntry = pop();
            }
            return [nextElements, nextAppState];
        }
        finally {
            // trigger the history change event before returning completely
            // also trigger it just once, no need doing so on each entry
            this.onHistoryChangedEmitter.trigger(new HistoryChangedEvent(this.isUndoStackEmpty, this.isRedoStackEmpty));
        }
    }
    static pop(stack) {
        if (!stack.length) {
            return null;
        }
        const entry = stack.pop();
        if (entry !== undefined) {
            return entry;
        }
        return null;
    }
    static push(stack, entry, prevElements) {
        const updatedEntry = entry.inverse().applyLatestChanges(prevElements);
        return stack.push(updatedEntry);
    }
}
export class HistoryEntry {
    appStateChange;
    elementsChange;
    constructor(appStateChange, elementsChange) {
        this.appStateChange = appStateChange;
        this.elementsChange = elementsChange;
    }
    static create(appStateChange, elementsChange) {
        return new HistoryEntry(appStateChange, elementsChange);
    }
    inverse() {
        return new HistoryEntry(this.appStateChange.inverse(), this.elementsChange.inverse());
    }
    applyTo(elements, appState, snapshot) {
        const [nextElements, elementsContainVisibleChange] = this.elementsChange.applyTo(elements, snapshot.elements);
        const [nextAppState, appStateContainsVisibleChange] = this.appStateChange.applyTo(appState, nextElements);
        const appliedVisibleChanges = elementsContainVisibleChange || appStateContainsVisibleChange;
        return [nextElements, nextAppState, appliedVisibleChanges];
    }
    /**
     * Apply latest (remote) changes to the history entry, creates new instance of `HistoryEntry`.
     */
    applyLatestChanges(elements) {
        const updatedElementsChange = this.elementsChange.applyLatestChanges(elements);
        return HistoryEntry.create(this.appStateChange, updatedElementsChange);
    }
    isEmpty() {
        return this.appStateChange.isEmpty() && this.elementsChange.isEmpty();
    }
}
