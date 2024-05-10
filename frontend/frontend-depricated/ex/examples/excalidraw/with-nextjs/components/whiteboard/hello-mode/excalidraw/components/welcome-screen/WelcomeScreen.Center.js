import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { actionLoadScene, actionShortcuts } from "../../actions";
import { getShortcutFromShortcutName } from "../../actions/shortcuts";
import { t, useI18n } from "../../i18n";
import { useDevice, useExcalidrawActionManager } from "../App";
import { useTunnels } from "../../context/tunnels";
import { HelpIcon, LoadIcon, usersIcon } from "../icons";
import { useUIAppState } from "../../context/ui-appState";
import { ExcalidrawLogo } from "../ExcalidrawLogo";
const WelcomeScreenMenuItemContent = ({ icon, shortcut, children, }) => {
    const device = useDevice();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "welcome-screen-menu-item__icon", children: icon }), _jsx("div", { className: "welcome-screen-menu-item__text", children: children }), shortcut && !device.editor.isMobile && (_jsx("div", { className: "welcome-screen-menu-item__shortcut", children: shortcut }))] }));
};
WelcomeScreenMenuItemContent.displayName = "WelcomeScreenMenuItemContent";
const WelcomeScreenMenuItem = ({ onSelect, children, icon, shortcut, className = "", ...props }) => {
    return (_jsx("button", { ...props, type: "button", className: `welcome-screen-menu-item ${className}`, onClick: onSelect, children: _jsx(WelcomeScreenMenuItemContent, { icon: icon, shortcut: shortcut, children: children }) }));
};
WelcomeScreenMenuItem.displayName = "WelcomeScreenMenuItem";
const WelcomeScreenMenuItemLink = ({ children, href, icon, shortcut, className = "", ...props }) => {
    return (_jsx("a", { ...props, className: `welcome-screen-menu-item ${className}`, href: href, target: "_blank", rel: "noreferrer", children: _jsx(WelcomeScreenMenuItemContent, { icon: icon, shortcut: shortcut, children: children }) }));
};
WelcomeScreenMenuItemLink.displayName = "WelcomeScreenMenuItemLink";
const Center = ({ children }) => {
    const { WelcomeScreenCenterTunnel } = useTunnels();
    return (_jsx(WelcomeScreenCenterTunnel.In, { children: _jsx("div", { className: "welcome-screen-center", children: children || (_jsxs(_Fragment, { children: [_jsx(Logo, {}), _jsx(Heading, { children: t("welcomeScreen.defaults.center_heading") }), _jsxs(Menu, { children: [_jsx(MenuItemLoadScene, {}), _jsx(MenuItemHelp, {})] })] })) }) }));
};
Center.displayName = "Center";
const Logo = ({ children }) => {
    return (_jsx("div", { className: "welcome-screen-center__logo virgil welcome-screen-decor", children: children || _jsx(ExcalidrawLogo, { withText: true }) }));
};
Logo.displayName = "Logo";
const Heading = ({ children }) => {
    return (_jsx("div", { className: "welcome-screen-center__heading welcome-screen-decor virgil", children: children }));
};
Heading.displayName = "Heading";
const Menu = ({ children }) => {
    return _jsx("div", { className: "welcome-screen-menu", children: children });
};
Menu.displayName = "Menu";
const MenuItemHelp = () => {
    const actionManager = useExcalidrawActionManager();
    return (_jsx(WelcomeScreenMenuItem, { onSelect: () => actionManager.executeAction(actionShortcuts), shortcut: "?", icon: HelpIcon, children: t("helpDialog.title") }));
};
MenuItemHelp.displayName = "MenuItemHelp";
const MenuItemLoadScene = () => {
    const appState = useUIAppState();
    const actionManager = useExcalidrawActionManager();
    if (appState.viewModeEnabled) {
        return null;
    }
    return (_jsx(WelcomeScreenMenuItem, { onSelect: () => actionManager.executeAction(actionLoadScene), shortcut: getShortcutFromShortcutName("loadScene"), icon: LoadIcon, children: t("buttons.load") }));
};
MenuItemLoadScene.displayName = "MenuItemLoadScene";
const MenuItemLiveCollaborationTrigger = ({ onSelect, }) => {
    const { t } = useI18n();
    return (_jsx(WelcomeScreenMenuItem, { shortcut: null, onSelect: onSelect, icon: usersIcon, children: t("labels.liveCollaboration") }));
};
MenuItemLiveCollaborationTrigger.displayName =
    "MenuItemLiveCollaborationTrigger";
// -----------------------------------------------------------------------------
Center.Logo = Logo;
Center.Heading = Heading;
Center.Menu = Menu;
Center.MenuItem = WelcomeScreenMenuItem;
Center.MenuItemLink = WelcomeScreenMenuItemLink;
Center.MenuItemHelp = MenuItemHelp;
Center.MenuItemLoadScene = MenuItemLoadScene;
Center.MenuItemLiveCollaborationTrigger = MenuItemLiveCollaborationTrigger;
export { Center };
