import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Modal.scss";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { KEYS } from "../keys";
import { useCreatePortalContainer } from "../hooks/useCreatePortalContainer";
import { useRef } from "react";
export const Modal = (props) => {
    const { closeOnClickOutside = true } = props;
    const modalRoot = useCreatePortalContainer({
        className: "excalidraw-modal-container",
    });
    const animationsDisabledRef = useRef(document.body.classList.contains("excalidraw-animations-disabled"));
    if (!modalRoot) {
        return null;
    }
    const handleKeydown = (event) => {
        if (event.key === KEYS.ESCAPE) {
            event.nativeEvent.stopImmediatePropagation();
            event.stopPropagation();
            props.onCloseRequest();
        }
    };
    return createPortal(_jsxs("div", { className: clsx("Modal", props.className, {
            "animations-disabled": animationsDisabledRef.current,
        }), role: "dialog", "aria-modal": "true", onKeyDown: handleKeydown, "aria-labelledby": props.labelledBy, "data-prevent-outside-click": true, children: [_jsx("div", { className: "Modal__background", onClick: closeOnClickOutside ? props.onCloseRequest : undefined }), _jsx("div", { className: "Modal__content", style: { "--max-width": `${props.maxWidth}px` }, tabIndex: 0, children: props.children })] }), modalRoot);
};
