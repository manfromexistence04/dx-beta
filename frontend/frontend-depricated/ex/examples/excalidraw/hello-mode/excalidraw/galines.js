import * as GA from "./ga";
/**
 * A line is stored as an array `[0, c, a, b, 0, 0, 0, 0]` representing:
 *   c * e0 + a * e1 + b*e2
 *
 * This maps to a standard formula `a * x + b * y + c`.
 *
 * `(-b, a)` corresponds to a 2D vector parallel to the line. The lines
 * have a natural orientation, corresponding to that vector.
 *
 * The magnitude ("norm") of the line is `sqrt(a ^ 2 + b ^ 2)`.
 * `c / norm(line)` is the oriented distance from line to origin.
 */
// Returns line with direction (x, y) through origin
export const vector = (x, y) => GA.normalized([0, 0, -y, x, 0, 0, 0, 0]);
// For equation ax + by + c = 0.
export const equation = (a, b, c) => GA.normalized([0, c, a, b, 0, 0, 0, 0]);
export const through = (from, to) => GA.normalized(GA.join(to, from));
export const orthogonal = (line, point) => GA.dot(line, point);
// Returns a line perpendicular to the line through `against` and `intersection`
// going through `intersection`.
export const orthogonalThrough = (against, intersection) => orthogonal(through(against, intersection), intersection);
export const parallel = (line, distance) => {
    const result = line.slice();
    result[1] -= distance;
    return result;
};
export const parallelThrough = (line, point) => orthogonal(orthogonal(point, line), point);
export const distance = (line1, line2) => GA.inorm(GA.meet(line1, line2));
export const angle = (line1, line2) => Math.acos(GA.dot(line1, line2)[0]);
// The orientation of the line
export const sign = (line) => Math.sign(line[1]);
