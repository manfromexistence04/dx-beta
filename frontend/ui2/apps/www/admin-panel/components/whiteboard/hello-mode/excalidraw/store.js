import { getDefaultAppState } from "./appState";
import { AppStateChange, ElementsChange } from "./change";
import { ENV } from "./constants";
import { newElementWith } from "./element/mutateElement";
import { deepCopyElement } from "./element/newElement";
import { Emitter } from "./emitter";
import { isShallowEqual } from "./utils";
// hidden non-enumerable property for runtime checks
const hiddenObservedAppStateProp = "__observedAppState";
export const getObservedAppState = (appState) => {
    const observedAppState = {
        name: appState.name,
        editingGroupId: appState.editingGroupId,
        viewBackgroundColor: appState.viewBackgroundColor,
        selectedElementIds: appState.selectedElementIds,
        selectedGroupIds: appState.selectedGroupIds,
        editingLinearElementId: appState.editingLinearElement?.elementId || null,
        selectedLinearElementId: appState.selectedLinearElement?.elementId || null,
    };
    Reflect.defineProperty(observedAppState, hiddenObservedAppStateProp, {
        value: true,
        enumerable: false,
    });
    return observedAppState;
};
const isObservedAppState = (appState) => !!Reflect.get(appState, hiddenObservedAppStateProp);
export const StoreAction = {
    CAPTURE: "capture",
    UPDATE: "update",
    NONE: "none",
};
/**
 * Represent an increment to the Store.
 */
