import { COLOR_PALETTE } from "./colors";
import { DEFAULT_VERSION, FONT_FAMILY, isDarwin, WINDOWS_EMOJI_FALLBACK_FONT, } from "./constants";
let mockDateTime = null;
export const setDateTimeForTests = (dateTime) => {
    mockDateTime = dateTime;
};
export const getDateTime = () => {
    if (mockDateTime) {
        return mockDateTime;
    }
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    const hr = `${date.getHours()}`.padStart(2, "0");
    const min = `${date.getMinutes()}`.padStart(2, "0");
    return `${year}-${month}-${day}-${hr}${min}`;
};
export const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const isToolIcon = (target) => target instanceof HTMLElement && target.className.includes("ToolIcon");
export const isInputLike = (target) => (target instanceof HTMLElement && target.dataset.type === "wysiwyg") ||
    target instanceof HTMLBRElement || // newline in wysiwyg
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement;
export const isInteractive = (target) => {
    return (isInputLike(target) ||
        (target instanceof Element && !!target.closest("label, button")));
};
export const isWritableElement = (target) => (target instanceof HTMLElement && target.dataset.type === "wysiwyg") ||
    target instanceof HTMLBRElement || // newline in wysiwyg
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLInputElement &&
        (target.type === "text" ||
            target.type === "number" ||
            target.type === "password"));
export const getFontFamilyString = ({ fontFamily, }) => {
    for (const [fontFamilyString, id] of Object.entries(FONT_FAMILY)) {
        if (id === fontFamily) {
            return `${fontFamilyString}, ${WINDOWS_EMOJI_FALLBACK_FONT}`;
        }
    }
    return WINDOWS_EMOJI_FALLBACK_FONT;
};
/** returns fontSize+fontFamily string for assignment to DOM elements */
export const getFontString = ({ fontSize, fontFamily, }) => {
    return `${fontSize}px ${getFontFamilyString({ fontFamily })}`;
};
export const debounce = (fn, timeout) => {
    let handle = 0;
    let lastArgs = null;
    const ret = (...args) => {
        lastArgs = args;
        clearTimeout(handle);
        handle = window.setTimeout(() => {
            lastArgs = null;
            fn(...args);
        }, timeout);
    };
    ret.flush = () => {
        clearTimeout(handle);
        if (lastArgs) {
            const _lastArgs = lastArgs;
            lastArgs = null;
            fn(..._lastArgs);
        }
    };
    ret.cancel = () => {
        lastArgs = null;
        clearTimeout(handle);
    };
    return ret;
};
// throttle callback to execute once per animation frame
export const throttleRAF = (fn, opts) => {
    let timerId = null;
    let lastArgs = null;
    let lastArgsTrailing = null;
    const scheduleFunc = (args) => {
        timerId = window.requestAnimationFrame(() => {
            timerId = null;
            fn(...args);
            lastArgs = null;
            if (lastArgsTrailing) {
                lastArgs = lastArgsTrailing;
                lastArgsTrailing = null;
                scheduleFunc(lastArgs);
            }
        });
    };
    const ret = (...args) => {
        if (import.meta.env.MODE === "test") {
            fn(...args);
            return;
        }
        lastArgs = args;
        if (timerId === null) {
            scheduleFunc(lastArgs);
        }
        else if (opts?.trailing) {
            lastArgsTrailing = args;
        }
    };
    ret.flush = () => {
        if (timerId !== null) {
            cancelAnimationFrame(timerId);
            timerId = null;
        }
        if (lastArgs) {
            fn(...(lastArgsTrailing || lastArgs));
            lastArgs = lastArgsTrailing = null;
        }
    };
    ret.cancel = () => {
        lastArgs = lastArgsTrailing = null;
        if (timerId !== null) {
            cancelAnimationFrame(timerId);
            timerId = null;
        }
    };
    return ret;
};
/**
 * Exponential ease-out method
 *
 * @param {number} k - The value to be tweened.
 * @returns {number} The tweened value.
 */
