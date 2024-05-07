import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import OpenColor from "open-color";
import { Dialog } from "./Dialog";
import { t } from "../i18n";
import Trans from "./Trans";
import { exportToCanvas, exportToSvg } from "../../utils/export";
import { EDITOR_LS_KEYS, EXPORT_DATA_TYPES, EXPORT_SOURCE, MIME_TYPES, VERSIONS, } from "../constants";
import { canvasToBlob, resizeImageFile } from "../data/blob";
import { chunk } from "../utils";
import DialogActionButton from "./DialogActionButton";
import { CloseIcon } from "./icons";
import { ToolButton } from "./ToolButton";
import { EditorLocalStorage } from "../data/EditorLocalStorage";
import "./PublishLibrary.scss";
const generatePreviewImage = async (libraryItems) => {
    const MAX_ITEMS_PER_ROW = 6;
    const BOX_SIZE = 128;
    const BOX_PADDING = Math.round(BOX_SIZE / 16);
    const BORDER_WIDTH = Math.max(Math.round(BOX_SIZE / 64), 2);
    const rows = chunk(libraryItems, MAX_ITEMS_PER_ROW);
    const canvas = document.createElement("canvas");
    canvas.width =
        rows[0].length * BOX_SIZE +
            (rows[0].length + 1) * (BOX_PADDING * 2) -
            BOX_PADDING * 2;
    canvas.height =
        rows.length * BOX_SIZE +
            (rows.length + 1) * (BOX_PADDING * 2) -
            BOX_PADDING * 2;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = OpenColor.white;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // draw items
    // ---------------------------------------------------------------------------
    for (const [index, item] of libraryItems.entries()) {
        const itemCanvas = await exportToCanvas({
            elements: item.elements,
            files: null,
            maxWidthOrHeight: BOX_SIZE,
        });
        const { width, height } = itemCanvas;
        // draw item
        // -------------------------------------------------------------------------
        const rowOffset = Math.floor(index / MAX_ITEMS_PER_ROW) * (BOX_SIZE + BOX_PADDING * 2);
        const colOffset = (index % MAX_ITEMS_PER_ROW) * (BOX_SIZE + BOX_PADDING * 2);
        ctx.drawImage(itemCanvas, colOffset + (BOX_SIZE - width) / 2 + BOX_PADDING, rowOffset + (BOX_SIZE - height) / 2 + BOX_PADDING);
        // draw item border
        // -------------------------------------------------------------------------
        ctx.lineWidth = BORDER_WIDTH;
        ctx.strokeStyle = OpenColor.gray[4];
        ctx.strokeRect(colOffset + BOX_PADDING / 2, rowOffset + BOX_PADDING / 2, BOX_SIZE + BOX_PADDING, BOX_SIZE + BOX_PADDING);
    }
    return await resizeImageFile(new File([await canvasToBlob(canvas)], "preview", { type: MIME_TYPES.png }), {
        outputType: MIME_TYPES.jpg,
        maxWidthOrHeight: 5000,
    });
};
const SingleLibraryItem = ({ libItem, appState, index, onChange, onRemove, }) => {
    const svgRef = useRef(null);
    const inputRef = useRef(null);
    useEffect(() => {
        const node = svgRef.current;
        if (!node) {
            return;
        }
        (async () => {
            const svg = await exportToSvg({
                elements: libItem.elements,
                appState: {
                    ...appState,
                    viewBackgroundColor: OpenColor.white,
                    exportBackground: true,
                },
                files: null,
            });
            node.innerHTML = svg.outerHTML;
        })();
    }, [libItem.elements, appState]);
    return (_jsxs("div", { className: "single-library-item", children: [libItem.status === "published" && (_jsx("span", { className: "single-library-item-status", children: t("labels.statusPublished") })), _jsx("div", { ref: svgRef, className: "single-library-item__svg" }), _jsx(ToolButton, { "aria-label": t("buttons.remove"), type: "button", icon: CloseIcon, className: "single-library-item--remove", onClick: onRemove.bind(null, libItem.id), title: t("buttons.remove") }), _jsxs("div", { style: {
                    display: "flex",
                    margin: "0.8rem 0",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: 500,
                    flexDirection: "column",
                }, children: [_jsxs("label", { style: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                        }, children: [_jsxs("div", { style: { padding: "0.5em 0" }, children: [_jsx("span", { style: { fontWeight: 500, color: OpenColor.gray[6] }, children: t("publishDialog.itemName") }), _jsx("span", { "aria-hidden": "true", className: "required", children: "*" })] }), _jsx("input", { type: "text", ref: inputRef, style: { width: "80%", padding: "0.2rem" }, defaultValue: libItem.name, placeholder: "Item name", onChange: (event) => {
                                    onChange(event.target.value, index);
                                } })] }), _jsx("span", { className: "error", children: libItem.error })] })] }));
};
const PublishLibrary = ({ onClose, libraryItems, appState, onSuccess, onError, updateItemsInStorage, onRemove, }) => {
    const [libraryData, setLibraryData] = useState({
        authorName: "",
        githubHandle: "",
        name: "",
        description: "",
        twitterHandle: "",
        website: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        const data = EditorLocalStorage.get(EDITOR_LS_KEYS.PUBLISH_LIBRARY);
        if (data) {
            setLibraryData(data);
        }
    }, []);
    const [clonedLibItems, setClonedLibItems] = useState(libraryItems.slice());
    useEffect(() => {
        setClonedLibItems(libraryItems.slice());
    }, [libraryItems]);
    const onInputChange = (event) => {
        setLibraryData({
            ...libraryData,
            [event.target.name]: event.target.value,
        });
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const erroredLibItems = [];
        let isError = false;
        clonedLibItems.forEach((libItem) => {
            let error = "";
            if (!libItem.name) {
                error = t("publishDialog.errors.required");
                isError = true;
            }
            erroredLibItems.push({ ...libItem, error });
        });
        if (isError) {
            setClonedLibItems(erroredLibItems);
            setIsSubmitting(false);
            return;
        }
        const previewImage = await generatePreviewImage(clonedLibItems);
        const libContent = {
            type: EXPORT_DATA_TYPES.excalidrawLibrary,
            version: VERSIONS.excalidrawLibrary,
            source: EXPORT_SOURCE,
            libraryItems: clonedLibItems,
        };
        const content = JSON.stringify(libContent, null, 2);
        const lib = new Blob([content], { type: "application/json" });
        const formData = new FormData();
        formData.append("excalidrawLib", lib);
        formData.append("previewImage", previewImage);
        formData.append("previewImageType", previewImage.type);
        formData.append("title", libraryData.name);
        formData.append("authorName", libraryData.authorName);
        formData.append("githubHandle", libraryData.githubHandle);
        formData.append("name", libraryData.name);
        formData.append("description", libraryData.description);
        formData.append("twitterHandle", libraryData.twitterHandle);
        formData.append("website", libraryData.website);
        fetch(`${import.meta.env.VITE_APP_LIBRARY_BACKEND}/submit`, {
            method: "post",
            body: formData,
        })
            .then((response) => {
            if (response.ok) {
                return response.json().then(({ url }) => {
                    // flush data from local storage
                    EditorLocalStorage.delete(EDITOR_LS_KEYS.PUBLISH_LIBRARY);
                    onSuccess({
                        url,
                        authorName: libraryData.authorName,
                        items: clonedLibItems,
                    });
                });
            }
            return response
                .json()
                .catch(() => {
                throw new Error(response.statusText || "something went wrong");
            })
                .then((error) => {
                throw new Error(error.message || response.statusText || "something went wrong");
            });
        }, (err) => {
            console.error(err);
            onError(err);
            setIsSubmitting(false);
        })
            .catch((err) => {
            console.error(err);
            onError(err);
            setIsSubmitting(false);
        });
    };
    const renderLibraryItems = () => {
        const items = [];
        clonedLibItems.forEach((libItem, index) => {
            items.push(_jsx("div", { className: "single-library-item-wrapper", children: _jsx(SingleLibraryItem, { libItem: libItem, appState: appState, index: index, onChange: (val, index) => {
                        const items = clonedLibItems.slice();
                        items[index].name = val;
                        setClonedLibItems(items);
                    }, onRemove: onRemove }) }, index));
        });
        return _jsx("div", { className: "selected-library-items", children: items });
    };
    const onDialogClose = useCallback(() => {
        updateItemsInStorage(clonedLibItems);
        EditorLocalStorage.set(EDITOR_LS_KEYS.PUBLISH_LIBRARY, libraryData);
        onClose();
    }, [clonedLibItems, onClose, updateItemsInStorage, libraryData]);
    const shouldRenderForm = !!libraryItems.length;
    const containsPublishedItems = libraryItems.some((item) => item.status === "published");
    return (_jsx(Dialog, { onCloseRequest: onDialogClose, title: t("publishDialog.title"), className: "publish-library", children: shouldRenderForm ? (_jsxs("form", { onSubmit: onSubmit, children: [_jsx("div", { className: "publish-library-note", children: _jsx(Trans, { i18nKey: "publishDialog.noteDescription", link: (el) => (_jsx("a", { href: "https://libraries.excalidraw.com", target: "_blank", rel: "noopener noreferrer", children: el })) }) }), _jsx("span", { className: "publish-library-note", children: _jsx(Trans, { i18nKey: "publishDialog.noteGuidelines", link: (el) => (_jsx("a", { href: "https://github.com/excalidraw/excalidraw-libraries#guidelines", target: "_blank", rel: "noopener noreferrer", children: el })) }) }), _jsx("div", { className: "publish-library-note", children: t("publishDialog.noteItems") }), containsPublishedItems && (_jsx("span", { className: "publish-library-note publish-library-warning", children: t("publishDialog.republishWarning") })), renderLibraryItems(), _jsxs("div", { className: "publish-library__fields", children: [_jsxs("label", { children: [_jsxs("div", { children: [_jsx("span", { children: t("publishDialog.libraryName") }), _jsx("span", { "aria-hidden": "true", className: "required", children: "*" })] }), _jsx("input", { type: "text", name: "name", required: true, value: libraryData.name, onChange: onInputChange, placeholder: t("publishDialog.placeholder.libraryName") })] }), _jsxs("label", { style: { alignItems: "flex-start" }, children: [_jsxs("div", { children: [_jsx("span", { children: t("publishDialog.libraryDesc") }), _jsx("span", { "aria-hidden": "true", className: "required", children: "*" })] }), _jsx("textarea", { name: "description", rows: 4, required: true, value: libraryData.description, onChange: onInputChange, placeholder: t("publishDialog.placeholder.libraryDesc") })] }), _jsxs("label", { children: [_jsxs("div", { children: [_jsx("span", { children: t("publishDialog.authorName") }), _jsx("span", { "aria-hidden": "true", className: "required", children: "*" })] }), _jsx("input", { type: "text", name: "authorName", required: true, value: libraryData.authorName, onChange: onInputChange, placeholder: t("publishDialog.placeholder.authorName") })] }), _jsxs("label", { children: [_jsx("span", { children: t("publishDialog.githubUsername") }), _jsx("input", { type: "text", name: "githubHandle", value: libraryData.githubHandle, onChange: onInputChange, placeholder: t("publishDialog.placeholder.githubHandle") })] }), _jsxs("label", { children: [_jsx("span", { children: t("publishDialog.twitterUsername") }), _jsx("input", { type: "text", name: "twitterHandle", value: libraryData.twitterHandle, onChange: onInputChange, placeholder: t("publishDialog.placeholder.twitterHandle") })] }), _jsxs("label", { children: [_jsx("span", { children: t("publishDialog.website") }), _jsx("input", { type: "text", name: "website", pattern: "https?://.+", title: t("publishDialog.errors.website"), value: libraryData.website, onChange: onInputChange, placeholder: t("publishDialog.placeholder.website") })] }), _jsx("span", { className: "publish-library-note", children: _jsx(Trans, { i18nKey: "publishDialog.noteLicense", link: (el) => (_jsx("a", { href: "https://github.com/excalidraw/excalidraw-libraries/blob/main/LICENSE", target: "_blank", rel: "noopener noreferrer", children: el })) }) })] }), _jsxs("div", { className: "publish-library__buttons", children: [_jsx(DialogActionButton, { label: t("buttons.cancel"), onClick: onDialogClose, "data-testid": "cancel-clear-canvas-button" }), _jsx(DialogActionButton, { type: "submit", label: t("buttons.submit"), actionType: "primary", isLoading: isSubmitting })] })] })) : (_jsx("p", { style: { padding: "1em", textAlign: "center", fontWeight: 500 }, children: t("publishDialog.atleastOneLibItem") })) }));
};
export default PublishLibrary;
