import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useExcalidrawSetAppState } from "../App";
import { useUIAppState } from "../../context/ui-appState";
import clsx from "clsx";
import "./SidebarTrigger.scss";
export const SidebarTrigger = ({ name, tab, icon, title, children, onToggle, className, style, }) => {
    const setAppState = useExcalidrawSetAppState();
    const appState = useUIAppState();
    return (_jsxs("label", { title: title, className: "sidebar-trigger__label-element", children: [_jsx("input", { className: "ToolIcon_type_checkbox", type: "checkbox", onChange: (event) => {
                    document
                        .querySelector(".layer-ui__wrapper")
                        ?.classList.remove("animate");
                    const isOpen = event.target.checked;
                    setAppState({ openSidebar: isOpen ? { name, tab } : null });
                    onToggle?.(isOpen);
                }, checked: appState.openSidebar?.name === name, "aria-label": title, "aria-keyshortcuts": "0" }), _jsxs("div", { className: clsx("sidebar-trigger", className), style: style, children: [icon && _jsx("div", { children: icon }), children && _jsx("div", { className: "sidebar-trigger__label", children: children })] })] }));
};
SidebarTrigger.displayName = "SidebarTrigger";
