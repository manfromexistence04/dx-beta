import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
// TODO: It might be "clever" to add option.icon to the existing component <ButtonSelect />
export const ButtonIconSelect = (props) => (_jsx("div", { className: "buttonList buttonListIcon", children: props.options.map((option) => props.type === "button" ? (_jsx("button", { onClick: (event) => props.onClick(option.value, event), className: clsx({
            active: option.active ?? props.value === option.value,
        }), "data-testid": option.testId, title: option.text, children: option.icon }, option.text)) : (_jsxs("label", { className: clsx({ active: props.value === option.value }), title: option.text, children: [_jsx("input", { type: "radio", name: props.group, onChange: () => props.onChange(option.value), checked: props.value === option.value, "data-testid": option.testId }), option.icon] }, option.text))) }));
