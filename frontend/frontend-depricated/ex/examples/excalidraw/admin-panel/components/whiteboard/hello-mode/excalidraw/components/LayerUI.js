import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import React from "react";
import { CLASSES, DEFAULT_SIDEBAR, LIBRARY_SIDEBAR_WIDTH, TOOL_TYPE, } from "../constants";
import { showSelectedShapeActions } from "../element";
import { t } from "../i18n";
import { calculateScrollCenter } from "../scene";
import { capitalizeString, isShallowEqual } from "../utils";
import { SelectedShapeActions, ShapesSwitcher } from "./Actions";
import { ErrorDialog } from "./ErrorDialog";
import { ImageExportDialog } from "./ImageExportDialog";
import { FixedSideContainer } from "./FixedSideContainer";
import { Island } from "./Island";
import { LoadingMessage } from "./LoadingMessage";
import { LockButton } from "./LockButton";
import { MobileMenu } from "./MobileMenu";
import { PasteChartDialog } from "./PasteChartDialog";
import { Section } from "./Section";
import { HelpDialog } from "./HelpDialog";
import Stack from "./Stack";
import { UserList } from "./UserList";
import { JSONExportDialog } from "./JSONExportDialog";
import { PenModeButton } from "./PenModeButton";
import { trackEvent } from "../analytics";
import { useDevice } from "./App";
import { Stats } from "./Stats";
import { actionToggleStats } from "../actions/actionToggleStats";
import Footer from "./footer/Footer";
import { isSidebarDockedAtom } from "./Sidebar/Sidebar";
import { jotaiScope } from "../jotai";
import { Provider, useAtom, useAtomValue } from "jotai";
import MainMenu from "./main-menu/MainMenu";
import { ActiveConfirmDialog } from "./ActiveConfirmDialog";
import { OverwriteConfirmDialog } from "./OverwriteConfirm/OverwriteConfirm";
import { HandButton } from "./HandButton";
import { isHandToolActive } from "../appState";
import { TunnelsContext, useInitializeTunnels } from "../context/tunnels";
import { LibraryIcon } from "./icons";
import { UIAppStateContext } from "../context/ui-appState";
import { DefaultSidebar } from "./DefaultSidebar";
import { EyeDropper, activeEyeDropperAtom } from "./EyeDropper";
import "./LayerUI.scss";
import "./Toolbar.scss";
import { mutateElement } from "../element/mutateElement";
import { ShapeCache } from "../scene/ShapeCache";
import Scene from "../scene/Scene";
import { LaserPointerButton } from "./LaserPointerButton";
import { MagicSettings } from "./MagicSettings";
import { TTDDialog } from "./TTDDialog/TTDDialog";
const DefaultMainMenu = ({ UIOptions }) => {
    return (_jsxs(MainMenu, { __fallback: true, children: [_jsx(MainMenu.DefaultItems.LoadScene, {}), _jsx(MainMenu.DefaultItems.SaveToActiveFile, {}), UIOptions.canvasActions.export && _jsx(MainMenu.DefaultItems.Export, {}), UIOptions.canvasActions.saveAsImage && (_jsx(MainMenu.DefaultItems.SaveAsImage, {})), _jsx(MainMenu.DefaultItems.Help, {}), _jsx(MainMenu.DefaultItems.ClearCanvas, {}), _jsx(MainMenu.Separator, {}), _jsx(MainMenu.Group, { title: "Excalidraw links", children: _jsx(MainMenu.DefaultItems.Socials, {}) }), _jsx(MainMenu.Separator, {}), _jsx(MainMenu.DefaultItems.ToggleTheme, {}), _jsx(MainMenu.DefaultItems.ChangeCanvasBackground, {})] }));
};
const DefaultOverwriteConfirmDialog = () => {
    return (_jsxs(OverwriteConfirmDialog, { __fallback: true, children: [_jsx(OverwriteConfirmDialog.Actions.SaveToDisk, {}), _jsx(OverwriteConfirmDialog.Actions.ExportToImage, {})] }));
};
const LayerUI = ({ actionManager, appState, files, setAppState, elements, canvas, onLockToggle, onHandToolToggle, onPenModeToggle, showExitZenModeBtn, renderTopRightUI, renderCustomStats, UIOptions, onExportImage, renderWelcomeScreen, children, app, isCollaborating, openAIKey, isOpenAIKeyPersisted, onOpenAIAPIKeyChange, onMagicSettingsConfirm, }) => {
    const device = useDevice();
    const tunnels = useInitializeTunnels();
    const [eyeDropperState, setEyeDropperState] = useAtom(activeEyeDropperAtom, jotaiScope);
    const renderJSONExportDialog = () => {
        if (!UIOptions.canvasActions.export) {
            return null;
        }
        return (_jsx(JSONExportDialog, { elements: elements, appState: appState, files: files, actionManager: actionManager, exportOpts: UIOptions.canvasActions.export, canvas: canvas, setAppState: setAppState }));
    };
    const renderImageExportDialog = () => {
        if (!UIOptions.canvasActions.saveAsImage ||
            appState.openDialog?.name !== "imageExport") {
            return null;
        }
        return (_jsx(ImageExportDialog, { elements: elements, appState: appState, files: files, actionManager: actionManager, onExportImage: onExportImage, onCloseRequest: () => setAppState({ openDialog: null }), name: app.getName() }));
    };
    const renderCanvasActions = () => (_jsxs("div", { style: { position: "relative" }, children: [_jsx(tunnels.MainMenuTunnel.Out, {}), renderWelcomeScreen && _jsx(tunnels.WelcomeScreenMenuHintTunnel.Out, {})] }));
    const renderSelectedShapeActions = () => (_jsx(Section, { heading: "selectedShapeActions", className: clsx("selected-shape-actions zen-mode-transition", {
            "transition-left": appState.zenModeEnabled,
        }), children: _jsx(Island, { className: CLASSES.SHAPE_ACTIONS_MENU, padding: 2, style: {
                // we want to make sure this doesn't overflow so subtracting the
                // approximate height of hamburgerMenu + footer
                maxHeight: `${appState.height - 166}px`,
            }, children: _jsx(SelectedShapeActions, { appState: appState, elementsMap: app.scene.getNonDeletedElementsMap(), renderAction: actionManager.renderAction }) }) }));
    const renderFixedSideContainer = () => {
        const shouldRenderSelectedShapeActions = showSelectedShapeActions(appState, elements);
        return (_jsx(FixedSideContainer, { side: "top", children: _jsxs("div", { className: "App-menu App-menu_top", children: [_jsxs(Stack.Col, { gap: 6, className: clsx("App-menu_top__left"), children: [renderCanvasActions(), shouldRenderSelectedShapeActions && renderSelectedShapeActions()] }), !appState.viewModeEnabled && (_jsx(Section, { heading: "shapes", className: "shapes-section", children: (heading) => (_jsxs("div", { style: { position: "relative" }, children: [renderWelcomeScreen && (_jsx(tunnels.WelcomeScreenToolbarHintTunnel.Out, {})), _jsx(Stack.Col, { gap: 4, align: "start", children: _jsxs(Stack.Row, { gap: 1, className: clsx("App-toolbar-container", {
                                            "zen-mode": appState.zenModeEnabled,
                                        }), children: [_jsxs(Island, { padding: 1, className: clsx("App-toolbar", {
                                                    "zen-mode": appState.zenModeEnabled,
                                                }), children: [heading, _jsxs(Stack.Row, { gap: 1, children: [_jsx(PenModeButton, { zenModeEnabled: appState.zenModeEnabled, checked: appState.penMode, onChange: () => onPenModeToggle(null), title: t("toolBar.penMode"), penDetected: appState.penDetected }), _jsx(LockButton, { checked: appState.activeTool.locked, onChange: onLockToggle, title: t("toolBar.lock") }), _jsx("div", { className: "App-toolbar__divider" }), _jsx(HandButton, { checked: isHandToolActive(appState), onChange: () => onHandToolToggle(), title: t("toolBar.hand"), isMobile: true }), _jsx(ShapesSwitcher, { appState: appState, activeTool: appState.activeTool, UIOptions: UIOptions, app: app })] })] }), isCollaborating && (_jsx(Island, { style: {
                                                    marginLeft: 8,
                                                    alignSelf: "center",
                                                    height: "fit-content",
                                                }, children: _jsx(LaserPointerButton, { title: t("toolBar.laser"), checked: appState.activeTool.type === TOOL_TYPE.laser, onChange: () => app.setActiveTool({ type: TOOL_TYPE.laser }), isMobile: true }) }))] }) })] })) })), _jsxs("div", { className: clsx("layer-ui__wrapper__top-right zen-mode-transition", {
                            "transition-right": appState.zenModeEnabled,
                        }), children: [appState.collaborators.size > 0 && (_jsx(UserList, { collaborators: appState.collaborators, userToFollow: appState.userToFollow?.socketId || null })), renderTopRightUI?.(device.editor.isMobile, appState), !appState.viewModeEnabled &&
                                // hide button when sidebar docked
                                (!isSidebarDocked ||
                                    appState.openSidebar?.name !== DEFAULT_SIDEBAR.name) && (_jsx(tunnels.DefaultSidebarTriggerTunnel.Out, {}))] })] }) }));
    };
    const renderSidebars = () => {
        return (_jsx(DefaultSidebar, { __fallback: true, onDock: (docked) => {
                trackEvent("sidebar", `toggleDock (${docked ? "dock" : "undock"})`, `(${device.editor.isMobile ? "mobile" : "desktop"})`);
            } }));
    };
    const isSidebarDocked = useAtomValue(isSidebarDockedAtom, jotaiScope);
    const layerUIJSX = (_jsxs(_Fragment, { children: [children, _jsx(DefaultMainMenu, { UIOptions: UIOptions }), _jsx(DefaultSidebar.Trigger, { __fallback: true, icon: LibraryIcon, title: capitalizeString(t("toolBar.library")), onToggle: (open) => {
                    if (open) {
                        trackEvent("sidebar", `${DEFAULT_SIDEBAR.name} (open)`, `button (${device.editor.isMobile ? "mobile" : "desktop"})`);
                    }
                }, tab: DEFAULT_SIDEBAR.defaultTab, children: t("toolBar.library") }), _jsx(DefaultOverwriteConfirmDialog, {}), appState.openDialog?.name === "ttd" && _jsx(TTDDialog, { __fallback: true }), appState.isLoading && _jsx(LoadingMessage, { delay: 250 }), appState.errorMessage && (_jsx(ErrorDialog, { onClose: () => setAppState({ errorMessage: null }), children: appState.errorMessage })), eyeDropperState && !device.editor.isMobile && (_jsx(EyeDropper, { colorPickerType: eyeDropperState.colorPickerType, onCancel: () => {
                    setEyeDropperState(null);
                }, onChange: (colorPickerType, color, selectedElements, { altKey }) => {
                    if (colorPickerType !== "elementBackground" &&
                        colorPickerType !== "elementStroke") {
                        return;
                    }
                    if (selectedElements.length) {
                        for (const element of selectedElements) {
                            mutateElement(element, {
                                [altKey && eyeDropperState.swapPreviewOnAlt
                                    ? colorPickerType === "elementBackground"
                                        ? "strokeColor"
                                        : "backgroundColor"
                                    : colorPickerType === "elementBackground"
                                        ? "backgroundColor"
                                        : "strokeColor"]: color,
                            }, false);
                            ShapeCache.delete(element);
                        }
                        Scene.getScene(selectedElements[0])?.informMutation();
                    }
                    else if (colorPickerType === "elementBackground") {
                        setAppState({
                            currentItemBackgroundColor: color,
                        });
                    }
                    else {
                        setAppState({ currentItemStrokeColor: color });
                    }
                }, onSelect: (color, event) => {
                    setEyeDropperState((state) => {
                        return state?.keepOpenOnAlt && event.altKey ? state : null;
                    });
                    eyeDropperState?.onSelect?.(color, event);
                } })), appState.openDialog?.name === "help" && (_jsx(HelpDialog, { onClose: () => {
                    setAppState({ openDialog: null });
                } })), appState.openDialog?.name === "settings" && (_jsx(MagicSettings, { openAIKey: openAIKey, isPersisted: isOpenAIKeyPersisted, onChange: onOpenAIAPIKeyChange, onConfirm: (apiKey, shouldPersist) => {
                    const source = appState.openDialog?.name === "settings"
                        ? appState.openDialog?.source
                        : "settings";
                    setAppState({ openDialog: null }, () => {
                        onMagicSettingsConfirm(apiKey, shouldPersist, source);
                    });
                }, onClose: () => {
                    setAppState({ openDialog: null });
                } })), _jsx(ActiveConfirmDialog, {}), _jsx(tunnels.OverwriteConfirmDialogTunnel.Out, {}), renderImageExportDialog(), renderJSONExportDialog(), appState.pasteDialog.shown && (_jsx(PasteChartDialog, { setAppState: setAppState, appState: appState, onClose: () => setAppState({
                    pasteDialog: { shown: false, data: null },
                }) })), device.editor.isMobile && (_jsx(MobileMenu, { app: app, appState: appState, elements: elements, actionManager: actionManager, renderJSONExportDialog: renderJSONExportDialog, renderImageExportDialog: renderImageExportDialog, setAppState: setAppState, onLockToggle: onLockToggle, onHandToolToggle: onHandToolToggle, onPenModeToggle: onPenModeToggle, renderTopRightUI: renderTopRightUI, renderCustomStats: renderCustomStats, renderSidebars: renderSidebars, device: device, renderWelcomeScreen: renderWelcomeScreen, UIOptions: UIOptions })), !device.editor.isMobile && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "layer-ui__wrapper", style: appState.openSidebar &&
                            isSidebarDocked &&
                            device.editor.canFitSidebar
                            ? { width: `calc(100% - ${LIBRARY_SIDEBAR_WIDTH}px)` }
                            : {}, children: [renderWelcomeScreen && _jsx(tunnels.WelcomeScreenCenterTunnel.Out, {}), renderFixedSideContainer(), _jsx(Footer, { appState: appState, actionManager: actionManager, showExitZenModeBtn: showExitZenModeBtn, renderWelcomeScreen: renderWelcomeScreen }), appState.showStats && (_jsx(Stats, { appState: appState, setAppState: setAppState, elements: elements, onClose: () => {
                                    actionManager.executeAction(actionToggleStats);
                                }, renderCustomStats: renderCustomStats })), appState.scrolledOutside && (_jsx("button", { className: "scroll-back-to-content", onClick: () => {
                                    setAppState((appState) => ({
                                        ...calculateScrollCenter(elements, appState),
                                    }));
                                }, children: t("buttons.scrollBackToContent") }))] }), renderSidebars()] }))] }));
    return (_jsx(UIAppStateContext.Provider, { value: appState, children: _jsx(Provider, { scope: tunnels.jotaiScope, children: _jsx(TunnelsContext.Provider, { value: tunnels, children: layerUIJSX }) }) }));
};
const stripIrrelevantAppStateProps = (appState) => {
    const { suggestedBindings, startBoundElement, cursorButton, scrollX, scrollY, ...ret } = appState;
    return ret;
};
const areEqual = (prevProps, nextProps) => {
    // short-circuit early
    if (prevProps.children !== nextProps.children) {
        return false;
    }
    const { canvas: _pC, appState: prevAppState, ...prev } = prevProps;
    const { canvas: _nC, appState: nextAppState, ...next } = nextProps;
    return (isShallowEqual(
    // asserting AppState because we're being passed the whole AppState
    // but resolve to only the UI-relevant props
    stripIrrelevantAppStateProps(prevAppState), stripIrrelevantAppStateProps(nextAppState), {
        selectedElementIds: isShallowEqual,
        selectedGroupIds: isShallowEqual,
    }) && isShallowEqual(prev, next));
};
export default React.memo(LayerUI, areEqual);
