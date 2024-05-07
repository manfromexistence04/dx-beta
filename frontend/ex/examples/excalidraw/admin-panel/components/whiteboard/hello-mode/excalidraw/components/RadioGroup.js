import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import "./RadioGroup.scss";
export const RadioGroup = function ({ onChange, value, choices, name, }) {
    return (_jsx("div", { className: "RadioGroup", children: choices.map((choice) => (_jsxs("div", { className: clsx("RadioGroup__choice", {
                active: choice.value === value,
            }), title: choice.ariaLabel, children: [_jsx("input", { name: name, type: "radio", checked: choice.value === value, onChange: () => onChange(choice.value), "aria-label": choice.ariaLabel }), choice.label] }, String(choice.value)))) }));
};
