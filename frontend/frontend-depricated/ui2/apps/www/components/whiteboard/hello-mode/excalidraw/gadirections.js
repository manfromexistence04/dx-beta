import * as GA from "./ga";
/**
 * A direction is stored as an array `[0, 0, 0, 0, y, x, 0, 0]` representing
 * vector `(x, y)`.
 */
export const from = (point) => [
    0,
    0,
    0,
    0,
    point[4],
    point[5],
    0,
    0,
];
export const fromTo = (from, to) => GA.inormalized([0, 0, 0, 0, to[4] - from[4], to[5] - from[5], 0, 0]);
export const orthogonal = (direction) => GA.inormalized([0, 0, 0, 0, -direction[5], direction[4], 0, 0]);
export const orthogonalToLine = (line) => GA.mul(line, GA.I);
