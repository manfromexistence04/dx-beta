import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const MenuGroup = ({ children, className = "", style, title, }) => {
    return (_jsxs("div", { className: `dropdown-menu-group ${className}`, style: style, children: [title && _jsx("p", { className: "dropdown-menu-group-title", children: title }), children] }));
};
export default MenuGroup;
MenuGroup.displayName = "DropdownMenuGroup";
