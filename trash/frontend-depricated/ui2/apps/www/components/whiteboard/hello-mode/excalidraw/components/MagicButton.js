import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ToolIcon.scss";
import clsx from "clsx";
const DEFAULT_SIZE = "small";
export const ElementCanvasButton = (props) => {
    return (_jsxs("label", { className: clsx("ToolIcon ToolIcon__MagicButton", `ToolIcon_size_${DEFAULT_SIZE}`, {
            "is-mobile": props.isMobile,
        }), title: `${props.title}`, children: [_jsx("input", { className: "ToolIcon_type_checkbox", type: "checkbox", name: props.name, onChange: props.onChange, checked: props.checked, "aria-label": props.title }), _jsx("div", { className: "ToolIcon__icon", children: props.icon })] }));
};
