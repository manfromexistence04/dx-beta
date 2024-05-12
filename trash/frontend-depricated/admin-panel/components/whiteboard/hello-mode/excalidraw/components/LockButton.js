import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ToolIcon.scss";
import clsx from "clsx";
import { LockedIcon, UnlockedIcon } from "./icons";
const DEFAULT_SIZE = "medium";
const ICONS = {
    CHECKED: LockedIcon,
    UNCHECKED: UnlockedIcon,
};
export const LockButton = (props) => {
    return (_jsxs("label", { className: clsx("ToolIcon ToolIcon__lock", `ToolIcon_size_${DEFAULT_SIZE}`, {
            "is-mobile": props.isMobile,
        }), title: `${props.title} — Q`, children: [_jsx("input", { className: "ToolIcon_type_checkbox", type: "checkbox", name: props.name, onChange: props.onChange, checked: props.checked, "aria-label": props.title, "data-testid": "toolbar-lock" }), _jsx("div", { className: "ToolIcon__icon", children: props.checked ? ICONS.CHECKED : ICONS.UNCHECKED })] }));
};
