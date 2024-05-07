import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDevice } from "../App";
import { RadioGroup } from "../RadioGroup";
const DropdownMenuItemContentRadio = ({ value, shortcut, onChange, choices, children, name, }) => {
    const device = useDevice();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "dropdown-menu-item-base dropdown-menu-item-bare", children: [_jsx("label", { className: "dropdown-menu-item__text", htmlFor: name, children: children }), _jsx(RadioGroup, { name: name, value: value, onChange: onChange, choices: choices })] }), shortcut && !device.editor.isMobile && (_jsx("div", { className: "dropdown-menu-item__shortcut dropdown-menu-item__shortcut--orphaned", children: shortcut }))] }));
};
DropdownMenuItemContentRadio.displayName = "DropdownMenuItemContentRadio";
export default DropdownMenuItemContentRadio;
