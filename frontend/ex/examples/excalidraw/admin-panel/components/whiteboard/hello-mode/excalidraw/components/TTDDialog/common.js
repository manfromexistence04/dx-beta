import { DEFAULT_EXPORT_PADDING, DEFAULT_FONT_SIZE, EDITOR_LS_KEYS, } from "../../constants";
import { convertToExcalidrawElements, exportToCanvas } from "../../index";
import { canvasToBlob } from "../../data/blob";
import { EditorLocalStorage } from "../../data/EditorLocalStorage";
import { t } from "../../i18n";
const resetPreview = ({ canvasRef, setError, }) => {
    const canvasNode = canvasRef.current;
    if (!canvasNode) {
        return;
    }
    const parent = canvasNode.parentElement;
    if (!parent) {
        return;
    }
    parent.style.background = "";
    setError(null);
    canvasNode.replaceChildren();
};
export const convertMermaidToExcalidraw = async ({ canvasRef, mermaidToExcalidrawLib, mermaidDefinition, setError, data, }) => {
    const canvasNode = canvasRef.current;
    const parent = canvasNode?.parentElement;
    if (!canvasNode || !parent) {
        return;
    }
    if (!mermaidDefinition) {
        resetPreview({ canvasRef, setError });
        return;
    }
    try {
        const api = await mermaidToExcalidrawLib.api;
        let ret;
        try {
            ret = await api.parseMermaidToExcalidraw(mermaidDefinition, {
                fontSize: DEFAULT_FONT_SIZE,
            });
        }
        catch (err) {
            ret = await api.parseMermaidToExcalidraw(mermaidDefinition.replace(/"/g, "'"), {
                fontSize: DEFAULT_FONT_SIZE,
            });
        }
        const { elements, files } = ret;
        setError(null);
        data.current = {
            elements: convertToExcalidrawElements(elements, {
                regenerateIds: true,
            }),
            files,
        };
        const canvas = await exportToCanvas({
            elements: data.current.elements,
            files: data.current.files,
            exportPadding: DEFAULT_EXPORT_PADDING,
            maxWidthOrHeight: Math.max(parent.offsetWidth, parent.offsetHeight) *
                window.devicePixelRatio,
        });
        // if converting to blob fails, there's some problem that will
        // likely prevent preview and export (e.g. canvas too big)
        try {
            await canvasToBlob(canvas);
        }
        catch (e) {
            if (e.name === "CANVAS_POSSIBLY_TOO_BIG") {
                throw new Error(t("canvasError.canvasTooBig"));
            }
            throw e;
        }
        parent.style.background = "var(--default-bg-color)";
        canvasNode.replaceChildren(canvas);
    }
    catch (err) {
        parent.style.background = "var(--default-bg-color)";
        if (mermaidDefinition) {
            setError(err);
        }
        throw err;
    }
};
export const saveMermaidDataToStorage = (mermaidDefinition) => {
    EditorLocalStorage.set(EDITOR_LS_KEYS.MERMAID_TO_EXCALIDRAW, mermaidDefinition);
};
export const insertToEditor = ({ app, data, text, shouldSaveMermaidDataToStorage, }) => {
    const { elements: newElements, files } = data.current;
    if (!newElements.length) {
        return;
    }
    app.addElementsFromPasteOrLibrary({
        elements: newElements,
        files,
        position: "center",
        fitToContent: true,
    });
    app.setOpenDialog(null);
    if (shouldSaveMermaidDataToStorage && text) {
        saveMermaidDataToStorage(text);
    }
};
