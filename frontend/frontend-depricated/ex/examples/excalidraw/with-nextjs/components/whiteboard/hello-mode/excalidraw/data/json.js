import { fileOpen, fileSave } from "./filesystem";
import { cleanAppStateForExport, clearAppStateForDatabase } from "../appState";
import { DEFAULT_FILENAME, EXPORT_DATA_TYPES, EXPORT_SOURCE, MIME_TYPES, VERSIONS, } from "../constants";
import { clearElementsForDatabase, clearElementsForExport } from "../element";
import { isImageFileHandle, loadFromBlob, normalizeFile } from "./blob";
/**
 * Strips out files which are only referenced by deleted elements
 */
const filterOutDeletedFiles = (elements, files) => {
    const nextFiles = {};
    for (const element of elements) {
        if (!element.isDeleted &&
            "fileId" in element &&
            element.fileId &&
            files[element.fileId]) {
            nextFiles[element.fileId] = files[element.fileId];
        }
    }
    return nextFiles;
};
export const serializeAsJSON = (elements, appState, files, type) => {
    const data = {
        type: EXPORT_DATA_TYPES.excalidraw,
        version: VERSIONS.excalidraw,
        source: EXPORT_SOURCE,
        elements: type === "local"
            ? clearElementsForExport(elements)
            : clearElementsForDatabase(elements),
        appState: type === "local"
            ? cleanAppStateForExport(appState)
            : clearAppStateForDatabase(appState),
        files: type === "local"
            ? filterOutDeletedFiles(elements, files)
            : // will be stripped from JSON
                undefined,
    };
    return JSON.stringify(data, null, 2);
};
export const saveAsJSON = async (elements, appState, files, 
/** filename */
name = appState.name || DEFAULT_FILENAME) => {
    const serialized = serializeAsJSON(elements, appState, files, "local");
    const blob = new Blob([serialized], {
        type: MIME_TYPES.excalidraw,
    });
    const fileHandle = await fileSave(blob, {
        name,
        extension: "excalidraw",
        description: "Excalidraw file",
        fileHandle: isImageFileHandle(appState.fileHandle)
            ? null
            : appState.fileHandle,
    });
    return { fileHandle };
};
export const loadFromJSON = async (localAppState, localElements) => {
    const file = await fileOpen({
        description: "Excalidraw files",
        // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
        // gets resolved. Else, iOS users cannot open `.excalidraw` files.
        // extensions: ["json", "excalidraw", "png", "svg"],
    });
    return loadFromBlob(await normalizeFile(file), localAppState, localElements, file.handle);
};
export const isValidExcalidrawData = (data) => {
    return (data?.type === EXPORT_DATA_TYPES.excalidraw &&
        (!data.elements ||
            (Array.isArray(data.elements) &&
                (!data.appState || typeof data.appState === "object"))));
};
export const isValidLibrary = (json) => {
    return (typeof json === "object" &&
        json &&
        json.type === EXPORT_DATA_TYPES.excalidrawLibrary &&
        (json.version === 1 || json.version === 2));
};
export const serializeLibraryAsJSON = (libraryItems) => {
    const data = {
        type: EXPORT_DATA_TYPES.excalidrawLibrary,
        version: VERSIONS.excalidrawLibrary,
        source: EXPORT_SOURCE,
        libraryItems,
    };
    return JSON.stringify(data, null, 2);
};
export const saveLibraryAsJSON = async (libraryItems) => {
    const serialized = serializeLibraryAsJSON(libraryItems);
    await fileSave(new Blob([serialized], {
        type: MIME_TYPES.excalidrawlib,
    }), {
        name: "library",
        extension: "excalidrawlib",
        description: "Excalidraw library file",
    });
};
