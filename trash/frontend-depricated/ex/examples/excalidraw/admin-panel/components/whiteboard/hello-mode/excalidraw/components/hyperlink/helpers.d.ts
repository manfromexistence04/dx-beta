import { Bounds } from "../../element/bounds";
import { ElementsMap, NonDeletedExcalidrawElement } from "../../element/types";
import { AppState, UIAppState } from "../../types";
export declare const EXTERNAL_LINK_IMG: HTMLImageElement;
export declare const getLinkHandleFromCoords: ([x1, y1, x2, y2]: Bounds, angle: number, appState: Pick<UIAppState, "zoom">) => Bounds;
export declare const isPointHittingLinkIcon: (element: NonDeletedExcalidrawElement, elementsMap: ElementsMap, appState: AppState, [x, y]: readonly [number, number]) => boolean;
export declare const isPointHittingLink: (element: NonDeletedExcalidrawElement, elementsMap: ElementsMap, appState: AppState, [x, y]: readonly [number, number], isMobile: boolean) => boolean;