class StoreIncrementEvent {
    elementsChange;
    appStateChange;
    constructor(elementsChange, appStateChange) {
        this.elementsChange = elementsChange;
        this.appStateChange = appStateChange;
    }
}
export class Store {
    onStoreIncrementEmitter = new Emitter();
    scheduledActions = new Set();
    _snapshot = Snapshot.empty();
    get snapshot() {
        return this._snapshot;
    }
    set snapshot(snapshot) {
        this._snapshot = snapshot;
    }
    // TODO: Suspicious that this is called so many places. Seems error-prone.
    shouldCaptureIncrement = () => {
        this.scheduleAction(StoreAction.CAPTURE);
    };
    shouldUpdateSnapshot = () => {
        this.scheduleAction(StoreAction.UPDATE);
    };
    scheduleAction = (action) => {
        this.scheduledActions.add(action);
        this.satisfiesScheduledActionsInvariant();
    };
    commit = (elements, appState) => {
        try {
            // Capture has precedence since it also performs update
            if (this.scheduledActions.has(StoreAction.CAPTURE)) {
                this.captureIncrement(elements, appState);
            }
            else if (this.scheduledActions.has(StoreAction.UPDATE)) {
                this.updateSnapshot(elements, appState);
            }
        }
        finally {
            this.satisfiesScheduledActionsInvariant();
            // Defensively reset all scheduled actions, potentially cleans up other runtime garbage
            this.scheduledActions = new Set();
        }
    };
    captureIncrement = (elements, appState) => {
        const prevSnapshot = this.snapshot;
        const nextSnapshot = this.snapshot.maybeClone(elements, appState);
        // Optimisation, don't continue if nothing has changed
        if (prevSnapshot !== nextSnapshot) {
            // Calculate and record the changes based on the previous and next snapshot
            const elementsChange = nextSnapshot.meta.didElementsChange
                ? ElementsChange.calculate(prevSnapshot.elements, nextSnapshot.elements)
                : ElementsChange.empty();
            const appStateChange = nextSnapshot.meta.didAppStateChange
                ? AppStateChange.calculate(prevSnapshot.appState, nextSnapshot.appState)
                : AppStateChange.empty();
            if (!elementsChange.isEmpty() || !appStateChange.isEmpty()) {
                // Notify listeners with the increment
                this.onStoreIncrementEmitter.trigger(new StoreIncrementEvent(elementsChange, appStateChange));
            }
            // Update snapshot
            this.snapshot = nextSnapshot;
        }
    };
    updateSnapshot = (elements, appState) => {
        const nextSnapshot = this.snapshot.maybeClone(elements, appState);
        if (this.snapshot !== nextSnapshot) {
            // Update snapshot
            this.snapshot = nextSnapshot;
        }
    };
    filterUncomittedElements = (prevElements, nextElements) => {
        for (const [id, prevElement] of prevElements.entries()) {
            const nextElement = nextElements.get(id);
            if (!nextElement) {
                // Nothing to care about here, elements were forcefully deleted
                continue;
            }
            const elementSnapshot = this.snapshot.elements.get(id);
            // Checks for in progress async user action
            if (!elementSnapshot) {
                // Detected yet uncomitted local element
                nextElements.delete(id);
            }
            else if (elementSnapshot.version < prevElement.version) {
                // Element was already commited, but the snapshot version is lower than current current local version
                nextElements.set(id, elementSnapshot);
            }
        }
        return nextElements;
    };
    clear = () => {
        this.snapshot = Snapshot.empty();
        this.scheduledActions = new Set();
    };
    satisfiesScheduledActionsInvariant = () => {
        if (!(this.scheduledActions.size >= 0 && this.scheduledActions.size <= 3)) {
            const message = `There can be at most three store actions scheduled at the same time, but there are "${this.scheduledActions.size}".`;
            console.error(message, this.scheduledActions.values());
            if (import.meta.env.DEV || import.meta.env.MODE === ENV.TEST) {
                throw new Error(message);
            }
        }
    };
}
export class Snapshot {
    elements;
    appState;
    meta;
    constructor(elements, appState, meta = {
        didElementsChange: false,
        didAppStateChange: false,
        isEmpty: false,
    }) {
        this.elements = elements;
        this.appState = appState;
        this.meta = meta;
    }
    static empty() {
        return new Snapshot(new Map(), getObservedAppState(getDefaultAppState()), { didElementsChange: false, didAppStateChange: false, isEmpty: true });
    }
    isEmpty() {
        return this.meta.isEmpty;
    }
    /**
     * Efficiently clone the existing snapshot, only if we detected changes.
     *
     * @returns same instance if there are no changes detected, new instance otherwise.
     */
    maybeClone(elements, appState) {
        const nextElementsSnapshot = this.maybeCreateElementsSnapshot(elements);
        const nextAppStateSnapshot = this.maybeCreateAppStateSnapshot(appState);
        let didElementsChange = false;
        let didAppStateChange = false;
        if (this.elements !== nextElementsSnapshot) {
            didElementsChange = true;
        }
        if (this.appState !== nextAppStateSnapshot) {
            didAppStateChange = true;
        }
        if (!didElementsChange && !didAppStateChange) {
            return this;
        }
        const snapshot = new Snapshot(nextElementsSnapshot, nextAppStateSnapshot, {
            didElementsChange,
            didAppStateChange,
        });
        return snapshot;
    }
    maybeCreateAppStateSnapshot(appState) {
        if (!appState) {
            return this.appState;
        }
        // Not watching over everything from the app state, just the relevant props
        const nextAppStateSnapshot = !isObservedAppState(appState)
            ? getObservedAppState(appState)
            : appState;
        const didAppStateChange = this.detectChangedAppState(nextAppStateSnapshot);
        if (!didAppStateChange) {
            return this.appState;
        }
        return nextAppStateSnapshot;
    }
    detectChangedAppState(nextObservedAppState) {
        return !isShallowEqual(this.appState, nextObservedAppState, {
            selectedElementIds: isShallowEqual,
            selectedGroupIds: isShallowEqual,
        });
    }
    maybeCreateElementsSnapshot(elements) {
        if (!elements) {
            return this.elements;
        }
        const didElementsChange = this.detectChangedElements(elements);
        if (!didElementsChange) {
            return this.elements;
        }
        const elementsSnapshot = this.createElementsSnapshot(elements);
        return elementsSnapshot;
    }
    /**
     * Detect if there any changed elements.
     *
     * NOTE: we shouldn't just use `sceneVersionNonce` instead, as we need to call this before the scene updates.
     */
    detectChangedElements(nextElements) {
        if (this.elements === nextElements) {
            return false;
        }
        if (this.elements.size !== nextElements.size) {
            return true;
        }
        // loop from right to left as changes are likelier to happen on new elements
        const keys = Array.from(nextElements.keys());
        for (let i = keys.length - 1; i >= 0; i--) {
            const prev = this.elements.get(keys[i]);
            const next = nextElements.get(keys[i]);
            if (!prev ||
                !next ||
                prev.id !== next.id ||
                prev.versionNonce !== next.versionNonce) {
                return true;
            }
        }
        return false;
    }
    /**
     * Perform structural clone, cloning only elements that changed.
     */
    createElementsSnapshot(nextElements) {
        const clonedElements = new Map();
        for (const [id, prevElement] of this.elements.entries()) {
            // Clone previous elements, never delete, in case nextElements would be just a subset of previous elements
            // i.e. during collab, persist or whenenever isDeleted elements get cleared
            if (!nextElements.get(id)) {
                // When we cannot find the prev element in the next elements, we mark it as deleted
                clonedElements.set(id, newElementWith(prevElement, { isDeleted: true }));
            }
            else {
                clonedElements.set(id, prevElement);
            }
        }
        for (const [id, nextElement] of nextElements.entries()) {
            const prevElement = clonedElements.get(id);
            // At this point our elements are reconcilled already, meaning the next element is always newer
            if (!prevElement || // element was added
                (prevElement && prevElement.versionNonce !== nextElement.versionNonce) // element was updated
            ) {
                clonedElements.set(id, deepCopyElement(nextElement));
            }
        }
        return clonedElements;
    }
}
