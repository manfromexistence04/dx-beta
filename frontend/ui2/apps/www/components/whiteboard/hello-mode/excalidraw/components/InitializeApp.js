import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { LoadingMessage } from "./LoadingMessage";
import { defaultLang, languages, setLanguage } from "../i18n";
export const InitializeApp = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const updateLang = async () => {
            await setLanguage(currentLang);
            setLoading(false);
        };
        const currentLang = languages.find((lang) => lang.code === props.langCode) || defaultLang;
        updateLang();
    }, [props.langCode]);
    return loading ? _jsx(LoadingMessage, { theme: props.theme }) : props.children;
};
