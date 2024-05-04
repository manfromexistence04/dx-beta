import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { EVENT } from "../../constants";
import { KEYS } from "../../keys";
export const TTDDialogInput = ({ input, placeholder, onChange, onKeyboardSubmit, }) => {
    const ref = useRef(null);
    const callbackRef = useRef(onKeyboardSubmit);
    callbackRef.current = onKeyboardSubmit;
    useEffect(() => {
        if (!callbackRef.current) {
            return;
        }
        const textarea = ref.current;
        if (textarea) {
            const handleKeyDown = (event) => {
                if (event[KEYS.CTRL_OR_CMD] && event.key === KEYS.ENTER) {
                    event.preventDefault();
                    callbackRef.current?.();
                }
            };
            textarea.addEventListener(EVENT.KEYDOWN, handleKeyDown);
            return () => {
                textarea.removeEventListener(EVENT.KEYDOWN, handleKeyDown);
            };
        }
    }, []);
    return (_jsx("textarea", { className: "ttd-dialog-input", onChange: onChange, value: input, placeholder: placeholder, autoFocus: true, ref: ref }));
};
