import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { t } from "../../i18n";
import { useTunnels } from "../../context/tunnels";
import { WelcomeScreenHelpArrow, WelcomeScreenMenuArrow, WelcomeScreenTopToolbarArrow, } from "../icons";
const MenuHint = ({ children }) => {
    const { WelcomeScreenMenuHintTunnel } = useTunnels();
    return (_jsx(WelcomeScreenMenuHintTunnel.In, { children: _jsxs("div", { className: "virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--menu", children: [WelcomeScreenMenuArrow, _jsx("div", { className: "welcome-screen-decor-hint__label", children: children || t("welcomeScreen.defaults.menuHint") })] }) }));
};
MenuHint.displayName = "MenuHint";
const ToolbarHint = ({ children }) => {
    const { WelcomeScreenToolbarHintTunnel } = useTunnels();
    return (_jsx(WelcomeScreenToolbarHintTunnel.In, { children: _jsxs("div", { className: "virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--toolbar", children: [_jsx("div", { className: "welcome-screen-decor-hint__label", children: children || t("welcomeScreen.defaults.toolbarHint") }), WelcomeScreenTopToolbarArrow] }) }));
};
ToolbarHint.displayName = "ToolbarHint";
const HelpHint = ({ children }) => {
    const { WelcomeScreenHelpHintTunnel } = useTunnels();
    return (_jsx(WelcomeScreenHelpHintTunnel.In, { children: _jsxs("div", { className: "virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--help", children: [_jsx("div", { children: children || t("welcomeScreen.defaults.helpHint") }), WelcomeScreenHelpArrow] }) }));
};
HelpHint.displayName = "HelpHint";
export { HelpHint, MenuHint, ToolbarHint };
