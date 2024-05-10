import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { atom, useAtom } from "jotai";
import { actionClearCanvas } from "../actions";
import { t } from "../i18n";
import { jotaiScope } from "../jotai";
import { useExcalidrawActionManager } from "./App";
import ConfirmDialog from "./ConfirmDialog";
export const activeConfirmDialogAtom = atom(null);
export const ActiveConfirmDialog = () => {
    const [activeConfirmDialog, setActiveConfirmDialog] = useAtom(activeConfirmDialogAtom, jotaiScope);
    const actionManager = useExcalidrawActionManager();
    if (!activeConfirmDialog) {
        return null;
    }
    if (activeConfirmDialog === "clearCanvas") {
        return (_jsx(ConfirmDialog, { onConfirm: () => {
                actionManager.executeAction(actionClearCanvas);
                setActiveConfirmDialog(null);
            }, onCancel: () => setActiveConfirmDialog(null), title: t("clearCanvasDialog.title"), children: _jsxs("p", { className: "clear-canvas__content", children: [" ", t("alerts.clearReset")] }) }));
    }
    return null;
};
