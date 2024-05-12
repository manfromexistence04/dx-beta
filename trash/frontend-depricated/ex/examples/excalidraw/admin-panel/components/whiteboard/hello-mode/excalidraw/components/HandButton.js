import { jsx as _jsx } from "react/jsx-runtime";
import "./ToolIcon.scss";
import clsx from "clsx";
import { ToolButton } from "./ToolButton";
import { handIcon } from "./icons";
import { KEYS } from "../keys";
export const HandButton = (props) => {
    return (_jsx(ToolButton, { className: clsx("Shape", { fillable: false }), type: "radio", icon: handIcon, name: "editor-current-shape", checked: props.checked, title: `${props.title} — H`, keyBindingLabel: !props.isMobile ? KEYS.H.toLocaleUpperCase() : undefined, "aria-label": `${props.title} — H`, "aria-keyshortcuts": KEYS.H, "data-testid": `toolbar-hand`, onChange: () => props.onChange?.() }));
};
