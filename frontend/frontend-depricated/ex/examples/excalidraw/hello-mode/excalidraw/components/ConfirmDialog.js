import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { t } from "../i18n";
import { Dialog } from "./Dialog";
import "./ConfirmDialog.scss";
import DialogActionButton from "./DialogActionButton";
import { useSetAtom } from "jotai";
import { isLibraryMenuOpenAtom } from "./LibraryMenu";
import { useExcalidrawContainer, useExcalidrawSetAppState } from "./App";
import { jotaiScope } from "../jotai";
const ConfirmDialog = (props) => {
    const { onConfirm, onCancel, children, confirmText = t("buttons.confirm"), cancelText = t("buttons.cancel"), className = "", ...rest } = props;
    const setAppState = useExcalidrawSetAppState();
    const setIsLibraryMenuOpen = useSetAtom(isLibraryMenuOpenAtom, jotaiScope);
    const { container } = useExcalidrawContainer();
    return (_jsxs(Dialog, { onCloseRequest: onCancel, size: "small", ...rest, className: `confirm-dialog ${className}`, children: [children, _jsxs("div", { className: "confirm-dialog-buttons", children: [_jsx(DialogActionButton, { label: cancelText, onClick: () => {
                            setAppState({ openMenu: null });
                            setIsLibraryMenuOpen(false);
                            onCancel();
                            container?.focus();
                        } }), _jsx(DialogActionButton, { label: confirmText, onClick: () => {
                            setAppState({ openMenu: null });
                            setIsLibraryMenuOpen(false);
                            onConfirm();
                            container?.focus();
                        }, actionType: "danger" })] })] }));
};
export default ConfirmDialog;
