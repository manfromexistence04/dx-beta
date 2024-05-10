import { jsx as _jsx } from "react/jsx-runtime";
import "./Stack.scss";
import { forwardRef } from "react";
import clsx from "clsx";
const RowStack = forwardRef(({ children, gap, align, justifyContent, className, style }, ref) => {
    return (_jsx("div", { className: clsx("Stack Stack_horizontal", className), style: {
            "--gap": gap,
            alignItems: align,
            justifyContent,
            ...style,
        }, ref: ref, children: children }));
});
const ColStack = forwardRef(({ children, gap, align, justifyContent, className, style }, ref) => {
    return (_jsx("div", { className: clsx("Stack Stack_vertical", className), style: {
            "--gap": gap,
            justifyItems: align,
            justifyContent,
            ...style,
        }, ref: ref, children: children }));
});
export default {
    Row: RowStack,
    Col: ColStack,
};
