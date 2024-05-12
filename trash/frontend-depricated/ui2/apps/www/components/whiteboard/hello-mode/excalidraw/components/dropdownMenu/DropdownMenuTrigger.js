import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { useDevice } from "../App";
const MenuTrigger = ({ className = "", children, onToggle, title, ...rest }) => {
    const device = useDevice();
    const classNames = clsx(`dropdown-menu-button ${className}`, "zen-mode-transition", {
        "dropdown-menu-button--mobile": device.editor.isMobile,
    }).trim();
    return (_jsx("button", { "data-prevent-outside-click": true, className: classNames, onClick: onToggle, type: "button", "data-testid": "dropdown-menu-button", title: title, ...rest, children: children }));
};
export default MenuTrigger;
MenuTrigger.displayName = "DropdownMenuTrigger";
