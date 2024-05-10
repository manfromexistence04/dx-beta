import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { TextField } from "./TextField";
import { MagicIcon, OpenAIIcon } from "./icons";
import { FilledButton } from "./FilledButton";
import { CheckboxItem } from "./CheckboxItem";
import { KEYS } from "../keys";
import { useUIAppState } from "../context/ui-appState";
import { InlineIcon } from "./InlineIcon";
import { Paragraph } from "./Paragraph";
import "./MagicSettings.scss";
import TTDDialogTabs from "./TTDDialog/TTDDialogTabs";
import { TTDDialogTab } from "./TTDDialog/TTDDialogTab";
export const MagicSettings = (props) => {
    const [keyInputValue, setKeyInputValue] = useState(props.openAIKey || "");
    const [shouldPersist, setShouldPersist] = useState(props.isPersisted);
    const appState = useUIAppState();
    const onConfirm = () => {
        props.onConfirm(keyInputValue.trim(), shouldPersist);
    };
    if (appState.openDialog?.name !== "settings") {
        return null;
    }
    return (_jsx(Dialog, { onCloseRequest: () => {
            props.onClose();
            props.onConfirm(keyInputValue.trim(), shouldPersist);
        }, title: _jsxs("div", { style: { display: "flex" }, children: ["Wireframe to Code (AI)", " ", _jsx("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.1rem 0.5rem",
                        marginLeft: "1rem",
                        fontSize: 14,
                        borderRadius: "12px",
                        color: "#000",
                        background: "pink",
                    }, children: "Experimental" })] }), className: "MagicSettings", autofocus: false, children: _jsx(TTDDialogTabs, { dialog: "settings", tab: appState.openDialog.tab, children: _jsxs(TTDDialogTab
            //  className="ttd-dialog-content"
            , { 
                //  className="ttd-dialog-content"
                tab: "diagram-to-code", children: [_jsxs(Paragraph, { children: ["For the diagram-to-code feature we use", " ", _jsx(InlineIcon, { icon: OpenAIIcon }), "OpenAI."] }), _jsxs(Paragraph, { children: ["While the OpenAI API is in beta, its use is strictly limited \u2014 as such we require you use your own API key. You can create an", " ", _jsx("a", { href: "https://platform.openai.com/login?launch", rel: "noopener noreferrer", target: "_blank", children: "OpenAI account" }), ", add a small credit (5 USD minimum), and", " ", _jsx("a", { href: "https://platform.openai.com/api-keys", rel: "noopener noreferrer", target: "_blank", children: "generate your own API key" }), "."] }), _jsx(Paragraph, { children: "Your OpenAI key does not leave the browser, and you can also set your own limit in your OpenAI account dashboard if needed." }), _jsx(TextField, { isRedacted: true, value: keyInputValue, placeholder: "Paste your API key here", label: "OpenAI API key", onChange: (value) => {
                            setKeyInputValue(value);
                            props.onChange(value.trim(), shouldPersist);
                        }, selectOnRender: true, onKeyDown: (event) => event.key === KEYS.ENTER && onConfirm() }), _jsx(Paragraph, { children: "By default, your API token is not persisted anywhere so you'll need to insert it again after reload. But, you can persist locally in your browser below." }), _jsx(CheckboxItem, { checked: shouldPersist, onChange: setShouldPersist, children: "Persist API key in browser storage" }), _jsxs(Paragraph, { children: ["Once API key is set, you can use the ", _jsx(InlineIcon, { icon: MagicIcon }), " ", "tool to wrap your elements in a frame that will then allow you to turn it into code. This dialog can be accessed using the", " ", _jsx("b", { children: "AI Settings" }), " ", _jsx(InlineIcon, { icon: OpenAIIcon }), "."] }), _jsx(FilledButton, { className: "MagicSettings__confirm", size: "large", label: "Confirm", onClick: onConfirm })] }) }) }));
};
