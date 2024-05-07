import { RoughGenerator } from "roughjs/bin/generator";
import { elementWithCanvasCache } from "../renderer/renderElement";
import { _generateElementShape } from "./Shape";
import { COLOR_PALETTE } from "../colors";
export class ShapeCache {
    static rg = new RoughGenerator();
    static cache = new WeakMap();
    /**
     * Retrieves shape from cache if available. Use this only if shape
     * is optional and you have a fallback in case it's not cached.
     */
    static get = (element) => {
        return ShapeCache.cache.get(element);
    };
    static set = (element, shape) => ShapeCache.cache.set(element, shape);
    static delete = (element) => ShapeCache.cache.delete(element);
    static destroy = () => {
        ShapeCache.cache = new WeakMap();
    };
    /**
     * Generates & caches shape for element if not already cached, otherwise
     * returns cached shape.
     */
    static generateElementShape = (element, renderConfig) => {
        // when exporting, always regenerated to guarantee the latest shape
        const cachedShape = renderConfig?.isExporting
            ? undefined
            : ShapeCache.get(element);
        // `null` indicates no rc shape applicable for this element type,
        // but it's considered a valid cache value (= do not regenerate)
        if (cachedShape !== undefined) {
            return cachedShape;
        }
        elementWithCanvasCache.delete(element);
        const shape = _generateElementShape(element, ShapeCache.rg, renderConfig || {
            isExporting: false,
            canvasBackgroundColor: COLOR_PALETTE.white,
            embedsValidationStatus: null,
        });
        ShapeCache.cache.set(element, shape);
        return shape;
    };
}