export const easeOut = (k) => {
    return 1 - Math.pow(1 - k, 4);
};
const easeOutInterpolate = (from, to, progress) => {
    return (to - from) * easeOut(progress) + from;
};
/**
 * Animates values from `fromValues` to `toValues` using the requestAnimationFrame API.
 * Executes the `onStep` callback on each step with the interpolated values.
 * Returns a function that can be called to cancel the animation.
 *
 * @example
 * // Example usage:
 * const fromValues = { x: 0, y: 0 };
 * const toValues = { x: 100, y: 200 };
 * const onStep = ({x, y}) => {
 *   setState(x, y)
 * };
 * const onCancel = () => {
 *   console.log("Animation canceled");
 * };
 *
 * const cancelAnimation = easeToValuesRAF({
 *   fromValues,
 *   toValues,
 *   onStep,
 *   onCancel,
 * });
 *
 * // To cancel the animation:
 * cancelAnimation();
 */
export const easeToValuesRAF = ({ fromValues, toValues, onStep, duration = 250, interpolateValue, onStart, onEnd, onCancel, }) => {
    let canceled = false;
    let frameId = 0;
    let startTime;
    function step(timestamp) {
        if (canceled) {
            return;
        }
        if (startTime === undefined) {
            startTime = timestamp;
            onStart?.();
        }
        const elapsed = Math.min(timestamp - startTime, duration);
        const factor = easeOut(elapsed / duration);
        const newValues = {};
        Object.keys(fromValues).forEach((key) => {
            const _key = key;
            const result = ((toValues[_key] - fromValues[_key]) * factor +
                fromValues[_key]);
            newValues[_key] = result;
        });
        onStep(newValues);
        if (elapsed < duration) {
            const progress = elapsed / duration;
            const newValues = {};
            Object.keys(fromValues).forEach((key) => {
                const _key = key;
                const startValue = fromValues[_key];
                const endValue = toValues[_key];
                let result;
                result = interpolateValue
                    ? interpolateValue(startValue, endValue, progress, _key)
                    : easeOutInterpolate(startValue, endValue, progress);
                if (result == null) {
                    result = easeOutInterpolate(startValue, endValue, progress);
                }
                newValues[_key] = result;
            });
            onStep(newValues);
            frameId = window.requestAnimationFrame(step);
        }
        else {
            onStep(toValues);
            onEnd?.();
        }
    }
    frameId = window.requestAnimationFrame(step);
    return () => {
        onCancel?.();
        canceled = true;
        window.cancelAnimationFrame(frameId);
    };
};
// https://github.com/lodash/lodash/blob/es/chunk.js
export const chunk = (array, size) => {
    if (!array.length || size < 1) {
        return [];
    }
    let index = 0;
    let resIndex = 0;
    const result = Array(Math.ceil(array.length / size));
    while (index < array.length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
};
export const selectNode = (node) => {
    const selection = window.getSelection();
    if (selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};
export const removeSelection = () => {
    const selection = window.getSelection();
    if (selection) {
        selection.removeAllRanges();
    }
};
export const distance = (x, y) => Math.abs(x - y);
export const updateActiveTool = (appState, data) => {
    if (data.type === "custom") {
        return {
            ...appState.activeTool,
            type: "custom",
            customType: data.customType,
            locked: data.locked ?? appState.activeTool.locked,
        };
    }
    return {
        ...appState.activeTool,
        lastActiveTool: data.lastActiveToolBeforeEraser === undefined
            ? appState.activeTool.lastActiveTool
            : data.lastActiveToolBeforeEraser,
        type: data.type,
        customType: null,
        locked: data.locked ?? appState.activeTool.locked,
    };
};
export const isFullScreen = () => document.fullscreenElement?.nodeName === "HTML";
export const allowFullScreen = () => document.documentElement.requestFullscreen();
export const exitFullScreen = () => document.exitFullscreen();
export const getShortcutKey = (shortcut) => {
    shortcut = shortcut
        .replace(/\bAlt\b/i, "Alt")
        .replace(/\bShift\b/i, "Shift")
        .replace(/\b(Enter|Return)\b/i, "Enter");
    if (isDarwin) {
        return shortcut
            .replace(/\bCtrlOrCmd\b/gi, "Cmd")
            .replace(/\bAlt\b/i, "Option");
    }
    return shortcut.replace(/\bCtrlOrCmd\b/gi, "Ctrl");
};
export const viewportCoordsToSceneCoords = ({ clientX, clientY }, { zoom, offsetLeft, offsetTop, scrollX, scrollY, }) => {
    const x = (clientX - offsetLeft) / zoom.value - scrollX;
    const y = (clientY - offsetTop) / zoom.value - scrollY;
    return { x, y };
};
export const sceneCoordsToViewportCoords = ({ sceneX, sceneY }, { zoom, offsetLeft, offsetTop, scrollX, scrollY, }) => {
    const x = (sceneX + scrollX) * zoom.value + offsetLeft;
    const y = (sceneY + scrollY) * zoom.value + offsetTop;
    return { x, y };
};
export const getGlobalCSSVariable = (name) => getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
const RS_LTR_CHARS = "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
    "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
const RS_RTL_CHARS = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
const RE_RTL_CHECK = new RegExp(`^[^${RS_LTR_CHARS}]*[${RS_RTL_CHARS}]`);
/**
 * Checks whether first directional character is RTL. Meaning whether it starts
 *  with RTL characters, or indeterminate (numbers etc.) characters followed by
 *  RTL.
 * See https://github.com/excalidraw/excalidraw/pull/1722#discussion_r436340171
 */
export const isRTL = (text) => RE_RTL_CHECK.test(text);
export const tupleToCoors = (xyTuple) => {
    const [x, y] = xyTuple;
    return { x, y };
};
/** use as a rejectionHandler to mute filesystem Abort errors */
export const muteFSAbortError = (error) => {
    if (error?.name === "AbortError") {
        console.warn(error);
        return;
    }
    throw error;
};
export const findIndex = (array, cb, fromIndex = 0) => {
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;
    }
    fromIndex = Math.min(array.length, Math.max(fromIndex, 0));
    let index = fromIndex - 1;
    while (++index < array.length) {
        if (cb(array[index], index, array)) {
            return index;
        }
    }
    return -1;
};
export const findLastIndex = (array, cb, fromIndex = array.length - 1) => {
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;
    }
    fromIndex = Math.min(array.length - 1, Math.max(fromIndex, 0));
    let index = fromIndex + 1;
    while (--index > -1) {
        if (cb(array[index], index, array)) {
            return index;
        }
    }
    return -1;
};
export const isTransparent = (color) => {
    const isRGBTransparent = color.length === 5 && color.substr(4, 1) === "0";
    const isRRGGBBTransparent = color.length === 9 && color.substr(7, 2) === "00";
    return (isRGBTransparent ||
        isRRGGBBTransparent ||
        color === COLOR_PALETTE.transparent);
};
export const resolvablePromise = () => {
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
};
//https://stackoverflow.com/a/9462382/8418
export const nFormatter = (num, digits) => {
    const si = [
        { value: 1, symbol: "b" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (num >= si[index].value) {
            break;
        }
    }
    return ((num / si[index].value).toFixed(digits).replace(rx, "$1") + si[index].symbol);
};
export const getVersion = () => {
    return (document.querySelector('meta[name="version"]')?.content ||
        DEFAULT_VERSION);
};
// Adapted from https://github.com/Modernizr/Modernizr/blob/master/feature-detects/emoji.js
export const supportsEmoji = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return false;
    }
    const offset = 12;
    ctx.fillStyle = "#f00";
    ctx.textBaseline = "top";
    ctx.font = "32px Arial";
    // Modernizr used 🐨, but it is sort of supported on Windows 7.
    // Luckily 😀 isn't supported.
    ctx.fillText("😀", 0, 0);
    return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
};
export const getNearestScrollableContainer = (element) => {
    let parent = element.parentElement;
    while (parent) {
        if (parent === document.body) {
            return document;
        }
        const { overflowY } = window.getComputedStyle(parent);
        const hasScrollableContent = parent.scrollHeight > parent.clientHeight;
        if (hasScrollableContent &&
            (overflowY === "auto" ||
                overflowY === "scroll" ||
                overflowY === "overlay")) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return document;
};
export const focusNearestParent = (element) => {
    let parent = element.parentElement;
    while (parent) {
        if (parent.tabIndex > -1) {
            parent.focus();
            return;
        }
        parent = parent.parentElement;
    }
};
export const preventUnload = (event) => {
    event.preventDefault();
    // NOTE: modern browsers no longer allow showing a custom message here
    event.returnValue = "";
};
export const bytesToHexString = (bytes) => {
    return Array.from(bytes)
        .map((byte) => `0${byte.toString(16)}`.slice(-2))
        .join("");
};
export const getUpdatedTimestamp = () => (isTestEnv() ? 1 : Date.now());
/**
 * Transforms array of objects containing `id` attribute,
 * or array of ids (strings), into a Map, keyd by `id`.
 */
export const arrayToMap = (items) => {
    if (items instanceof Map) {
        return items;
    }
    return items.reduce((acc, element) => {
        acc.set(typeof element === "string" ? element : element.id, element);
        return acc;
    }, new Map());
};
export const arrayToMapWithIndex = (elements) => elements.reduce((acc, element, idx) => {
    acc.set(element.id, [element, idx]);
    return acc;
}, new Map());
/**
 * Transform array into an object, use only when array order is irrelevant.
 */
export const arrayToObject = (array, groupBy) => array.reduce((acc, value) => {
    acc[groupBy ? groupBy(value) : String(value)] = value;
    return acc;
}, {});
export const isTestEnv = () => import.meta.env.MODE === "test";
export const isDevEnv = () => import.meta.env.MODE === "development";
export const wrapEvent = (name, nativeEvent) => {
    return new CustomEvent(name, {
        detail: {
            nativeEvent,
        },
        cancelable: true,
    });
};
export const updateObject = (obj, updates) => {
    let didChange = false;
    for (const key in updates) {
        const value = updates[key];
        if (typeof value !== "undefined") {
            if (obj[key] === value &&
                // if object, always update because its attrs could have changed
                (typeof value !== "object" || value === null)) {
                continue;
            }
            didChange = true;
        }
    }
    if (!didChange) {
        return obj;
    }
    return {
        ...obj,
        ...updates,
    };
};
export const isPrimitive = (val) => {
    const type = typeof val;
    return val == null || (type !== "object" && type !== "function");
};
export const getFrame = () => {
    try {
        return window.self === window.top ? "top" : "iframe";
    }
    catch (error) {
        return "iframe";
    }
};
export const isRunningInIframe = () => getFrame() === "iframe";
export const isPromiseLike = (value) => {
    return (!!value &&
        typeof value === "object" &&
        "then" in value &&
        "catch" in value &&
        "finally" in value);
};
export const queryFocusableElements = (container) => {
    const focusableElements = container?.querySelectorAll("button, a, input, select, textarea, div[tabindex], label[tabindex]");
    return focusableElements
        ? Array.from(focusableElements).filter((element) => element.tabIndex > -1 && !element.disabled)
        : [];
};
/** use as a fallback after identity check (for perf reasons) */
const _defaultIsShallowComparatorFallback = (a, b) => {
    // consider two empty arrays equal
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === 0 &&
        b.length === 0) {
        return true;
    }
    return a === b;
};
/**
 * Returns whether object/array is shallow equal.
 * Considers empty object/arrays as equal (whether top-level or second-level).
 */
