import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useRef } from "react";
import { isShallowEqual, sceneCoordsToViewportCoords } from "../../utils";
import { CURSOR_TYPE } from "../../constants";
import { t } from "../../i18n";
import { isRenderThrottlingEnabled } from "../../reactUtils";
import { renderInteractiveScene } from "../../renderer/interactiveScene";
const InteractiveCanvas = (props) => {
    const isComponentMounted = useRef(false);
    useEffect(() => {
        if (!isComponentMounted.current) {
            isComponentMounted.current = true;
            return;
        }
        const remotePointerButton = new Map();
        const remotePointerViewportCoords = new Map();
        const remoteSelectedElementIds = new Map();
        const remotePointerUsernames = new Map();
        const remotePointerUserStates = new Map();
        props.appState.collaborators.forEach((user, socketId) => {
            if (user.selectedElementIds) {
                for (const id of Object.keys(user.selectedElementIds)) {
                    if (!remoteSelectedElementIds.has(id)) {
                        remoteSelectedElementIds.set(id, []);
                    }
                    remoteSelectedElementIds.get(id).push(socketId);
                }
            }
            if (!user.pointer || user.pointer.renderCursor === false) {
                return;
            }
            if (user.username) {
                remotePointerUsernames.set(socketId, user.username);
            }
            if (user.userState) {
                remotePointerUserStates.set(socketId, user.userState);
            }
            remotePointerViewportCoords.set(socketId, sceneCoordsToViewportCoords({
                sceneX: user.pointer.x,
                sceneY: user.pointer.y,
            }, props.appState));
            remotePointerButton.set(socketId, user.button);
        });
        const selectionColor = (props.containerRef?.current &&
            getComputedStyle(props.containerRef.current).getPropertyValue("--color-selection")) ||
            "#6965db";
        renderInteractiveScene({
            canvas: props.canvas,
            elementsMap: props.elementsMap,
            visibleElements: props.visibleElements,
            selectedElements: props.selectedElements,
            scale: window.devicePixelRatio,
            appState: props.appState,
            renderConfig: {
                remotePointerViewportCoords,
                remotePointerButton,
                remoteSelectedElementIds,
                remotePointerUsernames,
                remotePointerUserStates,
                selectionColor,
                renderScrollbars: false,
            },
            device: props.device,
            callback: props.renderInteractiveSceneCallback,
        }, isRenderThrottlingEnabled());
    });
    return (_jsx("canvas", { className: "excalidraw__canvas interactive", style: {
            width: props.appState.width,
            height: props.appState.height,
            cursor: props.appState.viewModeEnabled
                ? CURSOR_TYPE.GRAB
                : CURSOR_TYPE.AUTO,
        }, width: props.appState.width * props.scale, height: props.appState.height * props.scale, ref: props.handleCanvasRef, onContextMenu: props.onContextMenu, onPointerMove: props.onPointerMove, onPointerUp: props.onPointerUp, onPointerCancel: props.onPointerCancel, onTouchMove: props.onTouchMove, onPointerDown: props.onPointerDown, onDoubleClick: props.appState.viewModeEnabled ? undefined : props.onDoubleClick, children: t("labels.drawingCanvas") }));
};
const getRelevantAppStateProps = (appState) => ({
    zoom: appState.zoom,
    scrollX: appState.scrollX,
    scrollY: appState.scrollY,
    width: appState.width,
    height: appState.height,
    viewModeEnabled: appState.viewModeEnabled,
    editingGroupId: appState.editingGroupId,
    editingLinearElement: appState.editingLinearElement,
    selectedElementIds: appState.selectedElementIds,
    frameToHighlight: appState.frameToHighlight,
    offsetLeft: appState.offsetLeft,
    offsetTop: appState.offsetTop,
    theme: appState.theme,
    pendingImageElementId: appState.pendingImageElementId,
    selectionElement: appState.selectionElement,
    selectedGroupIds: appState.selectedGroupIds,
    selectedLinearElement: appState.selectedLinearElement,
    multiElement: appState.multiElement,
    isBindingEnabled: appState.isBindingEnabled,
    suggestedBindings: appState.suggestedBindings,
    isRotating: appState.isRotating,
    elementsToHighlight: appState.elementsToHighlight,
    collaborators: appState.collaborators,
    activeEmbeddable: appState.activeEmbeddable,
    snapLines: appState.snapLines,
    zenModeEnabled: appState.zenModeEnabled,
});
const areEqual = (prevProps, nextProps) => {
    // This could be further optimised if needed, as we don't have to render interactive canvas on each scene mutation
    if (prevProps.selectionNonce !== nextProps.selectionNonce ||
        prevProps.versionNonce !== nextProps.versionNonce ||
        prevProps.scale !== nextProps.scale ||
        // we need to memoize on elementsMap because they may have renewed
        // even if versionNonce didn't change (e.g. we filter elements out based
        // on appState)
        prevProps.elementsMap !== nextProps.elementsMap ||
        prevProps.visibleElements !== nextProps.visibleElements ||
        prevProps.selectedElements !== nextProps.selectedElements) {
        return false;
    }
    // Comparing the interactive appState for changes in case of some edge cases
    return isShallowEqual(
    // asserting AppState because we're being passed the whole AppState
    // but resolve to only the InteractiveCanvas-relevant props
    getRelevantAppStateProps(prevProps.appState), getRelevantAppStateProps(nextProps.appState));
};
export default React.memo(InteractiveCanvas, areEqual);
