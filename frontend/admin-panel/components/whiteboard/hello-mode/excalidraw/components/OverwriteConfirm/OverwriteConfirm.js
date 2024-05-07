import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAtom } from "jotai";
import { useTunnels } from "../../context/tunnels";
import { jotaiScope } from "../../jotai";
import { Dialog } from "../Dialog";
import { withInternalFallback } from "../hoc/withInternalFallback";
import { overwriteConfirmStateAtom } from "./OverwriteConfirmState";
import { FilledButton } from "../FilledButton";
import { alertTriangleIcon } from "../icons";
import { Actions, Action } from "./OverwriteConfirmActions";
import "./OverwriteConfirm.scss";
const OverwriteConfirmDialog = Object.assign(withInternalFallback("OverwriteConfirmDialog", ({ children }) => {
    const { OverwriteConfirmDialogTunnel } = useTunnels();
    const [overwriteConfirmState, setState] = useAtom(overwriteConfirmStateAtom, jotaiScope);
    if (!overwriteConfirmState.active) {
        return null;
    }
    const handleClose = () => {
        overwriteConfirmState.onClose();
        setState((state) => ({ ...state, active: false }));
    };
    const handleConfirm = () => {
        overwriteConfirmState.onConfirm();
        setState((state) => ({ ...state, active: false }));
    };
    return (_jsx(OverwriteConfirmDialogTunnel.In, { children: _jsx(Dialog, { onCloseRequest: handleClose, title: false, size: 916, children: _jsxs("div", { className: "OverwriteConfirm", children: [_jsx("h3", { children: overwriteConfirmState.title }), _jsxs("div", { className: `OverwriteConfirm__Description OverwriteConfirm__Description--color-${overwriteConfirmState.color}`, children: [_jsx("div", { className: "OverwriteConfirm__Description__icon", children: alertTriangleIcon }), _jsx("div", { children: overwriteConfirmState.description }), _jsx("div", { className: "OverwriteConfirm__Description__spacer" }), _jsx(FilledButton, { color: overwriteConfirmState.color, size: "large", label: overwriteConfirmState.actionLabel, onClick: handleConfirm })] }), _jsx(Actions, { children: children })] }) }) }));
}), {
    Actions,
    Action,
});
export { OverwriteConfirmDialog };
