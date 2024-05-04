import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
export const ButtonIconCycle = ({ options, value, onChange, group, }) => {
    const current = options.find((op) => op.value === value);
    const cycle = () => {
        const index = options.indexOf(current);
        const next = (index + 1) % options.length;
        onChange(options[next].value);
    };
    return (_jsxs("label", { className: clsx({ active: current.value !== null }), children: [_jsx("input", { type: "button", name: group, onClick: cycle }), current.icon] }, group));
};
