import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { DEFAULT_CANVAS_BACKGROUND_PICKS, DEFAULT_ELEMENT_BACKGROUND_PICKS, DEFAULT_ELEMENT_STROKE_PICKS, } from "../../colors";
export const TopPicks = ({ onChange, type, activeColor, topPicks, }) => {
    let colors;
    if (type === "elementStroke") {
        colors = DEFAULT_ELEMENT_STROKE_PICKS;
    }
    if (type === "elementBackground") {
        colors = DEFAULT_ELEMENT_BACKGROUND_PICKS;
    }
    if (type === "canvasBackground") {
        colors = DEFAULT_CANVAS_BACKGROUND_PICKS;
    }
    // this one can overwrite defaults
    if (topPicks) {
        colors = topPicks;
    }
    if (!colors) {
        console.error("Invalid type for TopPicks");
        return null;
    }
    return (_jsx("div", { className: "color-picker__top-picks", children: colors.map((color) => (_jsx("button", { className: clsx("color-picker__button", {
                active: color === activeColor,
                "is-transparent": color === "transparent" || !color,
            }), style: { "--swatch-color": color }, type: "button", title: color, onClick: () => onChange(color), "data-testid": `color-top-pick-${color}`, children: _jsx("div", { className: "color-picker__button-outline" }) }, color))) }));
};
