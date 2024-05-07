/**
 * @param func handler taking at most single parameter (event).
 */
import { unstable_batchedUpdates } from "react-dom";
import { version as ReactVersion } from "react";
import { throttleRAF } from "./utils";
export const withBatchedUpdates = (func) => ((event) => {
    unstable_batchedUpdates(func, event);
});
/**
 * barches React state updates and throttles the calls to a single call per
 * animation frame
 */
export const withBatchedUpdatesThrottled = (func) => {
    // @ts-ignore
    return throttleRAF(((event) => {
        unstable_batchedUpdates(func, event);
    }));
};
export const isRenderThrottlingEnabled = (() => {
    // we don't want to throttle in react < 18 because of #5439 and it was
    // getting more complex to maintain the fix
    let IS_REACT_18_AND_UP;
    try {
        const version = ReactVersion.split(".");
        IS_REACT_18_AND_UP = Number(version[0]) > 17;
    }
    catch {
        IS_REACT_18_AND_UP = false;
    }
    let hasWarned = false;
    return () => {
        if (window.EXCALIDRAW_THROTTLE_RENDER === true) {
            if (!IS_REACT_18_AND_UP) {
                if (!hasWarned) {
                    hasWarned = true;
                    console.warn("Excalidraw: render throttling is disabled on React versions < 18.");
                }
                return false;
            }
            return true;
        }
        return false;
    };
})();