export const isShallowEqual = (objA, objB, comparators, debug = false) => {
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) {
        if (debug) {
            console.warn(`%cisShallowEqual: objects don't have same properties ->`, "color: #8B4000", objA, objB);
        }
        return false;
    }
    if (comparators && Array.isArray(comparators)) {
        for (const key of comparators) {
            const ret = objA[key] === objB[key] ||
                _defaultIsShallowComparatorFallback(objA[key], objB[key]);
            if (!ret) {
                if (debug) {
                    console.warn(`%cisShallowEqual: ${key} not equal ->`, "color: #8B4000", objA[key], objB[key]);
                }
                return false;
            }
        }
        return true;
    }
    return aKeys.every((key) => {
        const comparator = comparators?.[key];
        const ret = comparator
            ? comparator(objA[key], objB[key])
            : objA[key] === objB[key] ||
                _defaultIsShallowComparatorFallback(objA[key], objB[key]);
        if (!ret && debug) {
            console.warn(`%cisShallowEqual: ${key} not equal ->`, "color: #8B4000", objA[key], objB[key]);
        }
        return ret;
    });
};
// taken from Radix UI
// https://github.com/radix-ui/primitives/blob/main/packages/core/primitive/src/primitive.tsx
export const composeEventHandlers = (originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) => {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (!checkForDefaultPrevented ||
            !event?.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
};
/**
 * supply `null` as message if non-never value is valid, you just need to
 * typecheck against it
 */
export const assertNever = (value, message, softAssert) => {
    if (!message) {
        return value;
    }
    if (softAssert) {
        console.error(message);
        return value;
    }
    throw new Error(message);
};
/**
 * Memoizes on values of `opts` object (strict equality).
 */
export const memoize = (func) => {
    let lastArgs;
    let lastResult;
    const ret = function (opts) {
        const currentArgs = Object.entries(opts);
        if (lastArgs) {
            let argsAreEqual = true;
            for (const [key, value] of currentArgs) {
                if (lastArgs.get(key) !== value) {
                    argsAreEqual = false;
                    break;
                }
            }
            if (argsAreEqual) {
                return lastResult;
            }
        }
        const result = func(opts);
        lastArgs = new Map(currentArgs);
        lastResult = result;
        return result;
    };
    ret.clear = () => {
        lastArgs = undefined;
        lastResult = undefined;
    };
    return ret;
};
/** Checks if value is inside given collection. Useful for type-safety. */
export const isMemberOf = (
/** Set/Map/Array/Object */
collection, 
/** value to look for */
value) => {
    return collection instanceof Set || collection instanceof Map
        ? collection.has(value)
        : "includes" in collection
            ? collection.includes(value)
            : collection.hasOwnProperty(value);
};
export const cloneJSON = (obj) => JSON.parse(JSON.stringify(obj));
export const isFiniteNumber = (value) => {
    return typeof value === "number" && Number.isFinite(value);
};
export const updateStable = (prevValue, nextValue) => {
    if (isShallowEqual(prevValue, nextValue)) {
        return prevValue;
    }
    return nextValue;
};
// implem
export function addEventListener(
/**
 * allows for falsy values so you don't have to type check when adding
 * event listeners to optional elements
 */
target, type, listener, options) {
    if (!target) {
        return () => { };
    }
    target?.addEventListener?.(type, listener, options);
    return () => {
        target?.removeEventListener?.(type, listener, options);
    };
}
const average = (a, b) => (a + b) / 2;
export function getSvgPathFromStroke(points, closed = true) {
    const len = points.length;
    if (len < 4) {
        return ``;
    }
    let a = points[0];
    let b = points[1];
    const c = points[2];
    let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(b[1], c[1]).toFixed(2)} T`;
    for (let i = 2, max = len - 1; i < max; i++) {
        a = points[i];
        b = points[i + 1];
        result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
    }
    if (closed) {
        result += "Z";
    }
    return result;
}
export const normalizeEOL = (str) => {
    return str.replace(/\r?\n|\r/g, "\n");
};
/**
 * Makes type into a branded type, ensuring that value is assignable to
 * the base ubranded type. Optionally you can explicitly supply current value
 * type to combine both (useful for composite branded types. Make sure you
 * compose branded types which are not composite themselves.)
 */
export const toBrandedType = (value) => {
    return value;
};
// -----------------------------------------------------------------------------
// Promise.try, adapted from https://github.com/sindresorhus/p-try
export const promiseTry = async (fn, ...args) => {
    return new Promise((resolve) => {
        resolve(fn(...args));
    });
};
