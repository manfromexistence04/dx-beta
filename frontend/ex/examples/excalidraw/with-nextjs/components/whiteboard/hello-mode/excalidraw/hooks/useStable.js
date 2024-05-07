import { useRef } from "react";
export const useStable = (value) => {
    const ref = useRef(value);
    Object.assign(ref.current, value);
    return ref.current;
};
