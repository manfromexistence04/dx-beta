import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { activeColorPickerSectionAtom, colorPickerHotkeyBindings, getColorNameAndShadeFromColor, } from "./colorPickerUtils";
import HotkeyLabel from "./HotkeyLabel";
import { t } from "../../i18n";
const PickerColorList = ({ palette, color, onChange, label, activeShade, }) => {
    const colorObj = getColorNameAndShadeFromColor({
        color: color || "transparent",
        palette,
    });
    const [activeColorPickerSection, setActiveColorPickerSection] = useAtom(activeColorPickerSectionAtom);
    const btnRef = useRef(null);
    useEffect(() => {
        if (btnRef.current && activeColorPickerSection === "baseColors") {
            btnRef.current.focus();
        }
    }, [colorObj?.colorName, activeColorPickerSection]);
    return (_jsx("div", { className: "color-picker-content--default", children: Object.entries(palette).map(([key, value], index) => {
            const color = (Array.isArray(value) ? value[activeShade] : value) || "transparent";
            const keybinding = colorPickerHotkeyBindings[index];
            const label = t(`colors.${key.replace(/\d+/, "")}`, null, "");
            return (_jsxs("button", { ref: colorObj?.colorName === key ? btnRef : undefined, tabIndex: -1, type: "button", className: clsx("color-picker__button color-picker__button--large", {
                    active: colorObj?.colorName === key,
                    "is-transparent": color === "transparent" || !color,
                }), onClick: () => {
                    onChange(color);
                    setActiveColorPickerSection("baseColors");
                }, title: `${label}${color.startsWith("#") ? ` ${color}` : ""} — ${keybinding}`, "aria-label": `${label} — ${keybinding}`, style: color ? { "--swatch-color": color } : undefined, "data-testid": `color-${key}`, children: [_jsx("div", { className: "color-picker__button-outline" }), _jsx(HotkeyLabel, { color: color, keyLabel: keybinding })] }, key));
        }) }));
};
export default PickerColorList;
