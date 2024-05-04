import { jsx as _jsx } from "react/jsx-runtime";
import { sceneCoordsToViewportCoords } from "../utils";
import { getElementAbsoluteCoords } from ".";
import { useExcalidrawAppState } from "../components/App";
import "./ElementCanvasButtons.scss";
const CONTAINER_PADDING = 5;
const getContainerCoords = (element, appState, elementsMap) => {
    const [x1, y1] = getElementAbsoluteCoords(element, elementsMap);
    const { x: viewportX, y: viewportY } = sceneCoordsToViewportCoords({ sceneX: x1 + element.width, sceneY: y1 }, appState);
    const x = viewportX - appState.offsetLeft + 10;
    const y = viewportY - appState.offsetTop;
    return { x, y };
};
export const ElementCanvasButtons = ({ children, element, elementsMap, }) => {
    const appState = useExcalidrawAppState();
    if (appState.contextMenu ||
        appState.draggingElement ||
        appState.resizingElement ||
        appState.isRotating ||
        appState.openMenu ||
        appState.viewModeEnabled) {
        return null;
    }
    const { x, y } = getContainerCoords(element, appState, elementsMap);
    return (_jsx("div", { className: "excalidraw-canvas-buttons", style: {
            top: `${y}px`,
            left: `${x}px`,
            // width: CONTAINER_WIDTH,
            padding: CONTAINER_PADDING,
        }, children: children }));
};
