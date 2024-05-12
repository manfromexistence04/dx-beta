import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import clsx from "clsx";
import "./FilledButton.scss";
import { AbortError } from "../errors";
import Spinner from "./Spinner";
import { isPromiseLike } from "../utils";
export const FilledButton = forwardRef(({ children, icon, onClick, label, variant = "filled", color = "primary", size = "medium", fullWidth, className, }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const _onClick = async (event) => {
        const ret = onClick?.(event);
        if (isPromiseLike(ret)) {
            try {
                setIsLoading(true);
                await ret;
            }
            catch (error) {
                if (!(error instanceof AbortError)) {
                    throw error;
                }
                else {
                    console.warn(error);
                }
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (_jsx("button", { className: clsx("ExcButton", `ExcButton--color-${color}`, `ExcButton--variant-${variant}`, `ExcButton--size-${size}`, { "ExcButton--fullWidth": fullWidth }, className), onClick: _onClick, type: "button", "aria-label": label, ref: ref, disabled: isLoading, children: _jsxs("div", { className: "ExcButton__contents", children: [isLoading && _jsx(Spinner, {}), icon && (_jsx("div", { className: "ExcButton__icon", "aria-hidden": true, children: icon })), variant !== "icon" && (children ?? label)] }) }));
});
