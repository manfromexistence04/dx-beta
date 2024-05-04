import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getShortcutFromShortcutName } from "../../actions/shortcuts";
import { useI18n } from "../../i18n";
import { useExcalidrawSetAppState, useExcalidrawActionManager, useExcalidrawElements, useAppProps, } from "../App";
import { boltIcon, DeviceDesktopIcon, ExportIcon, ExportImageIcon, HelpIcon, LoadIcon, MoonIcon, save, SunIcon, TrashIcon, usersIcon, } from "../icons";
import { GithubIcon, DiscordIcon, XBrandIcon } from "../icons";
import DropdownMenuItem from "../dropdownMenu/DropdownMenuItem";
import DropdownMenuItemLink from "../dropdownMenu/DropdownMenuItemLink";
import { actionClearCanvas, actionLoadScene, actionSaveToActiveFile, actionShortcuts, actionToggleTheme, } from "../../actions";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { activeConfirmDialogAtom } from "../ActiveConfirmDialog";
import { jotaiScope } from "../../jotai";
import { useUIAppState } from "../../context/ui-appState";
import { openConfirmModal } from "../OverwriteConfirm/OverwriteConfirmState";
import Trans from "../Trans";
import DropdownMenuItemContentRadio from "../dropdownMenu/DropdownMenuItemContentRadio";
import { THEME } from "../../constants";
import { trackEvent } from "../../analytics";
import "./DefaultItems.scss";
export const LoadScene = () => {
    const { t } = useI18n();
    const actionManager = useExcalidrawActionManager();
    const elements = useExcalidrawElements();
    if (!actionManager.isActionEnabled(actionLoadScene)) {
        return null;
    }
    const handleSelect = async () => {
        if (!elements.length ||
            (await openConfirmModal({
                title: t("overwriteConfirm.modal.loadFromFile.title"),
                actionLabel: t("overwriteConfirm.modal.loadFromFile.button"),
                color: "warning",
                description: (_jsx(Trans, { i18nKey: "overwriteConfirm.modal.loadFromFile.description", bold: (text) => _jsx("strong", { children: text }), br: () => _jsx("br", {}) })),
            }))) {
            actionManager.executeAction(actionLoadScene);
        }
    };
    return (_jsx(DropdownMenuItem, { icon: LoadIcon, onSelect: handleSelect, "data-testid": "load-button", shortcut: getShortcutFromShortcutName("loadScene"), "aria-label": t("buttons.load"), children: t("buttons.load") }));
};
LoadScene.displayName = "LoadScene";
export const SaveToActiveFile = () => {
    const { t } = useI18n();
    const actionManager = useExcalidrawActionManager();
    if (!actionManager.isActionEnabled(actionSaveToActiveFile)) {
        return null;
    }
    return (_jsx(DropdownMenuItem, { shortcut: getShortcutFromShortcutName("saveScene"), "data-testid": "save-button", onSelect: () => actionManager.executeAction(actionSaveToActiveFile), icon: save, "aria-label": `${t("buttons.save")}`, children: `${t("buttons.save")}` }));
};
SaveToActiveFile.displayName = "SaveToActiveFile";
export const SaveAsImage = () => {
    const setAppState = useExcalidrawSetAppState();
    const { t } = useI18n();
    return (_jsx(DropdownMenuItem, { icon: ExportImageIcon, "data-testid": "image-export-button", onSelect: () => setAppState({ openDialog: { name: "imageExport" } }), shortcut: getShortcutFromShortcutName("imageExport"), "aria-label": t("buttons.exportImage"), children: t("buttons.exportImage") }));
};
SaveAsImage.displayName = "SaveAsImage";
export const CommandPalette = (opts) => {
    const setAppState = useExcalidrawSetAppState();
    const { t } = useI18n();
    return (_jsx(DropdownMenuItem, { icon: boltIcon, "data-testid": "command-palette-button", onSelect: () => {
            trackEvent("command_palette", "open", "menu");
            setAppState({ openDialog: { name: "commandPalette" } });
        }, shortcut: getShortcutFromShortcutName("commandPalette"), "aria-label": t("commandPalette.title"), className: opts?.className, children: t("commandPalette.title") }));
};
CommandPalette.displayName = "CommandPalette";
export const Help = () => {
    const { t } = useI18n();
    const actionManager = useExcalidrawActionManager();
    return (_jsx(DropdownMenuItem, { "data-testid": "help-menu-item", icon: HelpIcon, onSelect: () => actionManager.executeAction(actionShortcuts), shortcut: "?", "aria-label": t("helpDialog.title"), children: t("helpDialog.title") }));
};
Help.displayName = "Help";
export const ClearCanvas = () => {
    const { t } = useI18n();
    const setActiveConfirmDialog = useSetAtom(activeConfirmDialogAtom, jotaiScope);
    const actionManager = useExcalidrawActionManager();
    if (!actionManager.isActionEnabled(actionClearCanvas)) {
        return null;
    }
    return (_jsx(DropdownMenuItem, { icon: TrashIcon, onSelect: () => setActiveConfirmDialog("clearCanvas"), "data-testid": "clear-canvas-button", "aria-label": t("buttons.clearReset"), children: t("buttons.clearReset") }));
};
ClearCanvas.displayName = "ClearCanvas";
export const ToggleTheme = (props) => {
    const { t } = useI18n();
    const appState = useUIAppState();
    const actionManager = useExcalidrawActionManager();
    const shortcut = getShortcutFromShortcutName("toggleTheme");
    if (!actionManager.isActionEnabled(actionToggleTheme)) {
        return null;
    }
    if (props?.allowSystemTheme) {
        return (_jsx(DropdownMenuItemContentRadio, { name: "theme", value: props.theme, onChange: (value) => props.onSelect(value), choices: [
                {
                    value: THEME.LIGHT,
                    label: SunIcon,
                    ariaLabel: `${t("buttons.lightMode")} - ${shortcut}`,
                },
                {
                    value: THEME.DARK,
                    label: MoonIcon,
                    ariaLabel: `${t("buttons.darkMode")} - ${shortcut}`,
                },
                {
                    value: "system",
                    label: DeviceDesktopIcon,
                    ariaLabel: t("buttons.systemMode"),
                },
            ], children: t("labels.theme") }));
    }
    return (_jsx(DropdownMenuItem, { onSelect: (event) => {
            // do not close the menu when changing theme
            event.preventDefault();
            if (props?.onSelect) {
                props.onSelect(appState.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
            }
            else {
                return actionManager.executeAction(actionToggleTheme);
            }
        }, icon: appState.theme === THEME.DARK ? SunIcon : MoonIcon, "data-testid": "toggle-dark-mode", shortcut: shortcut, "aria-label": appState.theme === THEME.DARK
            ? t("buttons.lightMode")
            : t("buttons.darkMode"), children: appState.theme === THEME.DARK
            ? t("buttons.lightMode")
            : t("buttons.darkMode") }));
};
ToggleTheme.displayName = "ToggleTheme";
export const ChangeCanvasBackground = () => {
    const { t } = useI18n();
    const appState = useUIAppState();
    const actionManager = useExcalidrawActionManager();
    const appProps = useAppProps();
    if (appState.viewModeEnabled ||
        !appProps.UIOptions.canvasActions.changeViewBackgroundColor) {
        return null;
    }
    return (_jsxs("div", { style: { marginTop: "0.5rem" }, children: [_jsx("div", { "data-testid": "canvas-background-label", style: { fontSize: ".75rem", marginBottom: ".5rem" }, children: t("labels.canvasBackground") }), _jsx("div", { style: { padding: "0 0.625rem" }, children: actionManager.renderAction("changeViewBackgroundColor") })] }));
};
ChangeCanvasBackground.displayName = "ChangeCanvasBackground";
export const Export = () => {
    const { t } = useI18n();
    const setAppState = useExcalidrawSetAppState();
    return (_jsx(DropdownMenuItem, { icon: ExportIcon, onSelect: () => {
            setAppState({ openDialog: { name: "jsonExport" } });
        }, "data-testid": "json-export-button", "aria-label": t("buttons.export"), children: t("buttons.export") }));
};
Export.displayName = "Export";
export const Socials = () => {
    const { t } = useI18n();
    return (_jsxs(_Fragment, { children: [_jsx(DropdownMenuItemLink, { icon: GithubIcon, href: "https://github.com/excalidraw/excalidraw", "aria-label": "GitHub", children: "GitHub" }), _jsx(DropdownMenuItemLink, { icon: XBrandIcon, href: "https://x.com/excalidraw", "aria-label": "X", children: t("labels.followUs") }), _jsx(DropdownMenuItemLink, { icon: DiscordIcon, href: "https://discord.gg/UexuTaE", "aria-label": "Discord", children: t("labels.discordChat") })] }));
};
Socials.displayName = "Socials";
export const LiveCollaborationTrigger = ({ onSelect, isCollaborating, }) => {
    const { t } = useI18n();
    return (_jsx(DropdownMenuItem, { "data-testid": "collab-button", icon: usersIcon, className: clsx({
            "active-collab": isCollaborating,
        }), onSelect: onSelect, children: t("labels.liveCollaboration") }));
};
LiveCollaborationTrigger.displayName = "LiveCollaborationTrigger";
