import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { Popover } from "./Popover";
import { t } from "../i18n";
import "./ContextMenu.scss";
import { getShortcutFromShortcutName, } from "../actions/shortcuts";
import { useExcalidrawAppState, useExcalidrawElements } from "./App";
import React from "react";
export const CONTEXT_MENU_SEPARATOR = "separator";
export const ContextMenu = React.memo(({ actionManager, items, top, left, onClose }) => {
    const appState = useExcalidrawAppState();
    const elements = useExcalidrawElements();
    const filteredItems = items.reduce((acc, item) => {
        if (item &&
            (item === CONTEXT_MENU_SEPARATOR ||
                !item.predicate ||
                item.predicate(elements, appState, actionManager.app.props, actionManager.app))) {
            acc.push(item);
        }
        return acc;
    }, []);
    return (_jsx(Popover, { onCloseRequest: () => {
            onClose();
        }, top: top, left: left, fitInViewport: true, offsetLeft: appState.offsetLeft, offsetTop: appState.offsetTop, viewportWidth: appState.width, viewportHeight: appState.height, children: _jsx("ul", { className: "context-menu", onContextMenu: (event) => event.preventDefault(), children: filteredItems.map((item, idx) => {
                if (item === CONTEXT_MENU_SEPARATOR) {
                    if (!filteredItems[idx - 1] ||
                        filteredItems[idx - 1] === CONTEXT_MENU_SEPARATOR) {
                        return null;
                    }
                    return _jsx("hr", { className: "context-menu-item-separator" }, idx);
                }
                const actionName = item.name;
                let label = "";
                if (item.label) {
                    if (typeof item.label === "function") {
                        label = t(item.label(elements, appState, actionManager.app));
                    }
                    else {
                        label = t(item.label);
                    }
                }
                return (_jsx("li", { "data-testid": actionName, onClick: () => {
                        // we need update state before executing the action in case
                        // the action uses the appState it's being passed (that still
                        // contains a defined contextMenu) to return the next state.
                        onClose(() => {
                            actionManager.executeAction(item, "contextMenu");
                        });
                    }, children: _jsxs("button", { className: clsx("context-menu-item", {
                            dangerous: actionName === "deleteSelectedElements",
                            checkmark: item.checked?.(appState),
                        }), children: [_jsx("div", { className: "context-menu-item__label", children: label }), _jsx("kbd", { className: "context-menu-item__shortcut", children: actionName
                                    ? getShortcutFromShortcutName(actionName)
                                    : "" })] }) }, idx));
            }) }) }));
});
