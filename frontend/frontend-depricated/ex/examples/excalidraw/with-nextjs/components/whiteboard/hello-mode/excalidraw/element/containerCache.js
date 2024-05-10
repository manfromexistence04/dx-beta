export const originalContainerCache = {};
export const updateOriginalContainerCache = (id, height) => {
    const data = originalContainerCache[id] || (originalContainerCache[id] = { height });
    data.height = height;
    return data;
};
export const resetOriginalContainerCache = (id) => {
    if (originalContainerCache[id]) {
        delete originalContainerCache[id];
    }
};
export const getOriginalContainerHeightFromCache = (id) => {
    return originalContainerCache[id]?.height ?? null;
};
