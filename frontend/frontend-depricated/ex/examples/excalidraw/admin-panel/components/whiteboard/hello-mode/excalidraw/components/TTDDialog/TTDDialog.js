import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog } from "../Dialog";
import { useApp, useExcalidrawSetAppState } from "../App";
import MermaidToExcalidraw from "./MermaidToExcalidraw";
import TTDDialogTabs from "./TTDDialogTabs";
import { useEffect, useRef, useState } from "react";
import { useUIAppState } from "../../context/ui-appState";
import { withInternalFallback } from "../hoc/withInternalFallback";
import { TTDDialogTabTriggers } from "./TTDDialogTabTriggers";
import { TTDDialogTabTrigger } from "./TTDDialogTabTrigger";
import { TTDDialogTab } from "./TTDDialogTab";
import { t } from "../../i18n";
import { TTDDialogInput } from "./TTDDialogInput";
import { TTDDialogOutput } from "./TTDDialogOutput";
import { TTDDialogPanel } from "./TTDDialogPanel";
import { TTDDialogPanels } from "./TTDDialogPanels";
import { convertMermaidToExcalidraw, insertToEditor, saveMermaidDataToStorage, } from "./common";
import { ArrowRightIcon } from "../icons";
import "./TTDDialog.scss";
import { isFiniteNumber } from "../../utils";
import { atom, useAtom } from "jotai";
import { trackEvent } from "../../analytics";
import { InlineIcon } from "../InlineIcon";
import { TTDDialogSubmitShortcut } from "./TTDDialogSubmitShortcut";
const MIN_PROMPT_LENGTH = 3;
const MAX_PROMPT_LENGTH = 1000;
const rateLimitsAtom = atom(null);
const ttdGenerationAtom = atom(null);
export const TTDDialog = (props) => {
    const appState = useUIAppState();
    if (appState.openDialog?.name !== "ttd") {
        return null;
    }
    return _jsx(TTDDialogBase, { ...props, tab: appState.openDialog.tab });
};
/**
 * Text to diagram (TTD) dialog
 */
