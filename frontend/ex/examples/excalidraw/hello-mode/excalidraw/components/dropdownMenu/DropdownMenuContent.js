import { jsx as _jsx } from "react/jsx-runtime";
import { Island } from "../Island";
import { useDevice } from "../App";
import clsx from "clsx";
import Stack from "../Stack";
import { useEffect, useRef } from "react";
import { DropdownMenuContentPropsContext } from "./common";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { KEYS } from "../../keys";
import { EVENT } from "../../constants";
import { useStable } from "../../hooks/useStable";
const MenuContent = ({ children, onClickOutside, className = "", onSelect, style, }) => {
    const device = useDevice();
    const menuRef = useRef(null);
    const callbacksRef = useStable({ onClickOutside });
    useOutsideClick(menuRef, () => {
        callbacksRef.onClickOutside?.();
    });
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === KEYS.ESCAPE) {
                event.stopImmediatePropagation();
                callbacksRef.onClickOutside?.();
            }
        };
        const option = {
            // so that we can stop propagation of the event before it reaches
            // event handlers that were bound before this one
            capture: true,
        };
        document.addEventListener(EVENT.KEYDOWN, onKeyDown, option);
        return () => {
            document.removeEventListener(EVENT.KEYDOWN, onKeyDown, option);
        };
    }, [callbacksRef]);
    const classNames = clsx(`dropdown-menu ${className}`, {
        "dropdown-menu--mobile": device.editor.isMobile,
    }).trim();
    return (_jsx(DropdownMenuContentPropsContext.Provider, { value: { onSelect }, children: _jsx("div", { ref: menuRef, className: classNames, style: style, "data-testid": "dropdown-menu", children: device.editor.isMobile ? (_jsx(Stack.Col, { className: "dropdown-menu-container", children: children })) : (_jsx(Island, { className: "dropdown-menu-container", padding: 2, style: { zIndex: 2 }, children: children })) }) }));
};
MenuContent.displayName = "DropdownMenuContent";
export default MenuContent;
