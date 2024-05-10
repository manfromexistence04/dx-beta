import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ToolIcon.scss";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useExcalidrawContainer } from "./App";
import { AbortError } from "../errors";
import Spinner from "./Spinner";
import { isPromiseLike } from "../utils";
export const ToolButton = React.forwardRef((props, ref) => {
    const { id: excalId } = useExcalidrawContainer();
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current);
    const sizeCn = `ToolIcon_size_${props.size}`;
    const [isLoading, setIsLoading] = useState(false);
    const isMountedRef = useRef(true);
    const onClick = async (event) => {
        const ret = "onClick" in props && props.onClick?.(event);
        if (isPromiseLike(ret)) {
            try {
                setIsLoading(true);
                await ret;
            }
            catch (error) {
                if (!(error instanceof AbortError)) {
                    throw error;
                }
                else {
                    console.warn(error);
                }
            }
            finally {
                if (isMountedRef.current) {
                    setIsLoading(false);
                }
            }
        }
    };
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);
    const lastPointerTypeRef = useRef(null);
    if (props.type === "button" ||
        props.type === "icon" ||
        props.type === "submit") {
        const type = (props.type === "icon" ? "button" : props.type);
        return (_jsxs("button", { className: clsx("ToolIcon_type_button", sizeCn, props.className, props.visible && !props.hidden
                ? "ToolIcon_type_button--show"
                : "ToolIcon_type_button--hide", {
                ToolIcon: !props.hidden,
                "ToolIcon--selected": props.selected,
                "ToolIcon--plain": props.type === "icon",
            }), style: props.style, "data-testid": props["data-testid"], hidden: props.hidden, title: props.title, "aria-label": props["aria-label"], type: type, onClick: onClick, ref: innerRef, disabled: isLoading || props.isLoading || !!props.disabled, children: [(props.icon || props.label) && (_jsxs("div", { className: "ToolIcon__icon", "aria-hidden": "true", "aria-disabled": !!props.disabled, children: [props.icon || props.label, props.keyBindingLabel && (_jsx("span", { className: "ToolIcon__keybinding", children: props.keyBindingLabel })), props.isLoading && _jsx(Spinner, {})] })), props.showAriaLabel && (_jsxs("div", { className: "ToolIcon__label", children: [props["aria-label"], " ", isLoading && _jsx(Spinner, {})] })), props.children] }));
    }
    return (_jsxs("label", { className: clsx("ToolIcon", props.className), title: props.title, onPointerDown: (event) => {
            lastPointerTypeRef.current = event.pointerType || null;
            props.onPointerDown?.({ pointerType: event.pointerType || null });
        }, onPointerUp: () => {
            requestAnimationFrame(() => {
                lastPointerTypeRef.current = null;
            });
        }, children: [_jsx("input", { className: `ToolIcon_type_radio ${sizeCn}`, type: "radio", name: props.name, "aria-label": props["aria-label"], "aria-keyshortcuts": props["aria-keyshortcuts"], "data-testid": props["data-testid"], id: `${excalId}-${props.id}`, onChange: () => {
                    props.onChange?.({ pointerType: lastPointerTypeRef.current });
                }, checked: props.checked, ref: innerRef }), _jsxs("div", { className: "ToolIcon__icon", children: [props.icon, props.keyBindingLabel && (_jsx("span", { className: "ToolIcon__keybinding", children: props.keyBindingLabel }))] })] }));
});
ToolButton.defaultProps = {
    visible: true,
    className: "",
    size: "medium",
};
ToolButton.displayName = "ToolButton";
