import { jsx as _jsx } from "react/jsx-runtime";
import { getDropdownMenuItemClassName, useHandleDropdownMenuItemClick, } from "./common";
import MenuItemContent from "./DropdownMenuItemContent";
const DropdownMenuItem = ({ icon, onSelect, children, shortcut, className, selected, ...rest }) => {
    const handleClick = useHandleDropdownMenuItemClick(rest.onClick, onSelect);
    return (_jsx("button", { ...rest, onClick: handleClick, type: "button", className: getDropdownMenuItemClassName(className, selected), title: rest.title ?? rest["aria-label"], children: _jsx(MenuItemContent, { icon: icon, shortcut: shortcut, children: children }) }));
};
DropdownMenuItem.displayName = "DropdownMenuItem";
export const DropDownMenuItemBadge = ({ children, }) => {
    return (_jsx("div", { style: {
            display: "inline-flex",
            marginLeft: "auto",
            padding: "2px 4px",
            background: "pink",
            borderRadius: 6,
            fontSize: 9,
            color: "black",
            fontFamily: "Cascadia, monospace",
        }, children: children }));
};
DropDownMenuItemBadge.displayName = "DropdownMenuItemBadge";
DropdownMenuItem.Badge = DropDownMenuItemBadge;
export default DropdownMenuItem;
