import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { t } from "../../i18n";
import { share } from "../icons";
import { Button } from "../Button";
import clsx from "clsx";
import "./LiveCollaborationTrigger.scss";
import { useUIAppState } from "../../context/ui-appState";
const LiveCollaborationTrigger = ({ isCollaborating, onSelect, ...rest }) => {
    const appState = useUIAppState();
    const showIconOnly = appState.width < 830;
    return (_jsxs(Button, { ...rest, className: clsx("collab-button", { active: isCollaborating }), type: "button", onSelect: onSelect, style: { position: "relative", width: showIconOnly ? undefined : "auto" }, title: t("labels.liveCollaboration"), children: [showIconOnly ? share : t("labels.share"), appState.collaborators.size > 0 && (_jsx("div", { className: "CollabButton-collaborators", children: appState.collaborators.size }))] }));
};
export default LiveCollaborationTrigger;
LiveCollaborationTrigger.displayName = "LiveCollaborationTrigger";
