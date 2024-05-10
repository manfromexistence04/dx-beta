import { jsx as _jsx } from "react/jsx-runtime";
import MenuItemContent from "./DropdownMenuItemContent";
import { getDropdownMenuItemClassName, useHandleDropdownMenuItemClick, } from "./common";
const DropdownMenuItemLink = ({ icon, shortcut, href, children, onSelect, className = "", selected, ...rest }) => {
    const handleClick = useHandleDropdownMenuItemClick(rest.onClick, onSelect);
    return (_jsx("a", { ...rest, href: href, target: "_blank", rel: "noreferrer", className: getDropdownMenuItemClassName(className, selected), title: rest.title ?? rest["aria-label"], onClick: handleClick, children: _jsx(MenuItemContent, { icon: icon, shortcut: shortcut, children: children }) }));
};
export default DropdownMenuItemLink;
DropdownMenuItemLink.displayName = "DropdownMenuItemLink";
