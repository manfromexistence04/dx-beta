import { jsx as _jsx } from "react/jsx-runtime";
import { UndoIcon, RedoIcon } from "../components/icons";
import { ToolButton } from "../components/ToolButton";
import { t } from "../i18n";
import { HistoryChangedEvent } from "../history";
import { KEYS } from "../keys";
import { arrayToMap } from "../utils";
import { isWindows } from "../constants";
import { StoreAction } from "../store";
import { useEmitter } from "../hooks/useEmitter";
const writeData = (appState, updater) => {
    if (!appState.multiElement &&
        !appState.resizingElement &&
        !appState.editingElement &&
        !appState.draggingElement) {
        const result = updater();
        if (!result) {
            return { storeAction: StoreAction.NONE };
        }
        const [nextElementsMap, nextAppState] = result;
        const nextElements = Array.from(nextElementsMap.values());
        return {
            appState: nextAppState,
            elements: nextElements,
            storeAction: StoreAction.UPDATE,
        };
    }
    return { storeAction: StoreAction.NONE };
};
export const createUndoAction = (history, store) => ({
    name: "undo",
    label: "buttons.undo",
    icon: UndoIcon,
    trackEvent: { category: "history" },
    viewMode: false,
    perform: (elements, appState) => writeData(appState, () => history.undo(arrayToMap(elements), // TODO: #7348 refactor action manager to already include `SceneElementsMap`
    appState, store.snapshot)),
    keyTest: (event) => event[KEYS.CTRL_OR_CMD] &&
        event.key.toLowerCase() === KEYS.Z &&
        !event.shiftKey,
    PanelComponent: ({ updateData, data }) => {
        const { isUndoStackEmpty } = useEmitter(history.onHistoryChangedEmitter, new HistoryChangedEvent());
        return (_jsx(ToolButton, { type: "button", icon: UndoIcon, "aria-label": t("buttons.undo"), onClick: updateData, size: data?.size || "medium", disabled: isUndoStackEmpty }));
    },
});
export const createRedoAction = (history, store) => ({
    name: "redo",
    label: "buttons.redo",
    icon: RedoIcon,
    trackEvent: { category: "history" },
    viewMode: false,
    perform: (elements, appState) => writeData(appState, () => history.redo(arrayToMap(elements), // TODO: #7348 refactor action manager to already include `SceneElementsMap`
    appState, store.snapshot)),
    keyTest: (event) => (event[KEYS.CTRL_OR_CMD] &&
        event.shiftKey &&
        event.key.toLowerCase() === KEYS.Z) ||
        (isWindows && event.ctrlKey && !event.shiftKey && event.key === KEYS.Y),
    PanelComponent: ({ updateData, data }) => {
        const { isRedoStackEmpty } = useEmitter(history.onHistoryChangedEmitter, new HistoryChangedEvent());
        return (_jsx(ToolButton, { type: "button", icon: RedoIcon, "aria-label": t("buttons.redo"), onClick: updateData, size: data?.size || "medium", disabled: isRedoStackEmpty }));
    },
});
