import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { t } from "../i18n";
import { KEYS } from "../keys";
import { Dialog } from "./Dialog";
import { getShortcutKey } from "../utils";
import "./HelpDialog.scss";
import { ExternalLinkIcon, GithubIcon, youtubeIcon } from "./icons";
import { probablySupportsClipboardBlob } from "../clipboard";
import { isDarwin, isFirefox, isWindows } from "../constants";
import { getShortcutFromShortcutName } from "../actions/shortcuts";
const Header = () => (_jsxs("div", { className: "HelpDialog__header", children: [_jsxs("a", { className: "HelpDialog__btn", href: "https://docs.excalidraw.com", target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { className: "HelpDialog__link-icon", children: ExternalLinkIcon }), t("helpDialog.documentation")] }), _jsxs("a", { className: "HelpDialog__btn", href: "https://blog.excalidraw.com", target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { className: "HelpDialog__link-icon", children: ExternalLinkIcon }), t("helpDialog.blog")] }), _jsxs("a", { className: "HelpDialog__btn", href: "https://github.com/excalidraw/excalidraw/issues", target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { className: "HelpDialog__link-icon", children: GithubIcon }), t("helpDialog.github")] }), _jsxs("a", { className: "HelpDialog__btn", href: "https://youtube.com/@excalidraw", target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { className: "HelpDialog__link-icon", children: youtubeIcon }), "YouTube"] })] }));
const Section = (props) => (_jsxs(_Fragment, { children: [_jsx("h3", { children: props.title }), _jsx("div", { className: "HelpDialog__islands-container", children: props.children })] }));
const ShortcutIsland = (props) => (_jsxs("div", { className: `HelpDialog__island ${props.className}`, children: [_jsx("h4", { className: "HelpDialog__island-title", children: props.caption }), _jsx("div", { className: "HelpDialog__island-content", children: props.children })] }));
function* intersperse(as, delim) {
    let first = true;
    for (const x of as) {
        if (!first) {
            yield delim;
        }
        first = false;
        yield x;
    }
}
const upperCaseSingleChars = (str) => {
    return str.replace(/\b[a-z]\b/, (c) => c.toUpperCase());
};
const Shortcut = ({ label, shortcuts, isOr = true, }) => {
    const splitShortcutKeys = shortcuts.map((shortcut) => {
        const keys = shortcut.endsWith("++")
            ? [...shortcut.slice(0, -2).split("+"), "+"]
            : shortcut.split("+");
        return keys.map((key) => (_jsx(ShortcutKey, { children: upperCaseSingleChars(key) }, key)));
    });
    return (_jsxs("div", { className: "HelpDialog__shortcut", children: [_jsx("div", { children: label }), _jsx("div", { className: "HelpDialog__key-container", children: [...intersperse(splitShortcutKeys, isOr ? t("helpDialog.or") : null)] })] }));
};
const ShortcutKey = (props) => (_jsx("kbd", { className: "HelpDialog__key", ...props }));
export const HelpDialog = ({ onClose }) => {
    const handleClose = React.useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    return (_jsx(_Fragment, { children: _jsxs(Dialog, { onCloseRequest: handleClose, title: t("helpDialog.title"), className: "HelpDialog", children: [_jsx(Header, {}), _jsxs(Section, { title: t("helpDialog.shortcuts"), children: [_jsxs(ShortcutIsland, { className: "HelpDialog__island--tools", caption: t("helpDialog.tools"), children: [_jsx(Shortcut, { label: t("toolBar.hand"), shortcuts: [KEYS.H] }), _jsx(Shortcut, { label: t("toolBar.selection"), shortcuts: [KEYS.V, KEYS["1"]] }), _jsx(Shortcut, { label: t("toolBar.rectangle"), shortcuts: [KEYS.R, KEYS["2"]] }), _jsx(Shortcut, { label: t("toolBar.diamond"), shortcuts: [KEYS.D, KEYS["3"]] }), _jsx(Shortcut, { label: t("toolBar.ellipse"), shortcuts: [KEYS.O, KEYS["4"]] }), _jsx(Shortcut, { label: t("toolBar.arrow"), shortcuts: [KEYS.A, KEYS["5"]] }), _jsx(Shortcut, { label: t("toolBar.line"), shortcuts: [KEYS.L, KEYS["6"]] }), _jsx(Shortcut, { label: t("toolBar.freedraw"), shortcuts: [KEYS.P, KEYS["7"]] }), _jsx(Shortcut, { label: t("toolBar.text"), shortcuts: [KEYS.T, KEYS["8"]] }), _jsx(Shortcut, { label: t("toolBar.image"), shortcuts: [KEYS["9"]] }), _jsx(Shortcut, { label: t("toolBar.eraser"), shortcuts: [KEYS.E, KEYS["0"]] }), _jsx(Shortcut, { label: t("toolBar.frame"), shortcuts: [KEYS.F] }), _jsx(Shortcut, { label: t("toolBar.laser"), shortcuts: [KEYS.K] }), _jsx(Shortcut, { label: t("labels.eyeDropper"), shortcuts: [KEYS.I, "Shift+S", "Shift+G"] }), _jsx(Shortcut, { label: t("helpDialog.editLineArrowPoints"), shortcuts: [getShortcutKey("CtrlOrCmd+Enter")] }), _jsx(Shortcut, { label: t("helpDialog.editText"), shortcuts: [getShortcutKey("Enter")] }), _jsx(Shortcut, { label: t("helpDialog.textNewLine"), shortcuts: [
                                        getShortcutKey("Enter"),
                                        getShortcutKey("Shift+Enter"),
                                    ] }), _jsx(Shortcut, { label: t("helpDialog.textFinish"), shortcuts: [
                                        getShortcutKey("Esc"),
                                        getShortcutKey("CtrlOrCmd+Enter"),
                                    ] }), _jsx(Shortcut, { label: t("helpDialog.curvedArrow"), shortcuts: [
                                        "A",
                                        t("helpDialog.click"),
                                        t("helpDialog.click"),
                                        t("helpDialog.click"),
                                    ], isOr: false }), _jsx(Shortcut, { label: t("helpDialog.curvedLine"), shortcuts: [
                                        "L",
                                        t("helpDialog.click"),
                                        t("helpDialog.click"),
                                        t("helpDialog.click"),
                                    ], isOr: false }), _jsx(Shortcut, { label: t("toolBar.lock"), shortcuts: [KEYS.Q] }), _jsx(Shortcut, { label: t("helpDialog.preventBinding"), shortcuts: [getShortcutKey("CtrlOrCmd")] }), _jsx(Shortcut, { label: t("toolBar.link"), shortcuts: [getShortcutKey("CtrlOrCmd+K")] })] }), _jsxs(ShortcutIsland, { className: "HelpDialog__island--view", caption: t("helpDialog.view"), children: [_jsx(Shortcut, { label: t("buttons.zoomIn"), shortcuts: [getShortcutKey("CtrlOrCmd++")] }), _jsx(Shortcut, { label: t("buttons.zoomOut"), shortcuts: [getShortcutKey("CtrlOrCmd+-")] }), _jsx(Shortcut, { label: t("buttons.resetZoom"), shortcuts: [getShortcutKey("CtrlOrCmd+0")] }), _jsx(Shortcut, { label: t("helpDialog.zoomToFit"), shortcuts: ["Shift+1"] }), _jsx(Shortcut, { label: t("helpDialog.zoomToSelection"), shortcuts: ["Shift+2"] }), _jsx(Shortcut, { label: t("helpDialog.movePageUpDown"), shortcuts: ["PgUp/PgDn"] }), _jsx(Shortcut, { label: t("helpDialog.movePageLeftRight"), shortcuts: ["Shift+PgUp/PgDn"] }), _jsx(Shortcut, { label: t("buttons.zenMode"), shortcuts: [getShortcutKey("Alt+Z")] }), _jsx(Shortcut, { label: t("buttons.objectsSnapMode"), shortcuts: [getShortcutKey("Alt+S")] }), _jsx(Shortcut, { label: t("labels.toggleGrid"), shortcuts: [getShortcutKey("CtrlOrCmd+'")] }), _jsx(Shortcut, { label: t("labels.viewMode"), shortcuts: [getShortcutKey("Alt+R")] }), _jsx(Shortcut, { label: t("labels.toggleTheme"), shortcuts: [getShortcutKey("Alt+Shift+D")] }), _jsx(Shortcut, { label: t("stats.title"), shortcuts: [getShortcutKey("Alt+/")] }), _jsx(Shortcut, { label: t("commandPalette.title"), shortcuts: isFirefox
                                        ? [getShortcutFromShortcutName("commandPalette")]
                                        : [
                                            getShortcutFromShortcutName("commandPalette"),
                                            getShortcutFromShortcutName("commandPalette", 1),
                                        ] })] }), _jsxs(ShortcutIsland, { className: "HelpDialog__island--editor", caption: t("helpDialog.editor"), children: [_jsx(Shortcut, { label: t("labels.moveCanvas"), shortcuts: [
                                        getShortcutKey(`Space+${t("helpDialog.drag")}`),
                                        getShortcutKey(`Wheel+${t("helpDialog.drag")}`),
                                    ], isOr: true }), _jsx(Shortcut, { label: t("buttons.clearReset"), shortcuts: [getShortcutKey("CtrlOrCmd+Delete")] }), _jsx(Shortcut, { label: t("labels.delete"), shortcuts: [getShortcutKey("Delete")] }), _jsx(Shortcut, { label: t("labels.cut"), shortcuts: [getShortcutKey("CtrlOrCmd+X")] }), _jsx(Shortcut, { label: t("labels.copy"), shortcuts: [getShortcutKey("CtrlOrCmd+C")] }), _jsx(Shortcut, { label: t("labels.paste"), shortcuts: [getShortcutKey("CtrlOrCmd+V")] }), _jsx(Shortcut, { label: t("labels.pasteAsPlaintext"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+V")] }), _jsx(Shortcut, { label: t("labels.selectAll"), shortcuts: [getShortcutKey("CtrlOrCmd+A")] }), _jsx(Shortcut, { label: t("labels.multiSelect"), shortcuts: [getShortcutKey(`Shift+${t("helpDialog.click")}`)] }), _jsx(Shortcut, { label: t("helpDialog.deepSelect"), shortcuts: [getShortcutKey(`CtrlOrCmd+${t("helpDialog.click")}`)] }), _jsx(Shortcut, { label: t("helpDialog.deepBoxSelect"), shortcuts: [getShortcutKey(`CtrlOrCmd+${t("helpDialog.drag")}`)] }), (probablySupportsClipboardBlob || isFirefox) && (_jsx(Shortcut, { label: t("labels.copyAsPng"), shortcuts: [getShortcutKey("Shift+Alt+C")] })), _jsx(Shortcut, { label: t("labels.copyStyles"), shortcuts: [getShortcutKey("CtrlOrCmd+Alt+C")] }), _jsx(Shortcut, { label: t("labels.pasteStyles"), shortcuts: [getShortcutKey("CtrlOrCmd+Alt+V")] }), _jsx(Shortcut, { label: t("labels.sendToBack"), shortcuts: [
                                        isDarwin
                                            ? getShortcutKey("CtrlOrCmd+Alt+[")
                                            : getShortcutKey("CtrlOrCmd+Shift+["),
                                    ] }), _jsx(Shortcut, { label: t("labels.bringToFront"), shortcuts: [
                                        isDarwin
                                            ? getShortcutKey("CtrlOrCmd+Alt+]")
                                            : getShortcutKey("CtrlOrCmd+Shift+]"),
                                    ] }), _jsx(Shortcut, { label: t("labels.sendBackward"), shortcuts: [getShortcutKey("CtrlOrCmd+[")] }), _jsx(Shortcut, { label: t("labels.bringForward"), shortcuts: [getShortcutKey("CtrlOrCmd+]")] }), _jsx(Shortcut, { label: t("labels.alignTop"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+Up")] }), _jsx(Shortcut, { label: t("labels.alignBottom"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+Down")] }), _jsx(Shortcut, { label: t("labels.alignLeft"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+Left")] }), _jsx(Shortcut, { label: t("labels.alignRight"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+Right")] }), _jsx(Shortcut, { label: t("labels.duplicateSelection"), shortcuts: [
                                        getShortcutKey("CtrlOrCmd+D"),
                                        getShortcutKey(`Alt+${t("helpDialog.drag")}`),
                                    ] }), _jsx(Shortcut, { label: t("helpDialog.toggleElementLock"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+L")] }), _jsx(Shortcut, { label: t("buttons.undo"), shortcuts: [getShortcutKey("CtrlOrCmd+Z")] }), _jsx(Shortcut, { label: t("buttons.redo"), shortcuts: isWindows
                                        ? [
                                            getShortcutKey("CtrlOrCmd+Y"),
                                            getShortcutKey("CtrlOrCmd+Shift+Z"),
                                        ]
                                        : [getShortcutKey("CtrlOrCmd+Shift+Z")] }), _jsx(Shortcut, { label: t("labels.group"), shortcuts: [getShortcutKey("CtrlOrCmd+G")] }), _jsx(Shortcut, { label: t("labels.ungroup"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+G")] }), _jsx(Shortcut, { label: t("labels.flipHorizontal"), shortcuts: [getShortcutKey("Shift+H")] }), _jsx(Shortcut, { label: t("labels.flipVertical"), shortcuts: [getShortcutKey("Shift+V")] }), _jsx(Shortcut, { label: t("labels.showStroke"), shortcuts: [getShortcutKey("S")] }), _jsx(Shortcut, { label: t("labels.showBackground"), shortcuts: [getShortcutKey("G")] }), _jsx(Shortcut, { label: t("labels.decreaseFontSize"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+<")] }), _jsx(Shortcut, { label: t("labels.increaseFontSize"), shortcuts: [getShortcutKey("CtrlOrCmd+Shift+>")] })] })] })] }) }));
};
