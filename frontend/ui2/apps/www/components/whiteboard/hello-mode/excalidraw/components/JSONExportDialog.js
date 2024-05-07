import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { t } from "../i18n";
import { Dialog } from "./Dialog";
import { exportToFileIcon, LinkIcon } from "./icons";
import { ToolButton } from "./ToolButton";
import { actionSaveFileToDisk } from "../actions/actionExport";
import { Card } from "./Card";
import "./ExportDialog.scss";
import { nativeFileSystemSupported } from "../data/filesystem";
import { trackEvent } from "../analytics";
import { getFrame } from "../utils";
const JSONExportModal = ({ elements, appState, setAppState, files, actionManager, exportOpts, canvas, onCloseRequest, }) => {
    const { onExportToBackend } = exportOpts;
    return (_jsx("div", { className: "ExportDialog ExportDialog--json", children: _jsxs("div", { className: "ExportDialog-cards", children: [exportOpts.saveFileToDisk && (_jsxs(Card, { color: "lime", children: [_jsx("div", { className: "Card-icon", children: exportToFileIcon }), _jsx("h2", { children: t("exportDialog.disk_title") }), _jsxs("div", { className: "Card-details", children: [t("exportDialog.disk_details"), !nativeFileSystemSupported &&
                                    actionManager.renderAction("changeProjectName")] }), _jsx(ToolButton, { className: "Card-button", type: "button", title: t("exportDialog.disk_button"), "aria-label": t("exportDialog.disk_button"), showAriaLabel: true, onClick: () => {
                                actionManager.executeAction(actionSaveFileToDisk, "ui");
                            } })] })), onExportToBackend && (_jsxs(Card, { color: "pink", children: [_jsx("div", { className: "Card-icon", children: LinkIcon }), _jsx("h2", { children: t("exportDialog.link_title") }), _jsx("div", { className: "Card-details", children: t("exportDialog.link_details") }), _jsx(ToolButton, { className: "Card-button", type: "button", title: t("exportDialog.link_button"), "aria-label": t("exportDialog.link_button"), showAriaLabel: true, onClick: async () => {
                                try {
                                    trackEvent("export", "link", `ui (${getFrame()})`);
                                    await onExportToBackend(elements, appState, files);
                                    onCloseRequest();
                                }
                                catch (error) {
                                    setAppState({ errorMessage: error.message });
                                }
                            } })] })), exportOpts.renderCustomUI &&
                    exportOpts.renderCustomUI(elements, appState, files, canvas)] }) }));
};
export const JSONExportDialog = ({ elements, appState, files, actionManager, exportOpts, canvas, setAppState, }) => {
    const handleClose = React.useCallback(() => {
        setAppState({ openDialog: null });
    }, [setAppState]);
    return (_jsx(_Fragment, { children: appState.openDialog?.name === "jsonExport" && (_jsx(Dialog, { onCloseRequest: handleClose, title: t("buttons.export"), children: _jsx(JSONExportModal, { elements: elements, appState: appState, setAppState: setAppState, files: files, actionManager: actionManager, onCloseRequest: handleClose, exportOpts: exportOpts, canvas: canvas }) })) }));
};
