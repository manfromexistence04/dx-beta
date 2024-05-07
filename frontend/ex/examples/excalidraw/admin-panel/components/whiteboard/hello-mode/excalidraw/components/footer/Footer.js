import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { actionShortcuts } from "../../actions";
import { ExitZenModeAction, FinalizeAction, UndoRedoActions, ZoomActions, } from "../Actions";
import { useDevice } from "../App";
import { useTunnels } from "../../context/tunnels";
import { HelpButton } from "../HelpButton";
import { Section } from "../Section";
import Stack from "../Stack";
const Footer = ({ appState, actionManager, showExitZenModeBtn, renderWelcomeScreen, }) => {
    const { FooterCenterTunnel, WelcomeScreenHelpHintTunnel } = useTunnels();
    const device = useDevice();
    const showFinalize = !appState.viewModeEnabled && appState.multiElement && device.isTouchScreen;
    return (_jsxs("footer", { role: "contentinfo", className: "layer-ui__wrapper__footer App-menu App-menu_bottom", children: [_jsx("div", { className: clsx("layer-ui__wrapper__footer-left zen-mode-transition", {
                    "layer-ui__wrapper__footer-left--transition-left": appState.zenModeEnabled,
                }), children: _jsx(Stack.Col, { gap: 2, children: _jsxs(Section, { heading: "canvasActions", children: [_jsx(ZoomActions, { renderAction: actionManager.renderAction, zoom: appState.zoom }), !appState.viewModeEnabled && (_jsx(UndoRedoActions, { renderAction: actionManager.renderAction, className: clsx("zen-mode-transition", {
                                    "layer-ui__wrapper__footer-left--transition-bottom": appState.zenModeEnabled,
                                }) })), showFinalize && (_jsx(FinalizeAction, { renderAction: actionManager.renderAction, className: clsx("zen-mode-transition", {
                                    "layer-ui__wrapper__footer-left--transition-left": appState.zenModeEnabled,
                                }) }))] }) }) }), _jsx(FooterCenterTunnel.Out, {}), _jsx("div", { className: clsx("layer-ui__wrapper__footer-right zen-mode-transition", {
                    "transition-right": appState.zenModeEnabled,
                }), children: _jsxs("div", { style: { position: "relative" }, children: [renderWelcomeScreen && _jsx(WelcomeScreenHelpHintTunnel.Out, {}), _jsx(HelpButton, { onClick: () => actionManager.executeAction(actionShortcuts) })] }) }), _jsx(ExitZenModeAction, { actionManager: actionManager, showExitZenModeBtn: showExitZenModeBtn })] }));
};
export default Footer;
Footer.displayName = "Footer";
