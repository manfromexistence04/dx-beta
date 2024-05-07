import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { t } from "../i18n";
import { useDevice } from "./App";
import { canChangeRoundness, canHaveArrowheads, getTargetElements, hasBackground, hasStrokeStyle, hasStrokeWidth, } from "../scene";
import { SHAPES } from "../shapes";
import { capitalizeString, isTransparent } from "../utils";
import Stack from "./Stack";
import { ToolButton } from "./ToolButton";
import { hasStrokeColor } from "../scene/comparisons";
import { trackEvent } from "../analytics";
import { hasBoundTextElement, isTextElement } from "../element/typeChecks";
import clsx from "clsx";
import { actionToggleZenMode } from "../actions";
import { Tooltip } from "./Tooltip";
import { shouldAllowVerticalAlign, suppportsHorizontalAlign, } from "../element/textElement";
import "./Actions.scss";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import { EmbedIcon, extraToolsIcon, frameToolIcon, mermaidLogoIcon, laserPointerToolIcon, OpenAIIcon, MagicIcon, } from "./icons";
import { KEYS } from "../keys";
import { useTunnels } from "../context/tunnels";
export const canChangeStrokeColor = (appState, targetElements) => {
    let commonSelectedType = targetElements[0]?.type || null;
    for (const element of targetElements) {
        if (element.type !== commonSelectedType) {
            commonSelectedType = null;
            break;
        }
    }
    return ((hasStrokeColor(appState.activeTool.type) &&
        appState.activeTool.type !== "image" &&
        commonSelectedType !== "image" &&
        commonSelectedType !== "frame" &&
        commonSelectedType !== "magicframe") ||
        targetElements.some((element) => hasStrokeColor(element.type)));
};
export const canChangeBackgroundColor = (appState, targetElements) => {
    return (hasBackground(appState.activeTool.type) ||
        targetElements.some((element) => hasBackground(element.type)));
};
export const SelectedShapeActions = ({ appState, elementsMap, renderAction, }) => {
    const targetElements = getTargetElements(elementsMap, appState);
    let isSingleElementBoundContainer = false;
    if (targetElements.length === 2 &&
        (hasBoundTextElement(targetElements[0]) ||
            hasBoundTextElement(targetElements[1]))) {
        isSingleElementBoundContainer = true;
    }
    const isEditing = Boolean(appState.editingElement);
    const device = useDevice();
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    const showFillIcons = (hasBackground(appState.activeTool.type) &&
        !isTransparent(appState.currentItemBackgroundColor)) ||
        targetElements.some((element) => hasBackground(element.type) && !isTransparent(element.backgroundColor));
    const showLinkIcon = targetElements.length === 1 || isSingleElementBoundContainer;
    return (_jsxs("div", { className: "panelColumn", children: [_jsx("div", { children: canChangeStrokeColor(appState, targetElements) &&
                    renderAction("changeStrokeColor") }), canChangeBackgroundColor(appState, targetElements) && (_jsx("div", { children: renderAction("changeBackgroundColor") })), showFillIcons && renderAction("changeFillStyle"), (hasStrokeWidth(appState.activeTool.type) ||
                targetElements.some((element) => hasStrokeWidth(element.type))) &&
                renderAction("changeStrokeWidth"), (appState.activeTool.type === "freedraw" ||
                targetElements.some((element) => element.type === "freedraw")) &&
                renderAction("changeStrokeShape"), (hasStrokeStyle(appState.activeTool.type) ||
                targetElements.some((element) => hasStrokeStyle(element.type))) && (_jsxs(_Fragment, { children: [renderAction("changeStrokeStyle"), renderAction("changeSloppiness")] })), (canChangeRoundness(appState.activeTool.type) ||
                targetElements.some((element) => canChangeRoundness(element.type))) && (_jsx(_Fragment, { children: renderAction("changeRoundness") })), (appState.activeTool.type === "text" ||
                targetElements.some(isTextElement)) && (_jsxs(_Fragment, { children: [renderAction("changeFontSize"), renderAction("changeFontFamily"), (appState.activeTool.type === "text" ||
                        suppportsHorizontalAlign(targetElements, elementsMap)) &&
                        renderAction("changeTextAlign")] })), shouldAllowVerticalAlign(targetElements, elementsMap) &&
                renderAction("changeVerticalAlign"), (canHaveArrowheads(appState.activeTool.type) ||
                targetElements.some((element) => canHaveArrowheads(element.type))) && (_jsx(_Fragment, { children: renderAction("changeArrowhead") })), renderAction("changeOpacity"), _jsxs("fieldset", { children: [_jsx("legend", { children: t("labels.layers") }), _jsxs("div", { className: "buttonList", children: [renderAction("sendToBack"), renderAction("sendBackward"), renderAction("bringToFront"), renderAction("bringForward")] })] }), targetElements.length > 1 && !isSingleElementBoundContainer && (_jsxs("fieldset", { children: [_jsx("legend", { children: t("labels.align") }), _jsxs("div", { className: "buttonList", children: [isRTL ? (_jsxs(_Fragment, { children: [renderAction("alignRight"), renderAction("alignHorizontallyCentered"), renderAction("alignLeft")] })) : (_jsxs(_Fragment, { children: [renderAction("alignLeft"), renderAction("alignHorizontallyCentered"), renderAction("alignRight")] })), targetElements.length > 2 &&
                                renderAction("distributeHorizontally"), _jsx("div", { style: { flexBasis: "100%", height: 0 } }), _jsxs("div", { style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: ".5rem",
                                    marginTop: "-0.5rem",
                                }, children: [renderAction("alignTop"), renderAction("alignVerticallyCentered"), renderAction("alignBottom"), targetElements.length > 2 &&
                                        renderAction("distributeVertically")] })] })] })), !isEditing && targetElements.length > 0 && (_jsxs("fieldset", { children: [_jsx("legend", { children: t("labels.actions") }), _jsxs("div", { className: "buttonList", children: [!device.editor.isMobile && renderAction("duplicateSelection"), !device.editor.isMobile && renderAction("deleteSelectedElements"), renderAction("group"), renderAction("ungroup"), showLinkIcon && renderAction("hyperlink")] })] }))] }));
};
export const ShapesSwitcher = ({ activeTool, appState, app, UIOptions, }) => {
    const [isExtraToolsMenuOpen, setIsExtraToolsMenuOpen] = useState(false);
    const frameToolSelected = activeTool.type === "frame";
    const laserToolSelected = activeTool.type === "laser";
    const embeddableToolSelected = activeTool.type === "embeddable";
    const { TTDDialogTriggerTunnel } = useTunnels();
    return (_jsxs(_Fragment, { children: [SHAPES.map(({ value, icon, key, numericKey, fillable }, index) => {
                if (UIOptions.tools?.[value] === false) {
                    return null;
                }
                const label = t(`toolBar.${value}`);
                const letter = key && capitalizeString(typeof key === "string" ? key : key[0]);
                const shortcut = letter
                    ? `${letter} ${t("helpDialog.or")} ${numericKey}`
                    : `${numericKey}`;
                return (_jsx(ToolButton, { className: clsx("Shape", { fillable }), type: "radio", icon: icon, checked: activeTool.type === value, name: "editor-current-shape", title: `${capitalizeString(label)} — ${shortcut}`, keyBindingLabel: numericKey || letter, "aria-label": capitalizeString(label), "aria-keyshortcuts": shortcut, "data-testid": `toolbar-${value}`, onPointerDown: ({ pointerType }) => {
                        if (!appState.penDetected && pointerType === "pen") {
                            app.togglePenMode(true);
                        }
                    }, onChange: ({ pointerType }) => {
                        if (appState.activeTool.type !== value) {
                            trackEvent("toolbar", value, "ui");
                        }
                        if (value === "image") {
                            app.setActiveTool({
                                type: value,
                                insertOnCanvasDirectly: pointerType !== "mouse",
                            });
                        }
                        else {
                            app.setActiveTool({ type: value });
                        }
                    } }, value));
            }), _jsx("div", { className: "App-toolbar__divider" }), _jsxs(DropdownMenu, { open: isExtraToolsMenuOpen, children: [_jsxs(DropdownMenu.Trigger, { className: clsx("App-toolbar__extra-tools-trigger", {
                            "App-toolbar__extra-tools-trigger--selected": frameToolSelected ||
                                embeddableToolSelected ||
                                // in collab we're already highlighting the laser button
                                // outside toolbar, so let's not highlight extra-tools button
                                // on top of it
                                (laserToolSelected && !app.props.isCollaborating),
                        }), onToggle: () => setIsExtraToolsMenuOpen(!isExtraToolsMenuOpen), title: t("toolBar.extraTools"), children: [extraToolsIcon, app.props.aiEnabled !== false && (_jsx("div", { style: {
                                    display: "inline-flex",
                                    marginLeft: "auto",
                                    padding: "2px 4px",
                                    borderRadius: 6,
                                    fontSize: 8,
                                    fontFamily: "Cascadia, monospace",
                                    position: "absolute",
                                    background: "pink",
                                    color: "black",
                                    bottom: 3,
                                    right: 4,
                                }, children: "AI" }))] }), _jsxs(DropdownMenu.Content, { onClickOutside: () => setIsExtraToolsMenuOpen(false), onSelect: () => setIsExtraToolsMenuOpen(false), className: "App-toolbar__extra-tools-dropdown", children: [_jsx(DropdownMenu.Item, { onSelect: () => app.setActiveTool({ type: "frame" }), icon: frameToolIcon, shortcut: KEYS.F.toLocaleUpperCase(), "data-testid": "toolbar-frame", selected: frameToolSelected, children: t("toolBar.frame") }), _jsx(DropdownMenu.Item, { onSelect: () => app.setActiveTool({ type: "embeddable" }), icon: EmbedIcon, "data-testid": "toolbar-embeddable", selected: embeddableToolSelected, children: t("toolBar.embeddable") }), _jsx(DropdownMenu.Item, { onSelect: () => app.setActiveTool({ type: "laser" }), icon: laserPointerToolIcon, "data-testid": "toolbar-laser", selected: laserToolSelected, shortcut: KEYS.K.toLocaleUpperCase(), children: t("toolBar.laser") }), _jsx("div", { style: { margin: "6px 0", fontSize: 14, fontWeight: 600 }, children: "Generate" }), app.props.aiEnabled !== false && _jsx(TTDDialogTriggerTunnel.Out, {}), _jsx(DropdownMenu.Item, { onSelect: () => app.setOpenDialog({ name: "ttd", tab: "mermaid" }), icon: mermaidLogoIcon, "data-testid": "toolbar-embeddable", children: t("toolBar.mermaidToExcalidraw") }), app.props.aiEnabled !== false && (_jsxs(_Fragment, { children: [_jsxs(DropdownMenu.Item, { onSelect: () => app.onMagicframeToolSelect(), icon: MagicIcon, "data-testid": "toolbar-magicframe", children: [t("toolBar.magicframe"), _jsx(DropdownMenu.Item.Badge, { children: "AI" })] }), _jsx(DropdownMenu.Item, { onSelect: () => {
                                            trackEvent("ai", "open-settings", "d2c");
                                            app.setOpenDialog({
                                                name: "settings",
                                                source: "settings",
                                                tab: "diagram-to-code",
                                            });
                                        }, icon: OpenAIIcon, "data-testid": "toolbar-magicSettings", children: t("toolBar.magicSettings") })] }))] })] })] }));
};
export const ZoomActions = ({ renderAction, zoom, }) => (_jsx(Stack.Col, { gap: 1, className: "zoom-actions", children: _jsxs(Stack.Row, { align: "center", children: [renderAction("zoomOut"), renderAction("resetZoom"), renderAction("zoomIn")] }) }));
export const UndoRedoActions = ({ renderAction, className, }) => (_jsxs("div", { className: `undo-redo-buttons ${className}`, children: [_jsx("div", { className: "undo-button-container", children: _jsx(Tooltip, { label: t("buttons.undo"), children: renderAction("undo") }) }), _jsx("div", { className: "redo-button-container", children: _jsxs(Tooltip, { label: t("buttons.redo"), children: [" ", renderAction("redo")] }) })] }));
export const ExitZenModeAction = ({ actionManager, showExitZenModeBtn, }) => (_jsx("button", { className: clsx("disable-zen-mode", {
        "disable-zen-mode--visible": showExitZenModeBtn,
    }), onClick: () => actionManager.executeAction(actionToggleZenMode), children: t("buttons.exitZenMode") }));
export const FinalizeAction = ({ renderAction, className, }) => (_jsx("div", { className: `finalize-button ${className}`, children: renderAction("finalize", { size: "small" }) }));
