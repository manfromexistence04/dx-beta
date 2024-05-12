import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { composeEventHandlers } from "../utils";
import "./Button.scss";
/**
 * A generic button component that follows Excalidraw's design system.
 * Style can be customised using `className` or `style` prop.
 * Accepts all props that a regular `button` element accepts.
 */
export const Button = ({ type = "button", onSelect, selected, children, className = "", ...rest }) => {
    return (_jsx("button", { onClick: composeEventHandlers(rest.onClick, (event) => {
            onSelect();
        }), type: type, className: clsx("excalidraw-button", className, { selected }), ...rest, children: children }));
};
