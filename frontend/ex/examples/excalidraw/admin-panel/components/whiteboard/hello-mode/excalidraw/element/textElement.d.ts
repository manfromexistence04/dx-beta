import { ElementsMap, ExcalidrawElement, ExcalidrawElementType, ExcalidrawTextContainer, ExcalidrawTextElement, ExcalidrawTextElementWithContainer, FontFamilyValues, FontString, NonDeletedExcalidrawElement } from "./types";
import { MaybeTransformHandleType } from "./transformHandles";
import { AppState } from "../types";
import { ExtractSetType, MakeBrand } from "../utility-types";
export declare const normalizeText: (text: string) => string;
export declare const redrawTextBoundingBox: (textElement: ExcalidrawTextElement, container: ExcalidrawElement | null, elementsMap: ElementsMap, informMutation?: boolean) => void;
export declare const bindTextToShapeAfterDuplication: (newElements: ExcalidrawElement[], oldElements: ExcalidrawElement[], oldIdToDuplicatedId: Map<ExcalidrawElement["id"], ExcalidrawElement["id"]>) => void;
export declare const handleBindTextResize: (container: NonDeletedExcalidrawElement, elementsMap: ElementsMap, transformHandleType: MaybeTransformHandleType, shouldMaintainAspectRatio?: boolean) => void;
export declare const computeBoundTextPosition: (container: ExcalidrawElement, boundTextElement: ExcalidrawTextElementWithContainer, elementsMap: ElementsMap) => {
    x: number;
    y: number;
};
export declare const measureText: (text: string, font: FontString, lineHeight: ExcalidrawTextElement["lineHeight"]) => {
    width: number;
    height: number;
};
/**
 * To get unitless line-height (if unknown) we can calculate it by dividing
 * height-per-line by fontSize.
 */
export declare const detectLineHeight: (textElement: ExcalidrawTextElement) => number & {
    _brand: "unitlessLineHeight";
};
/**
 * We calculate the line height from the font size and the unitless line height,
 * aligning with the W3C spec.
 */
export declare const getLineHeightInPx: (fontSize: ExcalidrawTextElement["fontSize"], lineHeight: ExcalidrawTextElement["lineHeight"]) => number;
/**
 * Calculates vertical offset for a text with alphabetic baseline.
 */
export declare const getVerticalOffset: (fontFamily: ExcalidrawTextElement["fontFamily"], fontSize: ExcalidrawTextElement["fontSize"], lineHeightPx: number) => number;
export declare const getApproxMinLineHeight: (fontSize: ExcalidrawTextElement["fontSize"], lineHeight: ExcalidrawTextElement["lineHeight"]) => number;
export declare const getTextWidth: (text: string, font: FontString) => number;
export declare const getTextHeight: (text: string, fontSize: number, lineHeight: ExcalidrawTextElement["lineHeight"]) => number;
export declare const parseTokens: (text: string) => string[];
export declare const wrapText: (text: string, font: FontString, maxWidth: number) => string;
export declare const charWidth: {
    calculate: (char: string, font: FontString) => number;
    getCache: (font: FontString) => number[];
};
export declare const getApproxMinLineWidth: (font: FontString, lineHeight: ExcalidrawTextElement["lineHeight"]) => number;
export declare const getMinCharWidth: (font: FontString) => number;
export declare const getMaxCharWidth: (font: FontString) => number;
export declare const getApproxCharsToFitInWidth: (font: FontString, width: number) => number;
export declare const getBoundTextElementId: (container: ExcalidrawElement | null) => string | null;
export declare const getBoundTextElement: (element: ExcalidrawElement | null, elementsMap: ElementsMap) => ExcalidrawTextElementWithContainer | null;
export declare const getContainerElement: (element: ExcalidrawTextElement | null, elementsMap: ElementsMap) => ExcalidrawTextContainer | null;
export declare const getContainerCenter: (container: ExcalidrawElement, appState: AppState, elementsMap: ElementsMap) => {
    x: number;
    y: number;
};
export declare const getContainerCoords: (container: NonDeletedExcalidrawElement) => {
    x: number;
    y: number;
};
export declare const getTextElementAngle: (textElement: ExcalidrawTextElement, container: ExcalidrawTextContainer | null) => number;
export declare const getBoundTextElementPosition: (container: ExcalidrawElement, boundTextElement: ExcalidrawTextElementWithContainer, elementsMap: ElementsMap) => {
    x: number;
    y: number;
} | undefined;
export declare const shouldAllowVerticalAlign: (selectedElements: NonDeletedExcalidrawElement[], elementsMap: ElementsMap) => boolean;
export declare const suppportsHorizontalAlign: (selectedElements: NonDeletedExcalidrawElement[], elementsMap: ElementsMap) => boolean;
declare const VALID_CONTAINER_TYPES: Set<string>;
export declare const isValidTextContainer: (element: {
    type: ExcalidrawElementType;
}) => boolean;
export declare const computeContainerDimensionForBoundText: (dimension: number, containerType: ExtractSetType<typeof VALID_CONTAINER_TYPES>) => number;
export declare const getBoundTextMaxWidth: (container: ExcalidrawElement, boundTextElement: ExcalidrawTextElement | null) => number;
export declare const getBoundTextMaxHeight: (container: ExcalidrawElement, boundTextElement: ExcalidrawTextElementWithContainer) => number;
export declare const isMeasureTextSupported: () => boolean;
/** OS/2 sTypoAscender, https://learn.microsoft.com/en-us/typography/opentype/spec/os2#stypoascender */
type sTypoAscender = number & MakeBrand<"sTypoAscender">;
/** OS/2 sTypoDescender, https://learn.microsoft.com/en-us/typography/opentype/spec/os2#stypodescender */
type sTypoDescender = number & MakeBrand<"sTypoDescender">;
/**
 * Hardcoded metrics for default fonts, read by https://opentype.js.org/font-inspector.html.
 * For custom fonts, read these metrics from OS/2 table and extend this object.
 *
 * WARN: opentype does NOT open WOFF2 correctly, make sure to convert WOFF2 to TTF first.
 */
export declare const FONT_METRICS: Record<number, {
    unitsPerEm: number;
    ascender: sTypoAscender;
    descender: sTypoDescender;
}>;
export declare const getDefaultLineHeight: (fontFamily: FontFamilyValues) => number & {
    _brand: "unitlessLineHeight";
};
export {};
