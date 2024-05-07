import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { activeColorPickerSectionAtom, getColorNameAndShadeFromColor, } from "./colorPickerUtils";
import HotkeyLabel from "./HotkeyLabel";
import { t } from "../../i18n";
export const ShadeList = ({ hex, onChange, palette }) => {
    const colorObj = getColorNameAndShadeFromColor({
        color: hex || "transparent",
        palette,
    });
    const [activeColorPickerSection, setActiveColorPickerSection] = useAtom(activeColorPickerSectionAtom);
    const btnRef = useRef(null);
    useEffect(() => {
        if (btnRef.current && activeColorPickerSection === "shades") {
            btnRef.current.focus();
        }
    }, [colorObj, activeColorPickerSection]);
    if (colorObj) {
        const { colorName, shade } = colorObj;
        const shades = palette[colorName];
        if (Array.isArray(shades)) {
            return (_jsx("div", { className: "color-picker-content--default shades", children: shades.map((color, i) => (_jsxs("button", { ref: i === shade && activeColorPickerSection === "shades"
                        ? btnRef
                        : undefined, tabIndex: -1, type: "button", className: clsx("color-picker__button color-picker__button--large", { active: i === shade }), "aria-label": "Shade", title: `${colorName} - ${i + 1}`, style: color ? { "--swatch-color": color } : undefined, onClick: () => {
                        onChange(color);
                        setActiveColorPickerSection("shades");
                    }, children: [_jsx("div", { className: "color-picker__button-outline" }), _jsx(HotkeyLabel, { color: color, keyLabel: i + 1, isShade: true })] }, i))) }));
        }
    }
    return (_jsxs("div", { className: "color-picker-content--default", style: { position: "relative" }, tabIndex: -1, children: [_jsx("button", { type: "button", tabIndex: -1, className: "color-picker__button color-picker__button--large color-picker__button--no-focus-visible" }), _jsx("div", { tabIndex: -1, style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "0.75rem",
                }, children: t("colorPicker.noShades") })] }));
};
