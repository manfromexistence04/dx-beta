import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { checkIcon } from "./icons";
import "./CheckboxItem.scss";
export const CheckboxItem = ({ children, checked, onChange, className }) => {
    return (_jsxs("div", { className: clsx("Checkbox", className, { "is-checked": checked }), onClick: (event) => {
            onChange(!checked, event);
            event.currentTarget.querySelector(".Checkbox-box").focus();
        }, children: [_jsx("button", { className: "Checkbox-box", role: "checkbox", "aria-checked": checked, children: checkIcon }), _jsx("div", { className: "Checkbox-label", children: children })] }));
};
