import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import "./DialogActionButton.scss";
import Spinner from "./Spinner";
const DialogActionButton = ({ label, onClick, className, children, actionType, type = "button", isLoading, ...rest }) => {
    const cs = actionType ? `Dialog__action-button--${actionType}` : "";
    return (_jsxs("button", { className: clsx("Dialog__action-button", cs, className), type: type, "aria-label": label, onClick: onClick, ...rest, children: [children && (_jsx("div", { style: isLoading ? { visibility: "hidden" } : {}, children: children })), _jsx("div", { style: isLoading ? { visibility: "hidden" } : {}, children: label }), isLoading && (_jsx("div", { style: { position: "absolute", inset: 0 }, children: _jsx(Spinner, {}) }))] }));
};
export default DialogActionButton;
