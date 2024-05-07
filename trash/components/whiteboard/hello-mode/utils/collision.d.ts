import { Point, Polygon, GeometricShape } from "./geometry/shape";
export declare const isPointOnShape: (point: Point, shape: GeometricShape, tolerance?: number) => boolean;
export declare const isPointInShape: (point: Point, shape: GeometricShape) => boolean;
export declare const isPointInBounds: (point: Point, bounds: Polygon) => boolean;
