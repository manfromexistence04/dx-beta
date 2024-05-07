import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./TextInput.scss";
import { useState } from "react";
import { focusNearestParent } from "../utils";
import "./ProjectName.scss";
import { useExcalidrawContainer } from "./App";
import { KEYS } from "../keys";
export const ProjectName = (props) => {
    const { id } = useExcalidrawContainer();
    const [fileName, setFileName] = useState(props.value);
    const handleBlur = (event) => {
        if (!props.ignoreFocus) {
            focusNearestParent(event.target);
        }
        const value = event.target.value;
        if (value !== props.value) {
            props.onChange(value);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === KEYS.ENTER) {
            event.preventDefault();
            if (event.nativeEvent.isComposing || event.keyCode === 229) {
                return;
            }
            event.currentTarget.blur();
        }
    };
    return (_jsxs("div", { className: "ProjectName", children: [_jsx("label", { className: "ProjectName-label", htmlFor: "filename", children: `${props.label}:` }), _jsx("input", { type: "text", className: "TextInput", onBlur: handleBlur, onKeyDown: handleKeyDown, id: `${id}-filename`, value: fileName, onChange: (event) => setFileName(event.target.value) })] }));
};
