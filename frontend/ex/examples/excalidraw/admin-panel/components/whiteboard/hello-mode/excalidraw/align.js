import { newElementWith } from "./element/mutateElement";
import { getCommonBoundingBox } from "./element/bounds";
import { getMaximumGroups } from "./groups";
export const alignElements = (selectedElements, elementsMap, alignment) => {
    const groups = getMaximumGroups(selectedElements, elementsMap);
    const selectionBoundingBox = getCommonBoundingBox(selectedElements);
    return groups.flatMap((group) => {
        const translation = calculateTranslation(group, selectionBoundingBox, alignment);
        return group.map((element) => newElementWith(element, {
            x: element.x + translation.x,
            y: element.y + translation.y,
        }));
    });
};
const calculateTranslation = (group, selectionBoundingBox, { axis, position }) => {
    const groupBoundingBox = getCommonBoundingBox(group);
    const [min, max] = axis === "x" ? ["minX", "maxX"] : ["minY", "maxY"];
    const noTranslation = { x: 0, y: 0 };
    if (position === "start") {
        return {
            ...noTranslation,
            [axis]: selectionBoundingBox[min] - groupBoundingBox[min],
        };
    }
    else if (position === "end") {
        return {
            ...noTranslation,
            [axis]: selectionBoundingBox[max] - groupBoundingBox[max],
        };
    } // else if (position === "center") {
    return {
        ...noTranslation,
        [axis]: (selectionBoundingBox[min] + selectionBoundingBox[max]) / 2 -
            (groupBoundingBox[min] + groupBoundingBox[max]) / 2,
    };
};
