export const getSizeFromPoints = (points) => {
    const xs = points.map((point) => point[0]);
    const ys = points.map((point) => point[1]);
    return {
        width: Math.max(...xs) - Math.min(...xs),
        height: Math.max(...ys) - Math.min(...ys),
    };
};
/** @arg dimension, 0 for rescaling only x, 1 for y */
export const rescalePoints = (dimension, newSize, points, normalize) => {
    const coordinates = points.map((point) => point[dimension]);
    const maxCoordinate = Math.max(...coordinates);
    const minCoordinate = Math.min(...coordinates);
    const size = maxCoordinate - minCoordinate;
    const scale = size === 0 ? 1 : newSize / size;
    let nextMinCoordinate = Infinity;
    const scaledPoints = points.map((point) => {
        const newCoordinate = point[dimension] * scale;
        const newPoint = [...point];
        newPoint[dimension] = newCoordinate;
        if (newCoordinate < nextMinCoordinate) {
            nextMinCoordinate = newCoordinate;
        }
        return newPoint;
    });
    if (!normalize) {
        return scaledPoints;
    }
    if (scaledPoints.length === 2) {
        // we don't translate two-point lines
        return scaledPoints;
    }
    const translation = minCoordinate - nextMinCoordinate;
    const nextPoints = scaledPoints.map((scaledPoint) => scaledPoint.map((value, currentDimension) => {
        return currentDimension === dimension ? value + translation : value;
    }));
    return nextPoints;
};
