import { ExcalidrawElement, ExcalidrawTextElement, NonDeletedExcalidrawElement, ExcalidrawFreeDrawElement, ExcalidrawFrameLikeElement, NonDeletedSceneElementsMap } from "../element/types";
import type { RoughCanvas } from "roughjs/bin/canvas";
import { StaticCanvasRenderConfig, RenderableElementsMap } from "../scene/types";
import { AppState, StaticCanvasAppState, InteractiveCanvasAppState, ElementsPendingErasure } from "../types";
export declare const IMAGE_INVERT_FILTER = "invert(100%) hue-rotate(180deg) saturate(1.25)";
export declare const getRenderOpacity: (element: ExcalidrawElement, containingFrame: ExcalidrawFrameLikeElement | null, elementsPendingErasure: ElementsPendingErasure) => number;
export interface ExcalidrawElementWithCanvas {
    element: ExcalidrawElement | ExcalidrawTextElement;
    canvas: HTMLCanvasElement;
    theme: AppState["theme"];
    scale: number;
    zoomValue: AppState["zoom"]["value"];
    canvasOffsetX: number;
    canvasOffsetY: number;
    boundTextElementVersion: number | null;
    containingFrameOpacity: number;
}
export declare const DEFAULT_LINK_SIZE = 14;
export declare const elementWithCanvasCache: WeakMap<ExcalidrawElement, ExcalidrawElementWithCanvas>;
export declare const renderSelectionElement: (element: NonDeletedExcalidrawElement, context: CanvasRenderingContext2D, appState: InteractiveCanvasAppState) => void;
export declare const renderElement: (element: NonDeletedExcalidrawElement, elementsMap: RenderableElementsMap, allElementsMap: NonDeletedSceneElementsMap, rc: RoughCanvas, context: CanvasRenderingContext2D, renderConfig: StaticCanvasRenderConfig, appState: StaticCanvasAppState) => void;
export declare const pathsCache: WeakMap<ExcalidrawFreeDrawElement, Path2D>;
export declare function generateFreeDrawShape(element: ExcalidrawFreeDrawElement): Path2D;
export declare function getFreeDrawPath2D(element: ExcalidrawFreeDrawElement): Path2D | undefined;
export declare function getFreeDrawSvgPath(element: ExcalidrawFreeDrawElement): string;
