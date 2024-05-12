import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { t } from "../i18n";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import clsx from "clsx";
import { THEME } from "../constants";
export const LoadingMessage = ({ delay, theme, }) => {
    const [isWaiting, setIsWaiting] = useState(!!delay);
    useEffect(() => {
        if (!delay) {
            return;
        }
        const timer = setTimeout(() => {
            setIsWaiting(false);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);
    if (isWaiting) {
        return null;
    }
    return (_jsxs("div", { className: clsx("LoadingMessage", {
            "LoadingMessage--dark": theme === THEME.DARK,
        }), children: [_jsx("div", { children: _jsx(Spinner, {}) }), _jsx("div", { className: "LoadingMessage-text", children: t("labels.loadingScene") })] }));
};
