import { orderByFractionalIndex, syncInvalidIndices } from "../fractionalIndex";
import { arrayToMap } from "../utils";
const shouldDiscardRemoteElement = (localAppState, local, remote) => {
    if (local &&
        // local element is being edited
        (local.id === localAppState.editingElement?.id ||
            local.id === localAppState.resizingElement?.id ||
            local.id === localAppState.draggingElement?.id || // TODO: Is this still valid? As draggingElement is selection element, which is never part of the elements array
            // local element is newer
            local.version > remote.version ||
            // resolve conflicting edits deterministically by taking the one with
            // the lowest versionNonce
            (local.version === remote.version &&
                local.versionNonce < remote.versionNonce))) {
        return true;
    }
    return false;
};
export const reconcileElements = (localElements, remoteElements, localAppState) => {
    const localElementsMap = arrayToMap(localElements);
    const reconciledElements = [];
    const added = new Set();
    // process remote elements
    for (const remoteElement of remoteElements) {
        if (!added.has(remoteElement.id)) {
            const localElement = localElementsMap.get(remoteElement.id);
            const discardRemoteElement = shouldDiscardRemoteElement(localAppState, localElement, remoteElement);
            if (localElement && discardRemoteElement) {
                reconciledElements.push(localElement);
                added.add(localElement.id);
            }
            else {
                reconciledElements.push(remoteElement);
                added.add(remoteElement.id);
            }
        }
    }
    // process remaining local elements
    for (const localElement of localElements) {
        if (!added.has(localElement.id)) {
            reconciledElements.push(localElement);
            added.add(localElement.id);
        }
    }
    const orderedElements = orderByFractionalIndex(reconciledElements);
    // de-duplicate indices
    syncInvalidIndices(orderedElements);
    return orderedElements;
};
