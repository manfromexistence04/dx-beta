import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { t } from "../i18n";
import { Dialog } from "./Dialog";
import { useExcalidrawContainer } from "./App";
export const ErrorDialog = ({ children, onClose, }) => {
    const [modalIsShown, setModalIsShown] = useState(!!children);
    const { container: excalidrawContainer } = useExcalidrawContainer();
    const handleClose = React.useCallback(() => {
        setModalIsShown(false);
        if (onClose) {
            onClose();
        }
        // TODO: Fix the A11y issues so this is never needed since we should always focus on last active element
        excalidrawContainer?.focus();
    }, [onClose, excalidrawContainer]);
    return (_jsx(_Fragment, { children: modalIsShown && (_jsx(Dialog, { size: "small", onCloseRequest: handleClose, title: t("errorDialog.title"), children: _jsx("div", { style: { whiteSpace: "pre-wrap" }, children: children }) })) }));
};
