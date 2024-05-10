import { RoughSVG } from "roughjs/bin/svg";
import { NonDeletedExcalidrawElement } from "../element/types";
import { RenderableElementsMap, SVGRenderConfig } from "../scene/types";
import { BinaryFiles } from "../types";
export declare const renderSceneToSvg: (elements: readonly NonDeletedExcalidrawElement[], elementsMap: RenderableElementsMap, rsvg: RoughSVG, svgRoot: SVGElement, files: BinaryFiles, renderConfig: SVGRenderConfig) => void;
