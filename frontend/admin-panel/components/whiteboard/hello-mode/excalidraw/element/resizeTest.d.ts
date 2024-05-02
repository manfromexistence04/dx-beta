import { ExcalidrawElement, PointerType, NonDeletedExcalidrawElement, ElementsMap } from "./types";
import { MaybeTransformHandleType } from "./transformHandles";
import { AppState, Device, Zoom } from "../types";
import { Bounds } from "./bounds";
export declare const resizeTest: (element: NonDeletedExcalidrawElement, elementsMap: ElementsMap, appState: AppState, x: number, y: number, zoom: Zoom, pointerType: PointerType, device: Device) => MaybeTransformHandleType;
export declare const getElementWithTransformHandleType: (elements: readonly NonDeletedExcalidrawElement[], appState: AppState, scenePointerX: number, scenePointerY: number, zoom: Zoom, pointerType: PointerType, elementsMap: ElementsMap, device: Device) => {
    element: NonDeletedExcalidrawElement;
    transformHandleType: MaybeTransformHandleType;
} | null;
export declare const getTransformHandleTypeFromCoords: ([x1, y1, x2, y2]: Bounds, scenePointerX: number, scenePointerY: number, zoom: Zoom, pointerType: PointerType, device: Device) => MaybeTransformHandleType;
export declare const getCursorForResizingElement: (resizingElement: {
    element?: ExcalidrawElement;
    transformHandleType: MaybeTransformHandleType;
}) => string;
