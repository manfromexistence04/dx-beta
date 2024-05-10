import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useCallbackRefState } from "../hooks/useCallbackRefState";
import { useExcalidrawContainer, useDevice, useExcalidrawSetAppState, } from "./App";
import { KEYS } from "../keys";
import "./Dialog.scss";
import { Island } from "./Island";
import { Modal } from "./Modal";
import { queryFocusableElements } from "../utils";
import { useSetAtom } from "jotai";
import { isLibraryMenuOpenAtom } from "./LibraryMenu";
import { jotaiScope } from "../jotai";
import { t } from "../i18n";
import { CloseIcon } from "./icons";
function getDialogSize(size) {
    if (size && typeof size === "number") {
        return size;
    }
    switch (size) {
        case "small":
            return 550;
        case "wide":
            return 1024;
        case "regular":
        default:
            return 800;
    }
}
export const Dialog = (props) => {
    const [islandNode, setIslandNode] = useCallbackRefState();
    const [lastActiveElement] = useState(document.activeElement);
    const { id } = useExcalidrawContainer();
    const isFullscreen = useDevice().viewport.isMobile;
    useEffect(() => {
        if (!islandNode) {
            return;
        }
        const focusableElements = queryFocusableElements(islandNode);
        setTimeout(() => {
            if (focusableElements.length > 0 && props.autofocus !== false) {
                // If there's an element other than close, focus it.
                (focusableElements[1] || focusableElements[0]).focus();
            }
        });
        const handleKeyDown = (event) => {
            if (event.key === KEYS.TAB) {
                const focusableElements = queryFocusableElements(islandNode);
                const { activeElement } = document;
                const currentIndex = focusableElements.findIndex((element) => element === activeElement);
                if (currentIndex === 0 && event.shiftKey) {
                    focusableElements[focusableElements.length - 1].focus();
                    event.preventDefault();
                }
                else if (currentIndex === focusableElements.length - 1 &&
                    !event.shiftKey) {
                    focusableElements[0].focus();
                    event.preventDefault();
                }
            }
        };
        islandNode.addEventListener("keydown", handleKeyDown);
        return () => islandNode.removeEventListener("keydown", handleKeyDown);
    }, [islandNode, props.autofocus]);
    const setAppState = useExcalidrawSetAppState();
    const setIsLibraryMenuOpen = useSetAtom(isLibraryMenuOpenAtom, jotaiScope);
    const onClose = () => {
        setAppState({ openMenu: null });
        setIsLibraryMenuOpen(false);
        lastActiveElement.focus();
        props.onCloseRequest();
    };
    return (_jsx(Modal, { className: clsx("Dialog", props.className, {
            "Dialog--fullscreen": isFullscreen,
        }), labelledBy: "dialog-title", maxWidth: getDialogSize(props.size), onCloseRequest: onClose, closeOnClickOutside: props.closeOnClickOutside, children: _jsxs(Island, { ref: setIslandNode, children: [props.title && (_jsx("h2", { id: `${id}-dialog-title`, className: "Dialog__title", children: _jsx("span", { className: "Dialog__titleContent", children: props.title }) })), isFullscreen && (_jsx("button", { className: "Dialog__close", onClick: onClose, title: t("buttons.close"), "aria-label": t("buttons.close"), children: CloseIcon })), _jsx("div", { className: "Dialog__content", children: props.children })] }) }));
};
