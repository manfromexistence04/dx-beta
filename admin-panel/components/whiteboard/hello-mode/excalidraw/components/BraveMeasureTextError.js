import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Trans from "./Trans";
const BraveMeasureTextError = () => {
    return (_jsxs("div", { "data-testid": "brave-measure-text-error", children: [_jsx("p", { children: _jsx(Trans, { i18nKey: "errors.brave_measure_text_error.line1", bold: (el) => _jsx("span", { style: { fontWeight: 600 }, children: el }) }) }), _jsx("p", { children: _jsx(Trans, { i18nKey: "errors.brave_measure_text_error.line2", bold: (el) => _jsx("span", { style: { fontWeight: 600 }, children: el }) }) }), _jsx("p", { children: _jsx(Trans, { i18nKey: "errors.brave_measure_text_error.line3", link: (el) => (_jsx("a", { href: "http://docs.excalidraw.com/docs/@excalidraw/excalidraw/faq#turning-off-aggresive-block-fingerprinting-in-brave-browser", children: el })) }) }), _jsx("p", { children: _jsx(Trans, { i18nKey: "errors.brave_measure_text_error.line4", issueLink: (el) => (_jsx("a", { href: "https://github.com/excalidraw/excalidraw/issues/new", children: el })), discordLink: (el) => _jsxs("a", { href: "https://discord.gg/UexuTaE", children: [el, "."] }) }) })] }));
};
export default BraveMeasureTextError;
