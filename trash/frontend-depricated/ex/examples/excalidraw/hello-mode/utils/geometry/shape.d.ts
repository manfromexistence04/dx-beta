/**
 * this file defines pure geometric shapes
 *
 * for instance, a cubic bezier curve is specified by its four control points and
 * an ellipse is defined by its center, angle, semi major axis and semi minor axis
 * (but in semi-width and semi-height so it's more relevant to Excalidraw)
 *
 * the idea with pure shapes is so that we can provide collision and other geoemtric methods not depending on
 * the specifics of roughjs or elements in Excalidraw; instead, we can focus on the pure shapes themselves
 *
 * also included in this file are methods for converting an Excalidraw element or a Drawable from roughjs
 * to pure shapes
 */
import {
  ElementsMap,
  ExcalidrawDiamondElement,
  ExcalidrawElement,
  ExcalidrawEllipseElement,
  ExcalidrawEmbeddableElement,
  ExcalidrawFrameLikeElement,
  ExcalidrawFreeDrawElement,
  ExcalidrawIframeElement,
  ExcalidrawImageElement,
  ExcalidrawLinearElement,
  ExcalidrawRectangleElement,
  ExcalidrawSelectionElement,
  ExcalidrawTextElement,
} from "../../excalidraw/element/types";
import type { Drawable, Op } from "roughjs/bin/core";
export type Point = [number, number];
export type Vector = Point;
export type Line = [Point, Point];
export type Polyline = Line[];
export type Curve = [Point, Point, Point, Point];
export type Polycurve = Curve[];
export type Polygon = Point[];
export type Ellipse = {
  center: Point;
  angle: number;
  halfWidth: number;
  halfHeight: number;
};
export type GeometricShape =
  | {
      type: "line";
      data: Line;
    }
  | {
      type: "polygon";
      data: Polygon;
    }
  | {
      type: "curve";
      data: Curve;
    }
  | {
      type: "ellipse";
      data: Ellipse;
    }
  | {
      type: "polyline";
      data: Polyline;
    }
  | {
      type: "polycurve";
      data: Polycurve;
    };
type RectangularElement =
  | ExcalidrawRectangleElement
  | ExcalidrawDiamondElement
  | ExcalidrawFrameLikeElement
  | ExcalidrawEmbeddableElement
  | ExcalidrawImageElement
  | ExcalidrawIframeElement
  | ExcalidrawTextElement
  | ExcalidrawSelectionElement;
export declare const getPolygonShape: (
  element: RectangularElement,
) => GeometricShape;
export declare const getSelectionBoxShape: (
  element: ExcalidrawElement,
  elementsMap: ElementsMap,
  padding?: number,
) => GeometricShape;
export declare const getEllipseShape: (
  element: ExcalidrawEllipseElement,
) => GeometricShape;
export declare const getCurvePathOps: (shape: Drawable) => Op[];
export declare const getCurveShape: (
  roughShape: Drawable,
  startingPoint: Point | undefined,
  angleInRadian: number,
  center: Point,
) => GeometricShape;
export declare const getFreedrawShape: (
  element: ExcalidrawFreeDrawElement,
  center: Point,
  isClosed?: boolean,
) => GeometricShape;
export declare const getClosedCurveShape: (
  element: ExcalidrawLinearElement,
  roughShape: Drawable,
  startingPoint: Point | undefined,
  angleInRadian: number,
  center: Point,
) => GeometricShape;
export {};
