import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FilledButton } from "../FilledButton";
import { useExcalidrawActionManager, useExcalidrawSetAppState } from "../App";
import { actionSaveFileToDisk } from "../../actions";
import { useI18n } from "../../i18n";
import { actionChangeExportEmbedScene } from "../../actions/actionExport";
export const Action = ({ title, children, actionLabel, onClick, }) => {
    return (_jsxs("div", { className: "OverwriteConfirm__Actions__Action", children: [_jsx("h4", { children: title }), _jsx("div", { className: "OverwriteConfirm__Actions__Action__content", children: children }), _jsx(FilledButton, { variant: "outlined", color: "muted", label: actionLabel, size: "large", fullWidth: true, onClick: onClick })] }));
};
export const ExportToImage = () => {
    const { t } = useI18n();
    const actionManager = useExcalidrawActionManager();
    const setAppState = useExcalidrawSetAppState();
    return (_jsx(Action, { title: t("overwriteConfirm.action.exportToImage.title"), actionLabel: t("overwriteConfirm.action.exportToImage.button"), onClick: () => {
            actionManager.executeAction(actionChangeExportEmbedScene, "ui", true);
            setAppState({ openDialog: { name: "imageExport" } });
        }, children: t("overwriteConfirm.action.exportToImage.description") }));
};
export const SaveToDisk = () => {
    const { t } = useI18n();
    const actionManager = useExcalidrawActionManager();
    return (_jsx(Action, { title: t("overwriteConfirm.action.saveToDisk.title"), actionLabel: t("overwriteConfirm.action.saveToDisk.button"), onClick: () => {
            actionManager.executeAction(actionSaveFileToDisk, "ui");
        }, children: t("overwriteConfirm.action.saveToDisk.description") }));
};
const Actions = Object.assign(({ children }) => {
    return _jsx("div", { className: "OverwriteConfirm__Actions", children: children });
}, {
    ExportToImage,
    SaveToDisk,
});
export { Actions };
