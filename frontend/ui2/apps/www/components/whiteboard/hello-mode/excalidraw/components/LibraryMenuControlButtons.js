import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LibraryMenuBrowseButton from "./LibraryMenuBrowseButton";
import clsx from "clsx";
export const LibraryMenuControlButtons = ({ libraryReturnUrl, theme, id, style, children, className, }) => {
    return (_jsxs("div", { className: clsx("library-menu-control-buttons", className), style: style, children: [_jsx(LibraryMenuBrowseButton, { id: id, libraryReturnUrl: libraryReturnUrl, theme: theme }), children] }));
};
