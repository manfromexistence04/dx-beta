import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useContext } from "react";
import { t } from "../../i18n";
import { useDevice } from "../App";
import { SidebarPropsContext } from "./common";
import { CloseIcon, PinIcon } from "../icons";
import { Tooltip } from "../Tooltip";
import { Button } from "../Button";
export const SidebarHeader = ({ children, className, }) => {
    const device = useDevice();
    const props = useContext(SidebarPropsContext);
    const renderDockButton = !!(device.editor.canFitSidebar && props.shouldRenderDockButton);
    return (_jsxs("div", { className: clsx("sidebar__header", className), "data-testid": "sidebar-header", children: [children, _jsxs("div", { className: "sidebar__header__buttons", children: [renderDockButton && (_jsx(Tooltip, { label: t("labels.sidebarLock"), children: _jsx(Button, { onSelect: () => props.onDock?.(!props.docked), selected: !!props.docked, className: "sidebar__dock", "data-testid": "sidebar-dock", "aria-label": t("labels.sidebarLock"), children: PinIcon }) })), _jsx(Button, { "data-testid": "sidebar-close", className: "sidebar__close", onSelect: props.onCloseRequest, "aria-label": t("buttons.close"), children: CloseIcon })] })] }));
};
SidebarHeader.displayName = "SidebarHeader";
