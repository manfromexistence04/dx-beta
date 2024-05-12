import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { t } from "../i18n";
import { useExcalidrawContainer } from "./App";
export const Section = ({ heading, children, ...props }) => {
    const { id } = useExcalidrawContainer();
    const header = (_jsx("h2", { className: "visually-hidden", id: `${id}-${heading}-title`, children: t(`headings.${heading}`) }));
    return (_jsx("section", { ...props, "aria-labelledby": `${id}-${heading}-title`, children: typeof children === "function" ? (children(header)) : (_jsxs(_Fragment, { children: [header, children] })) }));
};
