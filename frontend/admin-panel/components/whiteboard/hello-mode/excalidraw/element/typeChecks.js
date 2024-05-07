import { ROUNDNESS } from "../constants";
import { assertNever } from "../utils";
export const isInitializedImageElement = (element) => {
    return !!element && element.type === "image" && !!element.fileId;
};
export const isImageElement = (element) => {
    return !!element && element.type === "image";
};
export const isEmbeddableElement = (element) => {
    return !!element && element.type === "embeddable";
};
export const isIframeElement = (element) => {
    return !!element && element.type === "iframe";
};
export const isIframeLikeElement = (element) => {
    return (!!element && (element.type === "iframe" || element.type === "embeddable"));
};
export const isTextElement = (element) => {
    return element != null && element.type === "text";
};
export const isFrameElement = (element) => {
    return element != null && element.type === "frame";
};
export const isMagicFrameElement = (element) => {
    return element != null && element.type === "magicframe";
};
export const isFrameLikeElement = (element) => {
    return (element != null &&
        (element.type === "frame" || element.type === "magicframe"));
};
export const isFreeDrawElement = (element) => {
    return element != null && isFreeDrawElementType(element.type);
};
export const isFreeDrawElementType = (elementType) => {
    return elementType === "freedraw";
};
export const isLinearElement = (element) => {
    return element != null && isLinearElementType(element.type);
};
export const isArrowElement = (element) => {
    return element != null && element.type === "arrow";
};
export const isLinearElementType = (elementType) => {
    return (elementType === "arrow" || elementType === "line" // || elementType === "freedraw"
    );
};
export const isBindingElement = (element, includeLocked = true) => {
    return (element != null &&
        (!element.locked || includeLocked === true) &&
        isBindingElementType(element.type));
};
export const isBindingElementType = (elementType) => {
    return elementType === "arrow";
};
export const isBindableElement = (element, includeLocked = true) => {
    return (element != null &&
        (!element.locked || includeLocked === true) &&
        (element.type === "rectangle" ||
            element.type === "diamond" ||
            element.type === "ellipse" ||
            element.type === "image" ||
            element.type === "iframe" ||
            element.type === "embeddable" ||
            element.type === "frame" ||
            element.type === "magicframe" ||
            (element.type === "text" && !element.containerId)));
};
export const isTextBindableContainer = (element, includeLocked = true) => {
    return (element != null &&
        (!element.locked || includeLocked === true) &&
        (element.type === "rectangle" ||
            element.type === "diamond" ||
            element.type === "ellipse" ||
            isArrowElement(element)));
};
export const isExcalidrawElement = (element) => {
    const type = element?.type;
    if (!type) {
        return false;
    }
    switch (type) {
        case "text":
        case "diamond":
        case "rectangle":
        case "iframe":
        case "embeddable":
        case "ellipse":
        case "arrow":
        case "freedraw":
        case "line":
        case "frame":
        case "magicframe":
        case "image":
        case "selection": {
            return true;
        }
        default: {
            assertNever(type, null);
            return false;
        }
    }
};
export const hasBoundTextElement = (element) => {
    return (isTextBindableContainer(element) &&
        !!element.boundElements?.some(({ type }) => type === "text"));
};
export const isBoundToContainer = (element) => {
    return (element !== null &&
        "containerId" in element &&
        element.containerId !== null &&
        isTextElement(element));
};
export const isUsingAdaptiveRadius = (type) => type === "rectangle" ||
    type === "embeddable" ||
    type === "iframe" ||
    type === "image";
export const isUsingProportionalRadius = (type) => type === "line" || type === "arrow" || type === "diamond";
export const canApplyRoundnessTypeToElement = (roundnessType, element) => {
    if ((roundnessType === ROUNDNESS.ADAPTIVE_RADIUS ||
        // if legacy roundness, it can be applied to elements that currently
        // use adaptive radius
        roundnessType === ROUNDNESS.LEGACY) &&
        isUsingAdaptiveRadius(element.type)) {
        return true;
    }
    if (roundnessType === ROUNDNESS.PROPORTIONAL_RADIUS &&
        isUsingProportionalRadius(element.type)) {
        return true;
    }
    return false;
};
export const getDefaultRoundnessTypeForElement = (element) => {
    if (isUsingProportionalRadius(element.type)) {
        return {
            type: ROUNDNESS.PROPORTIONAL_RADIUS,
        };
    }
    if (isUsingAdaptiveRadius(element.type)) {
        return {
            type: ROUNDNESS.ADAPTIVE_RADIUS,
        };
    }
    return null;
};
