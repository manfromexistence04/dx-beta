import {
  ExcalidrawLinearElement,
  NonDeletedExcalidrawElement,
  NonDeleted,
  ElementsMap,
} from "./types";
import {
  MaybeTransformHandleType,
  TransformHandleDirection,
} from "./transformHandles";
import { PointerDownState } from "../types";
export declare const normalizeAngle: (angle: number) => number;
export declare const transformElements: (
  originalElements: PointerDownState["originalElements"],
  transformHandleType: MaybeTransformHandleType,
  selectedElements: readonly NonDeletedExcalidrawElement[],
  elementsMap: ElementsMap,
  shouldRotateWithDiscreteAngle: boolean,
  shouldResizeFromCenter: boolean,
  shouldMaintainAspectRatio: boolean,
  pointerX: number,
  pointerY: number,
  centerX: number,
  centerY: number,
) => boolean;
export declare const resizeSingleElement: (
  originalElements: PointerDownState["originalElements"],
  shouldMaintainAspectRatio: boolean,
  element: NonDeletedExcalidrawElement,
  elementsMap: ElementsMap,
  transformHandleDirection: TransformHandleDirection,
  shouldResizeFromCenter: boolean,
  pointerX: number,
  pointerY: number,
) => void;
export declare const resizeMultipleElements: (
  originalElements: PointerDownState["originalElements"],
  selectedElements: readonly NonDeletedExcalidrawElement[],
  elementsMap: ElementsMap,
  transformHandleType: TransformHandleDirection,
  shouldResizeFromCenter: boolean,
  shouldMaintainAspectRatio: boolean,
  pointerX: number,
  pointerY: number,
) => void;
export declare const getResizeOffsetXY: (
  transformHandleType: MaybeTransformHandleType,
  selectedElements: NonDeletedExcalidrawElement[],
  elementsMap: ElementsMap,
  x: number,
  y: number,
) => [number, number];
export declare const getResizeArrowDirection: (
  transformHandleType: MaybeTransformHandleType,
  element: NonDeleted<ExcalidrawLinearElement>,
) => "origin" | "end";
