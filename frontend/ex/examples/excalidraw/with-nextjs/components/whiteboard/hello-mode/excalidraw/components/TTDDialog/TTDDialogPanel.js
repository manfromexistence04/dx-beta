import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../Button";
import clsx from "clsx";
import Spinner from "../Spinner";
export const TTDDialogPanel = ({ label, children, panelAction, panelActionDisabled = false, onTextSubmitInProgess, renderTopRight, renderSubmitShortcut, renderBottomRight, }) => {
    return (_jsxs("div", { className: "ttd-dialog-panel", children: [_jsxs("div", { className: "ttd-dialog-panel__header", children: [_jsx("label", { children: label }), renderTopRight?.()] }), children, _jsxs("div", { className: clsx("ttd-dialog-panel-button-container", {
                    invisible: !panelAction,
                }), style: { display: "flex", alignItems: "center" }, children: [_jsxs(Button, { className: "ttd-dialog-panel-button", onSelect: panelAction ? panelAction.action : () => { }, disabled: panelActionDisabled || onTextSubmitInProgess, children: [_jsxs("div", { className: clsx({ invisible: onTextSubmitInProgess }), children: [panelAction?.label, panelAction?.icon && _jsx("span", { children: panelAction.icon })] }), onTextSubmitInProgess && _jsx(Spinner, {})] }), !panelActionDisabled &&
                        !onTextSubmitInProgess &&
                        renderSubmitShortcut?.(), renderBottomRight?.()] })] }));
};
