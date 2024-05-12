import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Spinner from "../Spinner";
const ErrorComp = ({ error }) => {
    return (_jsxs("div", { "data-testid": "ttd-dialog-output-error", className: "ttd-dialog-output-error", children: ["Error! ", _jsx("p", { children: error })] }));
};
export const TTDDialogOutput = ({ error, canvasRef, loaded, }) => {
    return (_jsxs("div", { className: "ttd-dialog-output-wrapper", children: [error && _jsx(ErrorComp, { error: error.message }), loaded ? (_jsx("div", { ref: canvasRef, style: { opacity: error ? "0.15" : 1 }, className: "ttd-dialog-output-canvas-container" })) : (_jsx(Spinner, { size: "2rem" }))] }));
};
