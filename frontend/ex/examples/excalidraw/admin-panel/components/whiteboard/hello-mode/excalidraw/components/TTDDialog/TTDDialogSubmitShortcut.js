import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getShortcutKey } from "../../utils";
export const TTDDialogSubmitShortcut = () => {
    return (_jsxs("div", { className: "ttd-dialog-submit-shortcut", children: [_jsx("div", { className: "ttd-dialog-submit-shortcut__key", children: getShortcutKey("CtrlOrCmd") }), _jsx("div", { className: "ttd-dialog-submit-shortcut__key", children: getShortcutKey("Enter") })] }));
};
