import { useCallback, useState } from "react";
export const useCallbackRefState = () => {
    const [refValue, setRefValue] = useState(null);
    const refCallback = useCallback((value) => setRefValue(value), []);
    return [refValue, refCallback];
};
