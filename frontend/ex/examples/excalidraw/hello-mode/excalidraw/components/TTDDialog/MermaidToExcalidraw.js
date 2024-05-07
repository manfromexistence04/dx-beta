import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useDeferredValue } from "react";
import { useApp } from "../App";
import { ArrowRightIcon } from "../icons";
import "./MermaidToExcalidraw.scss";
import { t } from "../../i18n";
import Trans from "../Trans";
import { convertMermaidToExcalidraw, insertToEditor, saveMermaidDataToStorage, } from "./common";
import { TTDDialogPanels } from "./TTDDialogPanels";
import { TTDDialogPanel } from "./TTDDialogPanel";
import { TTDDialogInput } from "./TTDDialogInput";
import { TTDDialogOutput } from "./TTDDialogOutput";
import { EditorLocalStorage } from "../../data/EditorLocalStorage";
import { EDITOR_LS_KEYS } from "../../constants";
import { debounce, isDevEnv } from "../../utils";
import { TTDDialogSubmitShortcut } from "./TTDDialogSubmitShortcut";
const MERMAID_EXAMPLE = "flowchart TD\n A[Christmas] -->|Get money| B(Go shopping)\n B --> C{Let me think}\n C -->|One| D[Laptop]\n C -->|Two| E[iPhone]\n C -->|Three| F[Car]";
const debouncedSaveMermaidDefinition = debounce(saveMermaidDataToStorage, 300);
const MermaidToExcalidraw = ({ mermaidToExcalidrawLib, }) => {
    const [text, setText] = useState(() => EditorLocalStorage.get(EDITOR_LS_KEYS.MERMAID_TO_EXCALIDRAW) ||
        MERMAID_EXAMPLE);
    const deferredText = useDeferredValue(text.trim());
    const [error, setError] = useState(null);
    const canvasRef = useRef(null);
    const data = useRef({ elements: [], files: null });
    const app = useApp();
    useEffect(() => {
        convertMermaidToExcalidraw({
            canvasRef,
            data,
            mermaidToExcalidrawLib,
            setError,
            mermaidDefinition: deferredText,
        }).catch((err) => {
            if (isDevEnv()) {
                console.error("Failed to parse mermaid definition", err);
            }
        });
        debouncedSaveMermaidDefinition(deferredText);
    }, [deferredText, mermaidToExcalidrawLib]);
    useEffect(() => () => {
        debouncedSaveMermaidDefinition.flush();
    }, []);
    const onInsertToEditor = () => {
        insertToEditor({
            app,
            data,
            text,
            shouldSaveMermaidDataToStorage: true,
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "ttd-dialog-desc", children: _jsx(Trans, { i18nKey: "mermaid.description", flowchartLink: (el) => (_jsx("a", { href: "https://mermaid.js.org/syntax/flowchart.html", children: el })), sequenceLink: (el) => (_jsx("a", { href: "https://mermaid.js.org/syntax/sequenceDiagram.html", children: el })), classLink: (el) => (_jsx("a", { href: "https://mermaid.js.org/syntax/classDiagram.html", children: el })) }) }), _jsxs(TTDDialogPanels, { children: [_jsx(TTDDialogPanel, { label: t("mermaid.syntax"), children: _jsx(TTDDialogInput, { input: text, placeholder: "Write Mermaid diagram defintion here...", onChange: (event) => setText(event.target.value), onKeyboardSubmit: () => {
                                onInsertToEditor();
                            } }) }), _jsx(TTDDialogPanel, { label: t("mermaid.preview"), panelAction: {
                            action: () => {
                                onInsertToEditor();
                            },
                            label: t("mermaid.button"),
                            icon: ArrowRightIcon,
                        }, renderSubmitShortcut: () => _jsx(TTDDialogSubmitShortcut, {}), children: _jsx(TTDDialogOutput, { canvasRef: canvasRef, loaded: mermaidToExcalidrawLib.loaded, error: error }) })] })] }));
};
export default MermaidToExcalidraw;
