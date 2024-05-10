import Scene from "../scene/Scene";
import { getSizeFromPoints } from "../points";
import { randomInteger } from "../random";
import { getUpdatedTimestamp } from "../utils";
import { ShapeCache } from "../scene/ShapeCache";
// This function tracks updates of text elements for the purposes for collaboration.
// The version is used to compare updates when more than one user is working in
// the same drawing. Note: this will trigger the component to update. Make sure you
// are calling it either from a React event handler or within unstable_batchedUpdates().
export const mutateElement = (element, updates, informMutation = true) => {
    let didChange = false;
    // casting to any because can't use `in` operator
    // (see https://github.com/microsoft/TypeScript/issues/21732)
    const { points, fileId } = updates;
    if (typeof points !== "undefined") {
        updates = { ...getSizeFromPoints(points), ...updates };
    }
    for (const key in updates) {
        const value = updates[key];
        if (typeof value !== "undefined") {
            if (element[key] === value &&
                // if object, always update because its attrs could have changed
                // (except for specific keys we handle below)
                (typeof value !== "object" ||
                    value === null ||
                    key === "groupIds" ||
                    key === "scale")) {
                continue;
            }
            if (key === "scale") {
                const prevScale = element[key];
                const nextScale = value;
                if (prevScale[0] === nextScale[0] && prevScale[1] === nextScale[1]) {
                    continue;
                }
            }
            else if (key === "points") {
                const prevPoints = element[key];
                const nextPoints = value;
                if (prevPoints.length === nextPoints.length) {
                    let didChangePoints = false;
                    let index = prevPoints.length;
                    while (--index) {
                        const prevPoint = prevPoints[index];
                        const nextPoint = nextPoints[index];
                        if (prevPoint[0] !== nextPoint[0] ||
                            prevPoint[1] !== nextPoint[1]) {
                            didChangePoints = true;
                            break;
                        }
                    }
                    if (!didChangePoints) {
                        continue;
                    }
                }
            }
            element[key] = value;
            didChange = true;
        }
    }
    if (!didChange) {
        return element;
    }
    if (typeof updates.height !== "undefined" ||
        typeof updates.width !== "undefined" ||
        typeof fileId != "undefined" ||
        typeof points !== "undefined") {
        ShapeCache.delete(element);
    }
    element.version++;
    element.versionNonce = randomInteger();
    element.updated = getUpdatedTimestamp();
    if (informMutation) {
        Scene.getScene(element)?.informMutation();
    }
    return element;
};
export const newElementWith = (element, updates) => {
    let didChange = false;
    for (const key in updates) {
        const value = updates[key];
        if (typeof value !== "undefined") {
            if (element[key] === value &&
                // if object, always update because its attrs could have changed
                (typeof value !== "object" || value === null)) {
                continue;
            }
            didChange = true;
        }
    }
    if (!didChange) {
        return element;
    }
    return {
        ...element,
        ...updates,
        updated: getUpdatedTimestamp(),
        version: element.version + 1,
        versionNonce: randomInteger(),
    };
};
/**
 * Mutates element, bumping `version`, `versionNonce`, and `updated`.
 *
 * NOTE: does not trigger re-render.
 */
export const bumpVersion = (element, version) => {
    element.version = (version ?? element.version) + 1;
    element.versionNonce = randomInteger();
    element.updated = getUpdatedTimestamp();
    return element;
};
