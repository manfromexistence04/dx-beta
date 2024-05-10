import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseIcon } from "../icons";
import "./FollowMode.scss";
const FollowMode = ({ height, width, userToFollow, onDisconnect, }) => {
    return (_jsx("div", { className: "follow-mode", style: { width, height }, children: _jsxs("div", { className: "follow-mode__badge", children: [_jsxs("div", { className: "follow-mode__badge__label", children: ["Following", " ", _jsx("span", { className: "follow-mode__badge__username", title: userToFollow.username, children: userToFollow.username })] }), _jsx("button", { onClick: onDisconnect, className: "follow-mode__disconnect-btn", children: CloseIcon })] }) }));
};
export default FollowMode;
