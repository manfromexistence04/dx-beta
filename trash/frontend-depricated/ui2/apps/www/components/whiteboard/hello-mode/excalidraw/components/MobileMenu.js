import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { t } from "../i18n";
import Stack from "./Stack";
import { showSelectedShapeActions } from "../element";
import { FixedSideContainer } from "./FixedSideContainer";
import { Island } from "./Island";
import { HintViewer } from "./HintViewer";
import { calculateScrollCenter } from "../scene";
import { SelectedShapeActions, ShapesSwitcher } from "./Actions";
import { Section } from "./Section";
import { SCROLLBAR_WIDTH, SCROLLBAR_MARGIN } from "../scene/scrollbars";
import { LockButton } from "./LockButton";
import { PenModeButton } from "./PenModeButton";
import { Stats } from "./Stats";
import { actionToggleStats } from "../actions";
import { HandButton } from "./HandButton";
import { isHandToolActive } from "../appState";
import { useTunnels } from "../context/tunnels";
export const MobileMenu = ({ appState, elements, actionManager, setAppState, onLockToggle, onHandToolToggle, onPenModeToggle, renderTopRightUI, renderCustomStats, renderSidebars, device, renderWelcomeScreen, UIOptions, app, }) => {
    const { WelcomeScreenCenterTunnel, MainMenuTunnel, DefaultSidebarTriggerTunnel, } = useTunnels();
    const renderToolbar = () => {
        return (_jsxs(FixedSideContainer, { side: "top", className: "App-top-bar", children: [renderWelcomeScreen && _jsx(WelcomeScreenCenterTunnel.Out, {}), _jsx(Section, { heading: "shapes", children: (heading) => (_jsx(Stack.Col, { gap: 4, align: "center", children: _jsxs(Stack.Row, { gap: 1, className: "App-toolbar-container", children: [_jsxs(Island, { padding: 1, className: "App-toolbar App-toolbar--mobile", children: [heading, _jsx(Stack.Row, { gap: 1, children: _jsx(ShapesSwitcher, { appState: appState, activeTool: appState.activeTool, UIOptions: UIOptions, app: app }) })] }), renderTopRightUI && renderTopRightUI(true, appState), _jsxs("div", { className: "mobile-misc-tools-container", children: [!appState.viewModeEnabled && (_jsx(DefaultSidebarTriggerTunnel.Out, {})), _jsx(PenModeButton, { checked: appState.penMode, onChange: () => onPenModeToggle(null), title: t("toolBar.penMode"), isMobile: true, penDetected: appState.penDetected }), _jsx(LockButton, { checked: appState.activeTool.locked, onChange: onLockToggle, title: t("toolBar.lock"), isMobile: true }), _jsx(HandButton, { checked: isHandToolActive(appState), onChange: () => onHandToolToggle(), title: t("toolBar.hand"), isMobile: true })] })] }) })) }), _jsx(HintViewer, { appState: appState, isMobile: true, device: device, app: app })] }));
    };
    const renderAppToolbar = () => {
        if (appState.viewModeEnabled) {
            return (_jsx("div", { className: "App-toolbar-content", children: _jsx(MainMenuTunnel.Out, {}) }));
        }
        return (_jsxs("div", { className: "App-toolbar-content", children: [_jsx(MainMenuTunnel.Out, {}), actionManager.renderAction("toggleEditMenu"), actionManager.renderAction("undo"), actionManager.renderAction("redo"), actionManager.renderAction(appState.multiElement ? "finalize" : "duplicateSelection"), actionManager.renderAction("deleteSelectedElements")] }));
    };
    return (_jsxs(_Fragment, { children: [renderSidebars(), !appState.viewModeEnabled && renderToolbar(), !appState.openMenu && appState.showStats && (_jsx(Stats, { appState: appState, setAppState: setAppState, elements: elements, onClose: () => {
                    actionManager.executeAction(actionToggleStats);
                }, renderCustomStats: renderCustomStats })), _jsx("div", { className: "App-bottom-bar", style: {
                    marginBottom: SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2,
                    marginLeft: SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2,
                    marginRight: SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2,
                }, children: _jsxs(Island, { padding: 0, children: [appState.openMenu === "shape" &&
                            !appState.viewModeEnabled &&
                            showSelectedShapeActions(appState, elements) ? (_jsx(Section, { className: "App-mobile-menu", heading: "selectedShapeActions", children: _jsx(SelectedShapeActions, { appState: appState, elementsMap: app.scene.getNonDeletedElementsMap(), renderAction: actionManager.renderAction }) })) : null, _jsxs("footer", { className: "App-toolbar", children: [renderAppToolbar(), appState.scrolledOutside &&
                                    !appState.openMenu &&
                                    !appState.openSidebar && (_jsx("button", { className: "scroll-back-to-content", onClick: () => {
                                        setAppState((appState) => ({
                                            ...calculateScrollCenter(elements, appState),
                                        }));
                                    }, children: t("buttons.scrollBackToContent") }))] })] }) })] }));
};
