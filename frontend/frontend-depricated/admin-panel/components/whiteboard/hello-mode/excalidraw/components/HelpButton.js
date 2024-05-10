import { jsx as _jsx } from "react/jsx-runtime";
import { t } from "../i18n";
import { HelpIcon } from "./icons";
export const HelpButton = (props) => (_jsx("button", { className: "help-icon", onClick: props.onClick, type: "button", title: `${t("helpDialog.title")} — ?`, "aria-label": t("helpDialog.title"), children: HelpIcon }));
