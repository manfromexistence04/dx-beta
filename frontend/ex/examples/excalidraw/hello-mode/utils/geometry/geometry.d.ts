import {
  Point,
  Line,
  Polygon,
  Curve,
  Ellipse,
  Polycurve,
  Polyline,
} from "./shape";
/**
 * utils
 */
export declare const cross: (a: Point, b: Point, o: Point) => number;
export declare const isClosed: (polygon: Polygon) => boolean;
export declare const close: (polygon: Polygon) => Polygon;
/**
 * angles
 */
export declare const angleToDegrees: (angle: number) => number;
export declare const angleToRadians: (angle: number) => number;
export declare const angleReflect: (
  incidenceAngle: number,
  surfaceAngle: number,
) => number;
export declare const pointRotate: (
  point: Point,
  angle: number,
  origin?: Point,
) => Point;
export declare const pointTranslate: (
  point: Point,
  angle?: number,
  distance?: number,
) => Point;
export declare const pointInverse: (point: Point) => Point;
export declare const pointAdd: (pointA: Point, pointB: Point) => Point;
export declare const distanceToPoint: (p1: Point, p2: Point) => number;
/**
 * lines
 */
export declare const lineAngle: (line: Line) => number;
export declare const lineLength: (line: Line) => number;
export declare const lineMidpoint: (line: Line) => Point;
export declare const lineRotate: (
  line: Line,
  angle: number,
  origin?: Point,
) => Line;
export declare const lineTranslate: (
  line: Line,
  angle: number,
  distance: number,
) => Point[];
export declare const lineInterpolate: (
  line: Line,
  clamp?: boolean,
) => (t: number) => Point;
export declare const curveToBezier: (
  pointsIn: readonly Point[],
  curveTightness?: number,
) => Point[];
export declare const curveRotate: (
  curve: Curve,
  angle: number,
  origin: Point,
) => Point[];
export declare const cubicBezierPoint: (
  t: number,
  controlPoints: Curve,
) => Point;
export declare const cubicBezierDistance: (
  point: Point,
  controlPoints: Curve,
) => number;
/**
 * polygons
 */
export declare const polygonRotate: (
  polygon: Polygon,
  angle: number,
  origin: Point,
) => Point[];
export declare const polygonBounds: (polygon: Polygon) => [Point, Point];
export declare const polygonCentroid: (vertices: Point[]) => Point;
export declare const polygonScale: (
  polygon: Polygon,
  scale: number,
  origin?: Point,
) => Polygon;
export declare const polygonScaleX: (
  polygon: Polygon,
  scale: number,
  origin?: Point,
) => Polygon;
export declare const polygonScaleY: (
  polygon: Polygon,
  scale: number,
  origin?: Point,
) => Polygon;
export declare const polygonReflectX: (
  polygon: Polygon,
  reflectFactor?: number,
) => Point[];
export declare const polygonReflectY: (
  polygon: Polygon,
  reflectFactor?: number,
) => Point[];
export declare const polygonTranslate: (
  polygon: Polygon,
  angle: number,
  distance: number,
) => Point[];
/**
 * ellipses
 */
export declare const ellipseAxes: (ellipse: Ellipse) => {
  majorAxis: number;
  minorAxis: number;
};
export declare const ellipseFocusToCenter: (ellipse: Ellipse) => number;
export declare const ellipseExtremes: (ellipse: Ellipse) => Point[];
export declare const pointRelativeToCenter: (
  point: Point,
  center: Point,
  angle: number,
) => Point;
export declare const pointLeftofLine: (point: Point, line: Line) => boolean;
export declare const pointRightofLine: (point: Point, line: Line) => boolean;
export declare const distanceToSegment: (point: Point, line: Line) => number;
export declare const pointOnLine: (
  point: Point,
  line: Line,
  threshold?: number,
) => boolean;
export declare const pointOnPolyline: (
  point: Point,
  polyline: Polyline,
  threshold?: number,
) => boolean;
export declare const lineIntersectsLine: (lineA: Line, lineB: Line) => boolean;
export declare const lineIntersectsPolygon: (
  line: Line,
  polygon: Polygon,
) => boolean;
export declare const pointInBezierEquation: (
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  [mx, my]: Point,
  lineThreshold: number,
) => boolean;
export declare const cubicBezierEquation: (
  curve: Curve,
) => (t: number, idx: number) => number;
export declare const polyLineFromCurve: (
  curve: Curve,
  segments?: number,
) => Polyline;
export declare const pointOnCurve: (
  point: Point,
  curve: Curve,
  threshold?: number,
) => boolean;
export declare const pointOnPolycurve: (
  point: Point,
  polycurve: Polycurve,
  threshold?: number,
) => boolean;
export declare const pointInPolygon: (
  point: Point,
  polygon: Polygon,
) => boolean;
export declare const pointOnPolygon: (
  point: Point,
  polygon: Polygon,
  threshold?: number,
) => boolean;
export declare const polygonInPolygon: (
  polygonA: Polygon,
  polygonB: Polygon,
) => boolean;
export declare const polygonIntersectPolygon: (
  polygonA: Polygon,
  polygonB: Polygon,
) => boolean;
export declare const pointOnEllipse: (
  point: Point,
  ellipse: Ellipse,
  threshold?: number,
) => boolean;
export declare const pointInEllipse: (
  point: Point,
  ellipse: Ellipse,
) => boolean;
