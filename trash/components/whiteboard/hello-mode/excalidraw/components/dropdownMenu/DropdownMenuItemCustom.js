import { jsx as _jsx } from "react/jsx-runtime";
const DropdownMenuItemCustom = ({ children, className = "", selected, ...rest }) => {
    return (_jsx("div", { ...rest, className: `dropdown-menu-item-base dropdown-menu-item-custom ${className} ${selected ? `dropdown-menu-item--selected` : ``}`.trim(), children: children }));
};
export default DropdownMenuItemCustom;
