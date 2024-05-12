import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useRef } from "react";
import { distributeLibraryItemsOnSquareGrid, libraryItemsAtom, } from "../data/library";
import { t } from "../i18n";
import { randomId } from "../random";
import LibraryMenuItems from "./LibraryMenuItems";
import { trackEvent } from "../analytics";
import { atom, useAtom } from "jotai";
import { jotaiScope } from "../jotai";
import Spinner from "./Spinner";
import { useApp, useAppProps, useExcalidrawElements, useExcalidrawSetAppState, } from "./App";
import { getSelectedElements } from "../scene";
import { useUIAppState } from "../context/ui-appState";
import "./LibraryMenu.scss";
import { LibraryMenuControlButtons } from "./LibraryMenuControlButtons";
import { isShallowEqual } from "../utils";
import { LIBRARY_DISABLED_TYPES } from "../constants";
export const isLibraryMenuOpenAtom = atom(false);
const LibraryMenuWrapper = ({ children }) => {
    return _jsx("div", { className: "layer-ui__library", children: children });
};
export const LibraryMenuContent = ({ onInsertLibraryItems, pendingElements, onAddToLibrary, setAppState, libraryReturnUrl, library, id, theme, selectedItems, onSelectItems, }) => {
    const [libraryItemsData] = useAtom(libraryItemsAtom, jotaiScope);
    const _onAddToLibrary = useCallback((elements) => {
        const addToLibrary = async (processedElements, libraryItems) => {
            trackEvent("element", "addToLibrary", "ui");
            for (const type of LIBRARY_DISABLED_TYPES) {
                if (processedElements.some((element) => element.type === type)) {
                    return setAppState({
                        errorMessage: t(`errors.libraryElementTypeError.${type}`),
                    });
                }
            }
            const nextItems = [
                {
                    status: "unpublished",
                    elements: processedElements,
                    id: randomId(),
                    created: Date.now(),
                },
                ...libraryItems,
            ];
            onAddToLibrary();
            library.setLibrary(nextItems).catch(() => {
                setAppState({ errorMessage: t("alerts.errorAddingToLibrary") });
            });
        };
        addToLibrary(elements, libraryItemsData.libraryItems);
    }, [onAddToLibrary, library, setAppState, libraryItemsData.libraryItems]);
    const libraryItems = useMemo(() => libraryItemsData.libraryItems, [libraryItemsData]);
    if (libraryItemsData.status === "loading" &&
        !libraryItemsData.isInitialized) {
        return (_jsx(LibraryMenuWrapper, { children: _jsx("div", { className: "layer-ui__library-message", children: _jsxs("div", { children: [_jsx(Spinner, { size: "2em" }), _jsx("span", { children: t("labels.libraryLoadingMessage") })] }) }) }));
    }
    const showBtn = libraryItemsData.libraryItems.length > 0 || pendingElements.length > 0;
    return (_jsxs(LibraryMenuWrapper, { children: [_jsx(LibraryMenuItems, { isLoading: libraryItemsData.status === "loading", libraryItems: libraryItems, onAddToLibrary: _onAddToLibrary, onInsertLibraryItems: onInsertLibraryItems, pendingElements: pendingElements, id: id, libraryReturnUrl: libraryReturnUrl, theme: theme, onSelectItems: onSelectItems, selectedItems: selectedItems }), showBtn && (_jsx(LibraryMenuControlButtons, { className: "library-menu-control-buttons--at-bottom", style: { padding: "16px 12px 0 12px" }, id: id, libraryReturnUrl: libraryReturnUrl, theme: theme }))] }));
};
const usePendingElementsMemo = (appState, elements) => {
    const create = () => getSelectedElements(elements, appState, {
        includeBoundTextElement: true,
        includeElementsInFrames: true,
    });
    const val = useRef(create());
    const prevAppState = useRef(appState);
    const prevElements = useRef(elements);
    if (!isShallowEqual(appState.selectedElementIds, prevAppState.current.selectedElementIds) ||
        !isShallowEqual(elements, prevElements.current)) {
        val.current = create();
        prevAppState.current = appState;
        prevElements.current = elements;
    }
    return val.current;
};
/**
 * This component is meant to be rendered inside <Sidebar.Tab/> inside our
 * <DefaultSidebar/> or host apps Sidebar components.
 */
export const LibraryMenu = () => {
    const { library, id, onInsertElements } = useApp();
    const appProps = useAppProps();
    const appState = useUIAppState();
    const setAppState = useExcalidrawSetAppState();
    const elements = useExcalidrawElements();
    const [selectedItems, setSelectedItems] = useState([]);
    const memoizedLibrary = useMemo(() => library, [library]);
    // BUG: pendingElements are still causing some unnecessary rerenders because clicking into canvas returns some ids even when no element is selected.
    const pendingElements = usePendingElementsMemo(appState, elements);
    const onInsertLibraryItems = useCallback((libraryItems) => {
        onInsertElements(distributeLibraryItemsOnSquareGrid(libraryItems));
    }, [onInsertElements]);
    const deselectItems = useCallback(() => {
        setAppState({
            selectedElementIds: {},
            selectedGroupIds: {},
            activeEmbeddable: null,
        });
    }, [setAppState]);
    return (_jsx(LibraryMenuContent, { pendingElements: pendingElements, onInsertLibraryItems: onInsertLibraryItems, onAddToLibrary: deselectItems, setAppState: setAppState, libraryReturnUrl: appProps.libraryReturnUrl, library: memoizedLibrary, id: id, theme: appState.theme, selectedItems: selectedItems, onSelectItems: setSelectedItems }));
};
