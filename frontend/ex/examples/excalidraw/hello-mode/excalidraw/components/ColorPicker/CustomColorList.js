import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { activeColorPickerSectionAtom } from "./colorPickerUtils";
import HotkeyLabel from "./HotkeyLabel";
export const CustomColorList = ({ colors, color, onChange, label, }) => {
    const [activeColorPickerSection, setActiveColorPickerSection] = useAtom(activeColorPickerSectionAtom);
    const btnRef = useRef(null);
    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, [color, activeColorPickerSection]);
    return (_jsx("div", { className: "color-picker-content--default", children: colors.map((c, i) => {
            return (_jsxs("button", { ref: color === c ? btnRef : undefined, tabIndex: -1, type: "button", className: clsx("color-picker__button color-picker__button--large", {
                    active: color === c,
                    "is-transparent": c === "transparent" || !c,
                }), onClick: () => {
                    onChange(c);
                    setActiveColorPickerSection("custom");
                }, title: c, "aria-label": label, style: { "--swatch-color": c }, children: [_jsx("div", { className: "color-picker__button-outline" }), _jsx(HotkeyLabel, { color: c, keyLabel: i + 1, isCustomColor: true })] }, i));
        }) }));
};
