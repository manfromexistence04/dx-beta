import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useDevice } from "../App";
const MenuItemContent = ({ icon, shortcut, children, }) => {
    const device = useDevice();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "dropdown-menu-item__icon", children: icon }), _jsx("div", { className: "dropdown-menu-item__text", children: children }), shortcut && !device.editor.isMobile && (_jsx("div", { className: "dropdown-menu-item__shortcut", children: shortcut }))] }));
};
export default MenuItemContent;
