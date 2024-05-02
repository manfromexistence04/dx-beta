import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { actionExportWithDarkMode, actionChangeExportBackground, actionChangeExportEmbedScene, actionChangeExportScale, actionChangeProjectName, } from "../actions/actionExport";
import { probablySupportsClipboardBlob } from "../clipboard";
import { DEFAULT_EXPORT_PADDING, EXPORT_IMAGE_TYPES, isFirefox, EXPORT_SCALES, } from "../constants";
import { canvasToBlob } from "../data/blob";
import { nativeFileSystemSupported } from "../data/filesystem";
import { t } from "../i18n";
import { isSomeElementSelected } from "../scene";
import { exportToCanvas } from "../../utils/export";
import { copyIcon, downloadIcon, helpIcon } from "./icons";
import { Dialog } from "./Dialog";
import { RadioGroup } from "./RadioGroup";
import { Switch } from "./Switch";
import { Tooltip } from "./Tooltip";
import "./ImageExportDialog.scss";
import { FilledButton } from "./FilledButton";
import { cloneJSON } from "../utils";
import { prepareElementsForExport } from "../data";
const supportsContextFilters = "filter" in document.createElement("canvas").getContext("2d");
export const ErrorCanvasPreview = () => {
    return (_jsxs("div", { children: [_jsx("h3", { children: t("canvasError.cannotShowPreview") }), _jsx("p", { children: _jsx("span", { children: t("canvasError.canvasTooBig") }) }), _jsxs("em", { children: ["(", t("canvasError.canvasTooBigTip"), ")"] })] }));
};
const ImageExportModal = ({ appStateSnapshot, elementsSnapshot, files, actionManager, onExportImage, name, }) => {
    const hasSelection = isSomeElementSelected(elementsSnapshot, appStateSnapshot);
    const [projectName, setProjectName] = useState(name);
    const [exportSelectionOnly, setExportSelectionOnly] = useState(hasSelection);
    const [exportWithBackground, setExportWithBackground] = useState(appStateSnapshot.exportBackground);
    const [exportDarkMode, setExportDarkMode] = useState(appStateSnapshot.exportWithDarkMode);
    const [embedScene, setEmbedScene] = useState(appStateSnapshot.exportEmbedScene);
    const [exportScale, setExportScale] = useState(appStateSnapshot.exportScale);
    const previewRef = useRef(null);
    const [renderError, setRenderError] = useState(null);
    const { exportedElements, exportingFrame } = prepareElementsForExport(elementsSnapshot, appStateSnapshot, exportSelectionOnly);
    useEffect(() => {
        const previewNode = previewRef.current;
        if (!previewNode) {
            return;
        }
        const maxWidth = previewNode.offsetWidth;
        const maxHeight = previewNode.offsetHeight;
        if (!maxWidth) {
            return;
        }
        exportToCanvas({
            elements: exportedElements,
            appState: {
                ...appStateSnapshot,
                name: projectName,
                exportBackground: exportWithBackground,
                exportWithDarkMode: exportDarkMode,
                exportScale,
                exportEmbedScene: embedScene,
            },
            files,
            exportPadding: DEFAULT_EXPORT_PADDING,
            maxWidthOrHeight: Math.max(maxWidth, maxHeight),
            exportingFrame,
        })
            .then((canvas) => {
            setRenderError(null);
            // if converting to blob fails, there's some problem that will
            // likely prevent preview and export (e.g. canvas too big)
            return canvasToBlob(canvas)
                .then(() => {
                previewNode.replaceChildren(canvas);
            })
                .catch((e) => {
                if (e.name === "CANVAS_POSSIBLY_TOO_BIG") {
                    throw new Error(t("canvasError.canvasTooBig"));
                }
                throw e;
            });
        })
            .catch((error) => {
            console.error(error);
            setRenderError(error);
        });
    }, [
        appStateSnapshot,
        files,
        exportedElements,
        exportingFrame,
        projectName,
        exportWithBackground,
        exportDarkMode,
        exportScale,
        embedScene,
    ]);
    return (_jsxs("div", { className: "ImageExportModal", children: [_jsx("h3", { children: t("imageExportDialog.header") }), _jsxs("div", { className: "ImageExportModal__preview", children: [_jsx("div", { className: "ImageExportModal__preview__canvas", ref: previewRef, children: renderError && _jsx(ErrorCanvasPreview, {}) }), _jsx("div", { className: "ImageExportModal__preview__filename", children: !nativeFileSystemSupported && (_jsx("input", { type: "text", className: "TextInput", value: projectName, style: { width: "30ch" }, onChange: (event) => {
                                setProjectName(event.target.value);
                                actionManager.executeAction(actionChangeProjectName, "ui", event.target.value);
                            } })) })] }), _jsxs("div", { className: "ImageExportModal__settings", children: [_jsx("h3", { children: t("imageExportDialog.header") }), hasSelection && (_jsx(ExportSetting, { label: t("imageExportDialog.label.onlySelected"), name: "exportOnlySelected", children: _jsx(Switch, { name: "exportOnlySelected", checked: exportSelectionOnly, onChange: (checked) => {
                                setExportSelectionOnly(checked);
                            } }) })), _jsx(ExportSetting, { label: t("imageExportDialog.label.withBackground"), name: "exportBackgroundSwitch", children: _jsx(Switch, { name: "exportBackgroundSwitch", checked: exportWithBackground, onChange: (checked) => {
                                setExportWithBackground(checked);
                                actionManager.executeAction(actionChangeExportBackground, "ui", checked);
                            } }) }), supportsContextFilters && (_jsx(ExportSetting, { label: t("imageExportDialog.label.darkMode"), name: "exportDarkModeSwitch", children: _jsx(Switch, { name: "exportDarkModeSwitch", checked: exportDarkMode, onChange: (checked) => {
                                setExportDarkMode(checked);
                                actionManager.executeAction(actionExportWithDarkMode, "ui", checked);
                            } }) })), _jsx(ExportSetting, { label: t("imageExportDialog.label.embedScene"), tooltip: t("imageExportDialog.tooltip.embedScene"), name: "exportEmbedSwitch", children: _jsx(Switch, { name: "exportEmbedSwitch", checked: embedScene, onChange: (checked) => {
                                setEmbedScene(checked);
                                actionManager.executeAction(actionChangeExportEmbedScene, "ui", checked);
                            } }) }), _jsx(ExportSetting, { label: t("imageExportDialog.label.scale"), name: "exportScale", children: _jsx(RadioGroup, { name: "exportScale", value: exportScale, onChange: (scale) => {
                                setExportScale(scale);
                                actionManager.executeAction(actionChangeExportScale, "ui", scale);
                            }, choices: EXPORT_SCALES.map((scale) => ({
                                value: scale,
                                label: `${scale}\u00d7`,
                            })) }) }), _jsxs("div", { className: "ImageExportModal__settings__buttons", children: [_jsx(FilledButton, { className: "ImageExportModal__settings__buttons__button", label: t("imageExportDialog.title.exportToPng"), onClick: () => onExportImage(EXPORT_IMAGE_TYPES.png, exportedElements, {
                                    exportingFrame,
                                }), icon: downloadIcon, children: t("imageExportDialog.button.exportToPng") }), _jsx(FilledButton, { className: "ImageExportModal__settings__buttons__button", label: t("imageExportDialog.title.exportToSvg"), onClick: () => onExportImage(EXPORT_IMAGE_TYPES.svg, exportedElements, {
                                    exportingFrame,
                                }), icon: downloadIcon, children: t("imageExportDialog.button.exportToSvg") }), (probablySupportsClipboardBlob || isFirefox) && (_jsx(FilledButton, { className: "ImageExportModal__settings__buttons__button", label: t("imageExportDialog.title.copyPngToClipboard"), onClick: () => onExportImage(EXPORT_IMAGE_TYPES.clipboard, exportedElements, {
                                    exportingFrame,
                                }), icon: copyIcon, children: t("imageExportDialog.button.copyPngToClipboard") }))] })] })] }));
};
const ExportSetting = ({ label, children, tooltip, name, }) => {
    return (_jsxs("div", { className: "ImageExportModal__settings__setting", title: label, children: [_jsxs("label", { htmlFor: name, className: "ImageExportModal__settings__setting__label", children: [label, tooltip && (_jsx(Tooltip, { label: tooltip, long: true, children: helpIcon }))] }), _jsx("div", { className: "ImageExportModal__settings__setting__content", children: children })] }));
};
export const ImageExportDialog = ({ elements, appState, files, actionManager, onExportImage, onCloseRequest, name, }) => {
    // we need to take a snapshot so that the exported state can't be modified
    // while the dialog is open
    const [{ appStateSnapshot, elementsSnapshot }] = useState(() => {
        return {
            appStateSnapshot: cloneJSON(appState),
            elementsSnapshot: cloneJSON(elements),
        };
    });
    return (_jsx(Dialog, { onCloseRequest: onCloseRequest, size: "wide", title: false, children: _jsx(ImageExportModal, { elementsSnapshot: elementsSnapshot, appStateSnapshot: appStateSnapshot, files: files, actionManager: actionManager, onExportImage: onExportImage, name: name }) }));
};
