import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ToolIcon.scss";
import clsx from "clsx";
import { laserPointerToolIcon } from "./icons";
const DEFAULT_SIZE = "small";
export const LaserPointerButton = (props) => {
    return (_jsxs("label", { className: clsx("ToolIcon ToolIcon__LaserPointer", `ToolIcon_size_${DEFAULT_SIZE}`, {
            "is-mobile": props.isMobile,
        }), title: `${props.title}`, children: [_jsx("input", { className: "ToolIcon_type_checkbox", type: "checkbox", name: props.name, onChange: props.onChange, checked: props.checked, "aria-label": props.title, "data-testid": "toolbar-LaserPointer" }), _jsx("div", { className: "ToolIcon__icon", children: laserPointerToolIcon })] }));
};
