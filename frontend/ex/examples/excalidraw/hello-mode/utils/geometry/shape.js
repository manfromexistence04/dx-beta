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
import { getElementAbsoluteCoords } from "../../excalidraw/element";
import { angleToDegrees, close, pointAdd, pointRotate } from "./geometry";
import { pointsOnBezierCurves } from "points-on-curve";
// polygon
export const getPolygonShape = (element) => {
    const { angle, width, height, x, y } = element;
    const angleInDegrees = angleToDegrees(angle);
    const cx = x + width / 2;
    const cy = y + height / 2;
    const center = [cx, cy];
    let data = [];
    if (element.type === "diamond") {
        data = [
            pointRotate([cx, y], angleInDegrees, center),
            pointRotate([x + width, cy], angleInDegrees, center),
            pointRotate([cx, y + height], angleInDegrees, center),
            pointRotate([x, cy], angleInDegrees, center),
        ];
    }
    else {
        data = [
            pointRotate([x, y], angleInDegrees, center),
            pointRotate([x + width, y], angleInDegrees, center),
            pointRotate([x + width, y + height], angleInDegrees, center),
            pointRotate([x, y + height], angleInDegrees, center),
        ];
    }
    return {
        type: "polygon",
        data,
    };
};
// return the selection box for an element, possibly rotated as well
export const getSelectionBoxShape = (element, elementsMap, padding = 10) => {
    let [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(element, elementsMap, true);
    x1 -= padding;
    x2 += padding;
    y1 -= padding;
    y2 += padding;
    const angleInDegrees = angleToDegrees(element.angle);
    const center = [cx, cy];
    const topLeft = pointRotate([x1, y1], angleInDegrees, center);
    const topRight = pointRotate([x2, y1], angleInDegrees, center);
    const bottomLeft = pointRotate([x1, y2], angleInDegrees, center);
    const bottomRight = pointRotate([x2, y2], angleInDegrees, center);
    return {
        type: "polygon",
        data: [topLeft, topRight, bottomRight, bottomLeft],
    };
};
// ellipse
export const getEllipseShape = (element) => {
    const { width, height, angle, x, y } = element;
    return {
        type: "ellipse",
        data: {
            center: [x + width / 2, y + height / 2],
            angle,
            halfWidth: width / 2,
            halfHeight: height / 2,
        },
    };
};
export const getCurvePathOps = (shape) => {
    for (const set of shape.sets) {
        if (set.type === "path") {
            return set.ops;
        }
    }
    return shape.sets[0].ops;
};
// linear
export const getCurveShape = (roughShape, startingPoint = [0, 0], angleInRadian, center) => {
    const transform = (p) => pointRotate([p[0] + startingPoint[0], p[1] + startingPoint[1]], angleToDegrees(angleInRadian), center);
    const ops = getCurvePathOps(roughShape);
    const polycurve = [];
    let p0 = [0, 0];
    for (const op of ops) {
        if (op.op === "move") {
            p0 = transform(op.data);
        }
        if (op.op === "bcurveTo") {
            const p1 = transform([op.data[0], op.data[1]]);
            const p2 = transform([op.data[2], op.data[3]]);
            const p3 = transform([op.data[4], op.data[5]]);
            polycurve.push([p0, p1, p2, p3]);
            p0 = p3;
        }
    }
    return {
        type: "polycurve",
        data: polycurve,
    };
};
const polylineFromPoints = (points) => {
    let previousPoint = points[0];
    const polyline = [];
    for (let i = 1; i < points.length; i++) {
        const nextPoint = points[i];
        polyline.push([previousPoint, nextPoint]);
        previousPoint = nextPoint;
    }
    return polyline;
};
export const getFreedrawShape = (element, center, isClosed = false) => {
    const angle = angleToDegrees(element.angle);
    const transform = (p) => pointRotate(pointAdd(p, [element.x, element.y]), angle, center);
    const polyline = polylineFromPoints(element.points.map((p) => transform(p)));
    return isClosed
        ? {
            type: "polygon",
            data: close(polyline.flat()),
        }
        : {
            type: "polyline",
            data: polyline,
        };
};
export const getClosedCurveShape = (element, roughShape, startingPoint = [0, 0], angleInRadian, center) => {
    const transform = (p) => pointRotate([p[0] + startingPoint[0], p[1] + startingPoint[1]], angleToDegrees(angleInRadian), center);
    if (element.roundness === null) {
        return {
            type: "polygon",
            data: close(element.points.map((p) => transform(p))),
        };
    }
    const ops = getCurvePathOps(roughShape);
    const points = [];
    let odd = false;
    for (const operation of ops) {
        if (operation.op === "move") {
            odd = !odd;
            if (odd) {
                points.push([operation.data[0], operation.data[1]]);
            }
        }
        else if (operation.op === "bcurveTo") {
            if (odd) {
                points.push([operation.data[0], operation.data[1]]);
                points.push([operation.data[2], operation.data[3]]);
                points.push([operation.data[4], operation.data[5]]);
            }
        }
        else if (operation.op === "lineTo") {
            if (odd) {
                points.push([operation.data[0], operation.data[1]]);
            }
        }
    }
    const polygonPoints = pointsOnBezierCurves(points, 10, 5).map((p) => transform(p));
    return {
        type: "polygon",
        data: polygonPoints,
    };
};
