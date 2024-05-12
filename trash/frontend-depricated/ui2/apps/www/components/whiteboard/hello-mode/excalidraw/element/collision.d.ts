import { ElementsMap, ExcalidrawElement } from "./types";
import { FrameNameBounds } from "../types";
import { GeometricShape } from "../../utils/geometry/shape";
export declare const shouldTestInside: (element: ExcalidrawElement) => boolean;
export type HitTestArgs = {
    x: number;
    y: number;
    element: ExcalidrawElement;
    shape: GeometricShape;
    threshold?: number;
    frameNameBound?: FrameNameBounds | null;
};
export declare const hitElementItself: ({ x, y, element, shape, threshold, frameNameBound, }: HitTestArgs) => boolean;
export declare const hitElementBoundingBox: (x: number, y: number, element: ExcalidrawElement, elementsMap: ElementsMap, tolerance?: number) => boolean;
export declare const hitElementBoundingBoxOnly: (hitArgs: HitTestArgs, elementsMap: ElementsMap) => boolean;
export declare const hitElementBoundText: (x: number, y: number, textShape: GeometricShape | null) => boolean | null;
