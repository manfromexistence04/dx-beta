import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./UserList.scss";
import React, { useLayoutEffect } from "react";
import clsx from "clsx";
import { Tooltip } from "./Tooltip";
import { useExcalidrawActionManager } from "./App";
import * as Popover from "@radix-ui/react-popover";
import { Island } from "./Island";
import { searchIcon } from "./icons";
import { t } from "../i18n";
import { isShallowEqual } from "../utils";
import { supportsResizeObserver } from "../constants";
const DEFAULT_MAX_AVATARS = 4;
const SHOW_COLLABORATORS_FILTER_AT = 8;
const ConditionalTooltipWrapper = ({ shouldWrap, children, username, }) => shouldWrap ? (_jsx(Tooltip, { label: username || "Unknown user", children: children })) : (_jsx(React.Fragment, { children: children }));
const renderCollaborator = ({ actionManager, collaborator, socketId, withName = false, shouldWrapWithTooltip = false, isBeingFollowed, }) => {
    const data = {
        socketId,
        collaborator,
        withName,
        isBeingFollowed,
    };
    const avatarJSX = actionManager.renderAction("goToCollaborator", data);
    return (_jsx(ConditionalTooltipWrapper, { username: collaborator.username, shouldWrap: shouldWrapWithTooltip, children: avatarJSX }, socketId));
};
const collaboratorComparatorKeys = [
    "avatarUrl",
    "id",
    "socketId",
    "username",
    "isInCall",
    "isSpeaking",
    "isMuted",
];
export const UserList = React.memo(({ className, mobile, collaborators, userToFollow }) => {
    const actionManager = useExcalidrawActionManager();
    const uniqueCollaboratorsMap = new Map();
    collaborators.forEach((collaborator, socketId) => {
        const userId = (collaborator.id || socketId);
        uniqueCollaboratorsMap.set(
        // filter on user id, else fall back on unique socketId
        userId, { ...collaborator, socketId });
    });
    const uniqueCollaboratorsArray = Array.from(uniqueCollaboratorsMap.values()).filter((collaborator) => collaborator.username?.trim());
    const [searchTerm, setSearchTerm] = React.useState("");
    const userListWrapper = React.useRef(null);
    useLayoutEffect(() => {
        if (userListWrapper.current) {
            const updateMaxAvatars = (width) => {
                const maxAvatars = Math.max(1, Math.min(8, Math.floor(width / 38)));
                setMaxAvatars(maxAvatars);
            };
            updateMaxAvatars(userListWrapper.current.clientWidth);
            if (!supportsResizeObserver) {
                return;
            }
            const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    const { width } = entry.contentRect;
                    updateMaxAvatars(width);
                }
            });
            resizeObserver.observe(userListWrapper.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, []);
    const [maxAvatars, setMaxAvatars] = React.useState(DEFAULT_MAX_AVATARS);
    const searchTermNormalized = searchTerm.trim().toLowerCase();
    const filteredCollaborators = searchTermNormalized
        ? uniqueCollaboratorsArray.filter((collaborator) => collaborator.username?.toLowerCase().includes(searchTerm))
        : uniqueCollaboratorsArray;
    const firstNCollaborators = uniqueCollaboratorsArray.slice(0, maxAvatars - 1);
    const firstNAvatarsJSX = firstNCollaborators.map((collaborator) => renderCollaborator({
        actionManager,
        collaborator,
        socketId: collaborator.socketId,
        shouldWrapWithTooltip: true,
        isBeingFollowed: collaborator.socketId === userToFollow,
    }));
    return mobile ? (_jsx("div", { className: clsx("UserList UserList_mobile", className), children: uniqueCollaboratorsArray.map((collaborator) => renderCollaborator({
            actionManager,
            collaborator,
            socketId: collaborator.socketId,
            shouldWrapWithTooltip: true,
            isBeingFollowed: collaborator.socketId === userToFollow,
        })) })) : (_jsx("div", { className: "UserList-wrapper", ref: userListWrapper, children: _jsxs("div", { className: clsx("UserList", className), style: { [`--max-avatars`]: maxAvatars }, children: [firstNAvatarsJSX, uniqueCollaboratorsArray.length > maxAvatars - 1 && (_jsxs(Popover.Root, { onOpenChange: (isOpen) => {
                        if (!isOpen) {
                            setSearchTerm("");
                        }
                    }, children: [_jsxs(Popover.Trigger, { className: "UserList__more", children: ["+", uniqueCollaboratorsArray.length - maxAvatars + 1] }), _jsx(Popover.Content, { style: {
                                zIndex: 2,
                                width: "15rem",
                                textAlign: "left",
                            }, align: "end", sideOffset: 10, children: _jsxs(Island, { style: { overflow: "hidden" }, children: [uniqueCollaboratorsArray.length >=
                                        SHOW_COLLABORATORS_FILTER_AT && (_jsxs("div", { className: "UserList__search-wrapper", children: [searchIcon, _jsx("input", { className: "UserList__search", type: "text", placeholder: t("userList.search.placeholder"), value: searchTerm, onChange: (e) => {
                                                    setSearchTerm(e.target.value);
                                                } })] })), _jsxs("div", { className: "dropdown-menu UserList__collaborators", children: [filteredCollaborators.length === 0 && (_jsx("div", { className: "UserList__collaborators__empty", children: t("userList.search.empty") })), _jsx("div", { className: "UserList__hint", children: t("userList.hint.text") }), filteredCollaborators.map((collaborator) => renderCollaborator({
                                                actionManager,
                                                collaborator,
                                                socketId: collaborator.socketId,
                                                withName: true,
                                                isBeingFollowed: collaborator.socketId === userToFollow,
                                            }))] })] }) })] }))] }) }));
}, (prev, next) => {
    if (prev.collaborators.size !== next.collaborators.size ||
        prev.mobile !== next.mobile ||
        prev.className !== next.className ||
        prev.userToFollow !== next.userToFollow) {
        return false;
    }
    const nextCollaboratorSocketIds = next.collaborators.keys();
    for (const [socketId, collaborator] of prev.collaborators) {
        const nextCollaborator = next.collaborators.get(socketId);
        if (!nextCollaborator ||
            // this checks order of collaborators in the map is the same
            // as previous render
            socketId !== nextCollaboratorSocketIds.next().value ||
            !isShallowEqual(collaborator, nextCollaborator, collaboratorComparatorKeys)) {
            return false;
        }
    }
    return true;
});
