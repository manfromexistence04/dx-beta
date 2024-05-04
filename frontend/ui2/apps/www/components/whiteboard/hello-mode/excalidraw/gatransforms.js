import * as GA from "./ga";
import * as GADirection from "./gadirections";
/**
 * TODO: docs
 */
export const rotation = (pivot, angle) => GA.add(GA.mul(pivot, Math.sin(angle / 2)), Math.cos(angle / 2));
export const translation = (direction) => [
    1,
    0,
    0,
    0,
    -(0.5 * direction[5]),
    0.5 * direction[4],
    0,
    0,
];
export const translationOrthogonal = (direction, distance) => {
    const scale = 0.5 * distance;
    return [1, 0, 0, 0, scale * direction[4], scale * direction[5], 0, 0];
};
export const translationAlong = (line, distance) => GA.add(GA.mul(GADirection.orthogonalToLine(line), 0.5 * distance), 1);
export const compose = (motor1, motor2) => GA.mul(motor2, motor1);
export const apply = (motor, nvector) => GA.normalized(GA.mul(GA.mul(motor, nvector), GA.reverse(motor)));
