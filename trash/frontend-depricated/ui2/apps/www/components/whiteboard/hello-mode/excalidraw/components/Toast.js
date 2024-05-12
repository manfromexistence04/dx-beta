import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from "react";
import { CloseIcon } from "./icons";
import "./Toast.scss";
import { ToolButton } from "./ToolButton";
const DEFAULT_TOAST_TIMEOUT = 5000;
export const Toast = ({ message, onClose, closable = false, 
// To prevent autoclose, pass duration as Infinity
duration = DEFAULT_TOAST_TIMEOUT, style, }) => {
    const timerRef = useRef(0);
    const shouldAutoClose = duration !== Infinity;
    const scheduleTimeout = useCallback(() => {
        if (!shouldAutoClose) {
            return;
        }
        timerRef.current = window.setTimeout(() => onClose(), duration);
    }, [onClose, duration, shouldAutoClose]);
    useEffect(() => {
        if (!shouldAutoClose) {
            return;
        }
        scheduleTimeout();
        return () => clearTimeout(timerRef.current);
    }, [scheduleTimeout, message, duration, shouldAutoClose]);
    const onMouseEnter = shouldAutoClose
        ? () => clearTimeout(timerRef?.current)
        : undefined;
    const onMouseLeave = shouldAutoClose ? scheduleTimeout : undefined;
    return (_jsxs("div", { className: "Toast", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: style, children: [_jsx("p", { className: "Toast__message", children: message }), closable && (_jsx(ToolButton, { icon: CloseIcon, "aria-label": "close", type: "icon", onClick: onClose, className: "close" }))] }));
};
