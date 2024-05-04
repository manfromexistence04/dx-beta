import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { t } from "../i18n";
import Trans from "./Trans";
import { jotaiScope } from "../jotai";
import { useApp, useExcalidrawSetAppState } from "./App";
import { saveLibraryAsJSON } from "../data/json";
import { libraryItemsAtom } from "../data/library";
import { DotsIcon, ExportIcon, LoadIcon, publishIcon, TrashIcon, } from "./icons";
import { ToolButton } from "./ToolButton";
import { fileOpen } from "../data/filesystem";
import { muteFSAbortError } from "../utils";
import { useAtom } from "jotai";
import ConfirmDialog from "./ConfirmDialog";
import PublishLibrary from "./PublishLibrary";
import { Dialog } from "./Dialog";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import { isLibraryMenuOpenAtom } from "./LibraryMenu";
import { useUIAppState } from "../context/ui-appState";
import clsx from "clsx";
import { useLibraryCache } from "../hooks/useLibraryItemSvg";
const getSelectedItems = (libraryItems, selectedItems) => libraryItems.filter((item) => selectedItems.includes(item.id));
export const LibraryDropdownMenuButton = ({ setAppState, selectedItems, library, onRemoveFromLibrary, resetLibrary, onSelectItems, appState, className, }) => {
    const [libraryItemsData] = useAtom(libraryItemsAtom, jotaiScope);
    const [isLibraryMenuOpen, setIsLibraryMenuOpen] = useAtom(isLibraryMenuOpenAtom, jotaiScope);
    const renderRemoveLibAlert = () => {
        const content = selectedItems.length
            ? t("alerts.removeItemsFromsLibrary", { count: selectedItems.length })
            : t("alerts.resetLibrary");
        const title = selectedItems.length
            ? t("confirmDialog.removeItemsFromLib")
            : t("confirmDialog.resetLibrary");
        return (_jsx(ConfirmDialog, { onConfirm: () => {
                if (selectedItems.length) {
                    onRemoveFromLibrary();
                }
                else {
                    resetLibrary();
                }
                setShowRemoveLibAlert(false);
            }, onCancel: () => {
                setShowRemoveLibAlert(false);
            }, title: title, children: _jsx("p", { children: content }) }));
    };
    const [showRemoveLibAlert, setShowRemoveLibAlert] = useState(false);
    const itemsSelected = !!selectedItems.length;
    const items = itemsSelected
        ? libraryItemsData.libraryItems.filter((item) => selectedItems.includes(item.id))
        : libraryItemsData.libraryItems;
    const resetLabel = itemsSelected
        ? t("buttons.remove")
        : t("buttons.resetLibrary");
    const [showPublishLibraryDialog, setShowPublishLibraryDialog] = useState(false);
    const [publishLibSuccess, setPublishLibSuccess] = useState(null);
    const renderPublishSuccess = useCallback(() => {
        return (_jsxs(Dialog, { onCloseRequest: () => setPublishLibSuccess(null), title: t("publishSuccessDialog.title"), className: "publish-library-success", size: "small", children: [_jsx("p", { children: _jsx(Trans, { i18nKey: "publishSuccessDialog.content", authorName: publishLibSuccess.authorName, link: (el) => (_jsx("a", { href: publishLibSuccess?.url, target: "_blank", rel: "noopener noreferrer", children: el })) }) }), _jsx(ToolButton, { type: "button", title: t("buttons.close"), "aria-label": t("buttons.close"), label: t("buttons.close"), onClick: () => setPublishLibSuccess(null), "data-testid": "publish-library-success-close", className: "publish-library-success-close" })] }));
    }, [setPublishLibSuccess, publishLibSuccess]);
    const onPublishLibSuccess = (data, libraryItems) => {
        setShowPublishLibraryDialog(false);
        setPublishLibSuccess({ url: data.url, authorName: data.authorName });
        const nextLibItems = libraryItems.slice();
        nextLibItems.forEach((libItem) => {
            if (selectedItems.includes(libItem.id)) {
                libItem.status = "published";
            }
        });
        library.setLibrary(nextLibItems);
    };
    const onLibraryImport = async () => {
        try {
            await library.updateLibrary({
                libraryItems: fileOpen({
                    description: "Excalidraw library files",
                    // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
                    // gets resolved. Else, iOS users cannot open `.excalidraw` files.
                    /*
                      extensions: [".json", ".excalidrawlib"],
                      */
                }),
                merge: true,
                openLibraryMenu: true,
            });
        }
        catch (error) {
            if (error?.name === "AbortError") {
                console.warn(error);
                return;
            }
            setAppState({ errorMessage: t("errors.importLibraryError") });
        }
    };
    const onLibraryExport = async () => {
        const libraryItems = itemsSelected
            ? items
            : await library.getLatestLibrary();
        saveLibraryAsJSON(libraryItems)
            .catch(muteFSAbortError)
            .catch((error) => {
            setAppState({ errorMessage: error.message });
        });
    };
    const renderLibraryMenu = () => {
        return (_jsxs(DropdownMenu, { open: isLibraryMenuOpen, children: [_jsx(DropdownMenu.Trigger, { onToggle: () => setIsLibraryMenuOpen(!isLibraryMenuOpen), children: DotsIcon }), _jsxs(DropdownMenu.Content, { onClickOutside: () => setIsLibraryMenuOpen(false), onSelect: () => setIsLibraryMenuOpen(false), className: "library-menu", children: [!itemsSelected && (_jsx(DropdownMenu.Item, { onSelect: onLibraryImport, icon: LoadIcon, "data-testid": "lib-dropdown--load", children: t("buttons.load") })), !!items.length && (_jsx(DropdownMenu.Item, { onSelect: onLibraryExport, icon: ExportIcon, "data-testid": "lib-dropdown--export", children: t("buttons.export") })), !!items.length && (_jsx(DropdownMenu.Item, { onSelect: () => setShowRemoveLibAlert(true), icon: TrashIcon, children: resetLabel })), itemsSelected && (_jsx(DropdownMenu.Item, { icon: publishIcon, onSelect: () => setShowPublishLibraryDialog(true), "data-testid": "lib-dropdown--remove", children: t("buttons.publishLibrary") }))] })] }));
    };
    return (_jsxs("div", { className: clsx("library-menu-dropdown-container", className), children: [renderLibraryMenu(), selectedItems.length > 0 && (_jsx("div", { className: "library-actions-counter", children: selectedItems.length })), showRemoveLibAlert && renderRemoveLibAlert(), showPublishLibraryDialog && (_jsx(PublishLibrary, { onClose: () => setShowPublishLibraryDialog(false), libraryItems: getSelectedItems(libraryItemsData.libraryItems, selectedItems), appState: appState, onSuccess: (data) => onPublishLibSuccess(data, libraryItemsData.libraryItems), onError: (error) => window.alert(error), updateItemsInStorage: () => library.setLibrary(libraryItemsData.libraryItems), onRemove: (id) => onSelectItems(selectedItems.filter((_id) => _id !== id)) })), publishLibSuccess && renderPublishSuccess()] }));
};
export const LibraryDropdownMenu = ({ selectedItems, onSelectItems, className, }) => {
    const { library } = useApp();
    const { clearLibraryCache, deleteItemsFromLibraryCache } = useLibraryCache();
    const appState = useUIAppState();
    const setAppState = useExcalidrawSetAppState();
    const [libraryItemsData] = useAtom(libraryItemsAtom, jotaiScope);
    const removeFromLibrary = async (libraryItems) => {
        const nextItems = libraryItems.filter((item) => !selectedItems.includes(item.id));
        library.setLibrary(nextItems).catch(() => {
            setAppState({ errorMessage: t("alerts.errorRemovingFromLibrary") });
        });
        deleteItemsFromLibraryCache(selectedItems);
        onSelectItems([]);
    };
    const resetLibrary = () => {
        library.resetLibrary();
        clearLibraryCache();
    };
    return (_jsx(LibraryDropdownMenuButton, { appState: appState, setAppState: setAppState, selectedItems: selectedItems, onSelectItems: onSelectItems, library: library, onRemoveFromLibrary: () => removeFromLibrary(libraryItemsData.libraryItems), resetLibrary: resetLibrary, className: className }));
};
