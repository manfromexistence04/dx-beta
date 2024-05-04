import * as GA from "./ga";
import * as GALine from "./galines";
import { join } from "./ga";
export const from = ([x, y]) => [
    0,
    0,
    0,
    0,
    y,
    x,
    1,
    0,
];
export const toTuple = (point) => [point[5], point[4]];
export const abs = (point) => [
    0,
    0,
    0,
    0,
    Math.abs(point[4]),
    Math.abs(point[5]),
    1,
    0,
];
export const intersect = (line1, line2) => GA.normalized(GA.meet(line1, line2));
// Projects `point` onto the `line`.
// The returned point is the closest point on the `line` to the `point`.
export const project = (point, line) => intersect(GALine.orthogonal(line, point), line);
export const distance = (point1, point2) => GA.norm(join(point1, point2));
export const distanceToLine = (point, line) => GA.joinScalar(point, line);