export const TTDDialogBase = withInternalFallback("TTDDialogBase", ({ tab, ...rest }) => {
    const app = useApp();
    const setAppState = useExcalidrawSetAppState();
    const someRandomDivRef = useRef(null);
    const [ttdGeneration, setTtdGeneration] = useAtom(ttdGenerationAtom);
    const [text, setText] = useState(ttdGeneration?.prompt ?? "");
    const prompt = text.trim();
    const handleTextChange = (event) => {
        setText(event.target.value);
        setTtdGeneration((s) => ({
            generatedResponse: s?.generatedResponse ?? null,
            prompt: event.target.value,
        }));
    };
    const [onTextSubmitInProgess, setOnTextSubmitInProgess] = useState(false);
    const [rateLimits, setRateLimits] = useAtom(rateLimitsAtom);
    const onGenerate = async () => {
        if (prompt.length > MAX_PROMPT_LENGTH ||
            prompt.length < MIN_PROMPT_LENGTH ||
            onTextSubmitInProgess ||
            rateLimits?.rateLimitRemaining === 0 ||
            // means this is not a text-to-diagram dialog (needed for TS only)
            "__fallback" in rest) {
            if (prompt.length < MIN_PROMPT_LENGTH) {
                setError(new Error(`Prompt is too short (min ${MIN_PROMPT_LENGTH} characters)`));
            }
            if (prompt.length > MAX_PROMPT_LENGTH) {
                setError(new Error(`Prompt is too long (max ${MAX_PROMPT_LENGTH} characters)`));
            }
            return;
        }
        try {
            setOnTextSubmitInProgess(true);
            trackEvent("ai", "generate", "ttd");
            const { generatedResponse, error, rateLimit, rateLimitRemaining } = await rest.onTextSubmit(prompt);
            if (typeof generatedResponse === "string") {
                setTtdGeneration((s) => ({
                    generatedResponse,
                    prompt: s?.prompt ?? null,
                }));
            }
            if (isFiniteNumber(rateLimit) && isFiniteNumber(rateLimitRemaining)) {
                setRateLimits({ rateLimit, rateLimitRemaining });
            }
            if (error) {
                setError(error);
                return;
            }
            if (!generatedResponse) {
                setError(new Error("Generation failed"));
                return;
            }
            try {
                await convertMermaidToExcalidraw({
                    canvasRef: someRandomDivRef,
                    data,
                    mermaidToExcalidrawLib,
                    setError,
                    mermaidDefinition: generatedResponse,
                });
                trackEvent("ai", "mermaid parse success", "ttd");
            }
            catch (error) {
                console.info(`%cTTD mermaid render errror: ${error.message}`, "color: red");
                console.info(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nTTD mermaid definition render errror: ${error.message}`, "color: yellow");
                trackEvent("ai", "mermaid parse failed", "ttd");
                setError(new Error("Generated an invalid diagram :(. You may also try a different prompt."));
            }
        }
        catch (error) {
            let message = error.message;
            if (!message || message === "Failed to fetch") {
                message = "Request failed";
            }
            setError(new Error(message));
        }
        finally {
            setOnTextSubmitInProgess(false);
        }
    };
    const refOnGenerate = useRef(onGenerate);
    refOnGenerate.current = onGenerate;
    const [mermaidToExcalidrawLib, setMermaidToExcalidrawLib] = useState({
        loaded: false,
        api: import("@excalidraw/mermaid-to-excalidraw"),
    });
    useEffect(() => {
        const fn = async () => {
            await mermaidToExcalidrawLib.api;
            setMermaidToExcalidrawLib((prev) => ({ ...prev, loaded: true }));
        };
        fn();
    }, [mermaidToExcalidrawLib.api]);
    const data = useRef({ elements: [], files: null });
    const [error, setError] = useState(null);
    return (_jsx(Dialog, { className: "ttd-dialog", onCloseRequest: () => {
            app.setOpenDialog(null);
        }, size: 1200, title: false, ...rest, autofocus: false, children: _jsxs(TTDDialogTabs, { dialog: "ttd", tab: tab, children: ["__fallback" in rest && rest.__fallback ? (_jsx("p", { className: "dialog-mermaid-title", children: t("mermaid.title") })) : (_jsxs(TTDDialogTabTriggers, { children: [_jsx(TTDDialogTabTrigger, { tab: "text-to-diagram", children: _jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [t("labels.textToDiagram"), _jsx("div", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "1px 6px",
                                            marginLeft: "10px",
                                            fontSize: 10,
                                            borderRadius: "12px",
                                            background: "pink",
                                            color: "#000",
                                        }, children: "AI Beta" })] }) }), _jsx(TTDDialogTabTrigger, { tab: "mermaid", children: "Mermaid" })] })), _jsx(TTDDialogTab, { className: "ttd-dialog-content", tab: "mermaid", children: _jsx(MermaidToExcalidraw, { mermaidToExcalidrawLib: mermaidToExcalidrawLib }) }), !("__fallback" in rest) && (_jsxs(TTDDialogTab, { className: "ttd-dialog-content", tab: "text-to-diagram", children: [_jsx("div", { className: "ttd-dialog-desc", children: "Currently we use Mermaid as a middle step, so you'll get best results if you describe a diagram, workflow, flow chart, and similar." }), _jsxs(TTDDialogPanels, { children: [_jsx(TTDDialogPanel, { label: t("labels.prompt"), panelAction: {
                                        action: onGenerate,
                                        label: "Generate",
                                        icon: ArrowRightIcon,
                                    }, onTextSubmitInProgess: onTextSubmitInProgess, panelActionDisabled: prompt.length > MAX_PROMPT_LENGTH ||
                                        rateLimits?.rateLimitRemaining === 0, renderTopRight: () => {
                                        if (!rateLimits) {
                                            return null;
                                        }
                                        return (_jsxs("div", { className: "ttd-dialog-rate-limit", style: {
                                                fontSize: 12,
                                                marginLeft: "auto",
                                                color: rateLimits.rateLimitRemaining === 0
                                                    ? "var(--color-danger)"
                                                    : undefined,
                                            }, children: [rateLimits.rateLimitRemaining, " requests left today"] }));
                                    }, renderSubmitShortcut: () => _jsx(TTDDialogSubmitShortcut, {}), renderBottomRight: () => {
                                        if (typeof ttdGeneration?.generatedResponse === "string") {
                                            return (_jsxs("div", { className: "excalidraw-link", style: { marginLeft: "auto", fontSize: 14 }, onClick: () => {
                                                    if (typeof ttdGeneration?.generatedResponse ===
                                                        "string") {
                                                        saveMermaidDataToStorage(ttdGeneration.generatedResponse);
                                                        setAppState({
                                                            openDialog: { name: "ttd", tab: "mermaid" },
                                                        });
                                                    }
                                                }, children: ["View as Mermaid", _jsx(InlineIcon, { icon: ArrowRightIcon })] }));
                                        }
                                        const ratio = prompt.length / MAX_PROMPT_LENGTH;
                                        if (ratio > 0.8) {
                                            return (_jsxs("div", { style: {
                                                    marginLeft: "auto",
                                                    fontSize: 12,
                                                    fontFamily: "monospace",
                                                    color: ratio > 1 ? "var(--color-danger)" : undefined,
                                                }, children: ["Length: ", prompt.length, "/", MAX_PROMPT_LENGTH] }));
                                        }
                                        return null;
                                    }, children: _jsx(TTDDialogInput, { onChange: handleTextChange, input: text, placeholder: "Describe what you want to see...", onKeyboardSubmit: () => {
                                            refOnGenerate.current();
                                        } }) }), _jsx(TTDDialogPanel, { label: "Preview", panelAction: {
                                        action: () => {
                                            console.info("Panel action clicked");
                                            insertToEditor({ app, data });
                                        },
                                        label: "Insert",
                                        icon: ArrowRightIcon,
                                    }, children: _jsx(TTDDialogOutput, { canvasRef: someRandomDivRef, error: error, loaded: mermaidToExcalidrawLib.loaded }) })] })] }))] }) }));
});
