import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
export const ButtonSelect = ({ options, value, onChange, group, }) => (_jsx("div", { className: "buttonList", children: options.map((option) => (_jsxs("label", { className: clsx({ active: value === option.value }), children: [_jsx("input", { type: "radio", name: group, onChange: () => onChange(option.value), checked: value === option.value }), option.text] }, option.text))) }));
