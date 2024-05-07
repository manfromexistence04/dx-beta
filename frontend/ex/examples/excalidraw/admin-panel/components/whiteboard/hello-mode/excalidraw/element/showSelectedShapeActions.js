import { getSelectedElements } from "../scene";
export const showSelectedShapeActions = (appState, elements) => Boolean(!appState.viewModeEnabled &&
    ((appState.activeTool.type !== "custom" &&
        (appState.editingElement ||
            (appState.activeTool.type !== "selection" &&
                appState.activeTool.type !== "eraser" &&
                appState.activeTool.type !== "hand" &&
                appState.activeTool.type !== "laser"))) ||
        getSelectedElements(elements, appState).length));
