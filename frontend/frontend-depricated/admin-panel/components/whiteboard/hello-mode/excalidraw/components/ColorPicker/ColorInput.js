import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { getColor } from "./ColorPicker";
import { useAtom } from "jotai";
import { activeColorPickerSectionAtom, } from "./colorPickerUtils";
import { eyeDropperIcon } from "../icons";
import { jotaiScope } from "../../jotai";
import { KEYS } from "../../keys";
import { activeEyeDropperAtom } from "../EyeDropper";
import clsx from "clsx";
import { t } from "../../i18n";
import { useDevice } from "../App";
import { getShortcutKey } from "../../utils";
export const ColorInput = ({ color, onChange, label, colorPickerType, }) => {
    const device = useDevice();
    const [innerValue, setInnerValue] = useState(color);
    const [activeSection, setActiveColorPickerSection] = useAtom(activeColorPickerSectionAtom);
    useEffect(() => {
        setInnerValue(color);
    }, [color]);
    const changeColor = useCallback((inputValue) => {
        const value = inputValue.toLowerCase();
        const color = getColor(value);
        if (color) {
            onChange(color);
        }
        setInnerValue(value);
    }, [onChange]);
    const inputRef = useRef(null);
    const eyeDropperTriggerRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [activeSection]);
    const [eyeDropperState, setEyeDropperState] = useAtom(activeEyeDropperAtom, jotaiScope);
    useEffect(() => {
        return () => {
            setEyeDropperState(null);
        };
    }, [setEyeDropperState]);
    return (_jsxs("div", { className: "color-picker__input-label", children: [_jsx("div", { className: "color-picker__input-hash", children: "#" }), _jsx("input", { ref: activeSection === "hex" ? inputRef : undefined, style: { border: 0, padding: 0 }, spellCheck: false, className: "color-picker-input", "aria-label": label, onChange: (event) => {
                    changeColor(event.target.value);
                }, value: (innerValue || "").replace(/^#/, ""), onBlur: () => {
                    setInnerValue(color);
                }, tabIndex: -1, onFocus: () => setActiveColorPickerSection("hex"), onKeyDown: (event) => {
                    if (event.key === KEYS.TAB) {
                        return;
                    }
                    else if (event.key === KEYS.ESCAPE) {
                        eyeDropperTriggerRef.current?.focus();
                    }
                    event.stopPropagation();
                } }), !device.editor.isMobile && (_jsxs(_Fragment, { children: [_jsx("div", { style: {
                            width: "1px",
                            height: "1.25rem",
                            backgroundColor: "var(--default-border-color)",
                        } }), _jsx("div", { ref: eyeDropperTriggerRef, className: clsx("excalidraw-eye-dropper-trigger", {
                            selected: eyeDropperState,
                        }), onClick: () => setEyeDropperState((s) => s
                            ? null
                            : {
                                keepOpenOnAlt: false,
                                onSelect: (color) => onChange(color),
                                colorPickerType,
                            }), title: `${t("labels.eyeDropper")} — ${KEYS.I.toLocaleUpperCase()} or ${getShortcutKey("Alt")} `, children: eyeDropperIcon })] }))] }));
};
