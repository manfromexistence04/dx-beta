import React, { useCallback } from "react";
/** noop polyfill for v17. Subset of API available */
function useTransitionPolyfill() {
    const startTransition = useCallback((callback) => callback(), []);
    return [false, startTransition];
}
export const useTransition = React.useTransition || useTransitionPolyfill;
