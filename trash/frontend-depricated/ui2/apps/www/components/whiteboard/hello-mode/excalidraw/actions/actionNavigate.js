import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getClientColor } from "../clients";
import { Avatar } from "../components/Avatar";
import { eyeIcon, microphoneIcon, microphoneMutedIcon, } from "../components/icons";
import { t } from "../i18n";
import { StoreAction } from "../store";
import { register } from "./register";
import clsx from "clsx";
export const actionGoToCollaborator = register({
    name: "goToCollaborator",
    label: "Go to a collaborator",
    viewMode: true,
    trackEvent: { category: "collab" },
    perform: (_elements, appState, collaborator) => {
        if (!collaborator.socketId ||
            appState.userToFollow?.socketId === collaborator.socketId ||
            collaborator.isCurrentUser) {
            return {
                appState: {
                    ...appState,
                    userToFollow: null,
                },
                storeAction: StoreAction.NONE,
            };
        }
        return {
            appState: {
                ...appState,
                userToFollow: {
                    socketId: collaborator.socketId,
                    username: collaborator.username || "",
                },
                // Close mobile menu
                openMenu: appState.openMenu === "canvas" ? null : appState.openMenu,
            },
            storeAction: StoreAction.NONE,
        };
    },
    PanelComponent: ({ updateData, data, appState }) => {
        const { socketId, collaborator, withName, isBeingFollowed } = data;
        const background = getClientColor(socketId, collaborator);
        const statusClassNames = clsx({
            "is-followed": isBeingFollowed,
            "is-current-user": collaborator.isCurrentUser === true,
            "is-speaking": collaborator.isSpeaking,
            "is-in-call": collaborator.isInCall,
            "is-muted": collaborator.isMuted,
        });
        const statusIconJSX = collaborator.isInCall ? (collaborator.isSpeaking ? (_jsxs("div", { className: "UserList__collaborator-status-icon-speaking-indicator", title: t("userList.hint.isSpeaking"), children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {})] })) : collaborator.isMuted ? (_jsx("div", { className: "UserList__collaborator-status-icon-microphone-muted", title: t("userList.hint.micMuted"), children: microphoneMutedIcon })) : (_jsx("div", { title: t("userList.hint.inCall"), children: microphoneIcon }))) : null;
        return withName ? (_jsxs("div", { className: `dropdown-menu-item dropdown-menu-item-base UserList__collaborator ${statusClassNames}`, style: { [`--avatar-size`]: "1.5rem" }, onClick: () => updateData(collaborator), children: [_jsx(Avatar, { color: background, onClick: () => { }, name: collaborator.username || "", src: collaborator.avatarUrl, className: statusClassNames }), _jsx("div", { className: "UserList__collaborator-name", children: collaborator.username }), _jsxs("div", { className: "UserList__collaborator-status-icons", "aria-hidden": true, children: [isBeingFollowed && (_jsx("div", { className: "UserList__collaborator-status-icon-is-followed", title: t("userList.hint.followStatus"), children: eyeIcon })), statusIconJSX] })] })) : (_jsxs("div", { className: `UserList__collaborator UserList__collaborator--avatar-only ${statusClassNames}`, children: [_jsx(Avatar, { color: background, onClick: () => {
                        updateData(collaborator);
                    }, name: collaborator.username || "", src: collaborator.avatarUrl, className: statusClassNames }), statusIconJSX && (_jsx("div", { className: "UserList__collaborator-status-icon", children: statusIconJSX }))] }));
    },
});
