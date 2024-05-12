import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { t } from "../../i18n";
import { ShadeList } from "./ShadeList";
import PickerColorList from "./PickerColorList";
import { useAtom } from "jotai";
import { CustomColorList } from "./CustomColorList";
import { colorPickerKeyNavHandler } from "./keyboardNavHandlers";
import PickerHeading from "./PickerHeading";
import { activeColorPickerSectionAtom, getColorNameAndShadeFromColor, getMostUsedCustomColors, isCustomColor, } from "./colorPickerUtils";
import { DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX, DEFAULT_ELEMENT_STROKE_COLOR_INDEX, } from "../../colors";
import { KEYS } from "../../keys";
import { EVENT } from "../../constants";
export const Picker = ({ color, onChange, label, type, elements, palette, updateData, children, onEyeDropperToggle, onEscape, }) => {
    const [customColors] = React.useState(() => {
        if (type === "canvasBackground") {
            return [];
        }
        return getMostUsedCustomColors(elements, type, palette);
    });
    const [activeColorPickerSection, setActiveColorPickerSection] = useAtom(activeColorPickerSectionAtom);
    const colorObj = getColorNameAndShadeFromColor({
        color,
        palette,
    });
    useEffect(() => {
        if (!activeColorPickerSection) {
            const isCustom = isCustomColor({ color, palette });
            const isCustomButNotInList = isCustom && !customColors.includes(color);
            setActiveColorPickerSection(isCustomButNotInList
                ? "hex"
                : isCustom
                    ? "custom"
                    : colorObj?.shade != null
                        ? "shades"
                        : "baseColors");
        }
    }, [
        activeColorPickerSection,
        color,
        palette,
        setActiveColorPickerSection,
        colorObj,
        customColors,
    ]);
    const [activeShade, setActiveShade] = useState(colorObj?.shade ??
        (type === "elementBackground"
            ? DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX
            : DEFAULT_ELEMENT_STROKE_COLOR_INDEX));
    useEffect(() => {
        if (colorObj?.shade != null) {
            setActiveShade(colorObj.shade);
        }
        const keyup = (event) => {
            if (event.key === KEYS.ALT) {
                onEyeDropperToggle(false);
            }
        };
        document.addEventListener(EVENT.KEYUP, keyup, { capture: true });
        return () => {
            document.removeEventListener(EVENT.KEYUP, keyup, { capture: true });
        };
    }, [colorObj, onEyeDropperToggle]);
    const pickerRef = React.useRef(null);
    return (_jsx("div", { role: "dialog", "aria-modal": "true", "aria-label": t("labels.colorPicker"), children: _jsxs("div", { ref: pickerRef, onKeyDown: (event) => {
                const handled = colorPickerKeyNavHandler({
                    event,
                    activeColorPickerSection,
                    palette,
                    color,
                    onChange,
                    onEyeDropperToggle,
                    customColors,
                    setActiveColorPickerSection,
                    updateData,
                    activeShade,
                    onEscape,
                });
                if (handled) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }, className: "color-picker-content", 
            // to allow focusing by clicking but not by tabbing
            tabIndex: -1, children: [!!customColors.length && (_jsxs("div", { children: [_jsx(PickerHeading, { children: t("colorPicker.mostUsedCustomColors") }), _jsx(CustomColorList, { colors: customColors, color: color, label: t("colorPicker.mostUsedCustomColors"), onChange: onChange })] })), _jsxs("div", { children: [_jsx(PickerHeading, { children: t("colorPicker.colors") }), _jsx(PickerColorList, { color: color, label: label, palette: palette, onChange: onChange, activeShade: activeShade })] }), _jsxs("div", { children: [_jsx(PickerHeading, { children: t("colorPicker.shades") }), _jsx(ShadeList, { hex: color, onChange: onChange, palette: palette })] }), children] }) }));
};
