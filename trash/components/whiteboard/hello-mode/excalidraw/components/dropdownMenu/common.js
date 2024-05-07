import React, { useContext } from "react";
import { EVENT } from "../../constants";
import { composeEventHandlers } from "../../utils";
export const DropdownMenuContentPropsContext = React.createContext({});
export const getDropdownMenuItemClassName = (className = "", selected = false) => {
    return `dropdown-menu-item dropdown-menu-item-base ${className} ${selected ? "dropdown-menu-item--selected" : ""}`.trim();
};
export const useHandleDropdownMenuItemClick = (origOnClick, onSelect) => {
    const DropdownMenuContentProps = useContext(DropdownMenuContentPropsContext);
    return composeEventHandlers(origOnClick, (event) => {
        const itemSelectEvent = new CustomEvent(EVENT.MENU_ITEM_SELECT, {
            bubbles: true,
            cancelable: true,
        });
        onSelect?.(itemSelectEvent);
        if (!itemSelectEvent.defaultPrevented) {
            DropdownMenuContentProps.onSelect?.(itemSelectEvent);
        }
    });
};
