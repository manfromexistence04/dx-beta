import { jsx as _jsx } from "react/jsx-runtime";
import OpenColor from "open-color";
import "./Card.scss";
export const Card = ({ children, color }) => {
    return (_jsx("div", { className: "Card", style: {
            ["--card-color"]: color === "primary" ? "var(--color-primary)" : OpenColor[color][7],
            ["--card-color-darker"]: color === "primary"
                ? "var(--color-primary-darker)"
                : OpenColor[color][8],
            ["--card-color-darkest"]: color === "primary"
                ? "var(--color-primary-darkest)"
                : OpenColor[color][9],
        }, children: children }));
};
