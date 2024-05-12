import { useRef } from "react";
/**
 * Returns a stable function of the same type.
 */
export const useStableCallback = (userFn) => {
    const stableRef = useRef({ userFn });
    stableRef.current.userFn = userFn;
    if (!stableRef.current.stableFn) {
        stableRef.current.stableFn = ((...args) => stableRef.current.userFn(...args));
    }
    return stableRef.current.stableFn;
};
