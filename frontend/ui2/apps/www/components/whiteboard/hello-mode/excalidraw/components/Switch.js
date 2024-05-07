import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import "./Switch.scss";
export const Switch = ({ title, name, checked, onChange, disabled = false, }) => {
    return (_jsx("div", { className: clsx("Switch", { toggled: checked, disabled }), children: _jsx("input", { name: name, id: name, title: title, type: "checkbox", checked: checked, disabled: disabled, onChange: () => onChange(!checked), onKeyDown: (event) => {
                if (event.key === " ") {
                    onChange(!checked);
                }
            } }) }));
};
