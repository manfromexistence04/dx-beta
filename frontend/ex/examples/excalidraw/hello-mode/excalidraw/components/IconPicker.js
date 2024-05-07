import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Popover } from "./Popover";
import "./IconPicker.scss";
import { isArrowKey, KEYS } from "../keys";
import { getLanguage } from "../i18n";
import clsx from "clsx";
function Picker({ options, value, label, onChange, onClose, }) {
    const rFirstItem = React.useRef();
    const rActiveItem = React.useRef();
    const rGallery = React.useRef(null);
    React.useEffect(() => {
        // After the component is first mounted focus on first input
        if (rActiveItem.current) {
            rActiveItem.current.focus();
        }
        else if (rGallery.current) {
            rGallery.current.focus();
        }
    }, []);
    const handleKeyDown = (event) => {
        const pressedOption = options.find((option) => option.keyBinding === event.key.toLowerCase());
        if (!(event.metaKey || event.altKey || event.ctrlKey) && pressedOption) {
            // Keybinding navigation
            const index = options.indexOf(pressedOption);
            rGallery.current.children[index].focus();
            event.preventDefault();
        }
        else if (event.key === KEYS.TAB) {
            // Tab navigation cycle through options. If the user tabs
            // away from the picker, close the picker. We need to use
            // a timeout here to let the stack clear before checking.
            setTimeout(() => {
                const active = rActiveItem.current;
                const docActive = document.activeElement;
                if (active !== docActive) {
                    onClose();
                }
            }, 0);
        }
        else if (isArrowKey(event.key)) {
            // Arrow navigation
            const { activeElement } = document;
            const isRTL = getLanguage().rtl;
            const index = Array.prototype.indexOf.call(rGallery.current.children, activeElement);
            if (index !== -1) {
                const length = options.length;
                let nextIndex = index;
                switch (event.key) {
                    // Select the next option
                    case isRTL ? KEYS.ARROW_LEFT : KEYS.ARROW_RIGHT:
                    case KEYS.ARROW_DOWN: {
                        nextIndex = (index + 1) % length;
                        break;
                    }
                    // Select the previous option
                    case isRTL ? KEYS.ARROW_RIGHT : KEYS.ARROW_LEFT:
                    case KEYS.ARROW_UP: {
                        nextIndex = (length + index - 1) % length;
                        break;
                    }
                }
                rGallery.current.children[nextIndex].focus();
            }
            event.preventDefault();
        }
        else if (event.key === KEYS.ESCAPE || event.key === KEYS.ENTER) {
            // Close on escape or enter
            event.preventDefault();
            onClose();
        }
        event.nativeEvent.stopImmediatePropagation();
        event.stopPropagation();
    };
    return (_jsx("div", { className: `picker`, role: "dialog", "aria-modal": "true", "aria-label": label, onKeyDown: handleKeyDown, children: _jsx("div", { className: "picker-content", ref: rGallery, children: options.map((option, i) => (_jsxs("button", { className: clsx("picker-option", {
                    active: value === option.value,
                }), onClick: (event) => {
                    event.currentTarget.focus();
                    onChange(option.value);
                }, title: `${option.text} ${option.keyBinding && `— ${option.keyBinding.toUpperCase()}`}`, "aria-label": option.text || "none", "aria-keyshortcuts": option.keyBinding || undefined, ref: (el) => {
                    if (el && i === 0) {
                        rFirstItem.current = el;
                    }
                    if (el && option.value === value) {
                        rActiveItem.current = el;
                    }
                }, onFocus: () => {
                    onChange(option.value);
                }, children: [option.icon, option.keyBinding && (_jsx("span", { className: "picker-keybinding", children: option.keyBinding }))] }, option.text))) }) }));
}
export function IconPicker({ value, label, options, onChange, group = "", }) {
    const [isActive, setActive] = React.useState(false);
    const rPickerButton = React.useRef(null);
    const isRTL = getLanguage().rtl;
    return (_jsxs("div", { children: [_jsx("button", { name: group, className: isActive ? "active" : "", "aria-label": label, onClick: () => setActive(!isActive), ref: rPickerButton, children: options.find((option) => option.value === value)?.icon }), _jsx(React.Suspense, { fallback: "", children: isActive ? (_jsxs(_Fragment, { children: [_jsx(Popover, { onCloseRequest: (event) => event.target !== rPickerButton.current && setActive(false), ...(isRTL ? { right: 5.5 } : { left: -5.5 }), children: _jsx(Picker, { options: options.filter((opt) => opt.showInPicker !== false), value: value, label: label, onChange: onChange, onClose: () => {
                                    setActive(false);
                                    rPickerButton.current?.focus();
                                } }) }), _jsx("div", { className: "picker-triangle" })] })) : null })] }));
}
