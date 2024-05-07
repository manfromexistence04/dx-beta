// -----------------------------------------------------------------------------
// ExcalidrawImageElement & related helpers
// -----------------------------------------------------------------------------
import { MIME_TYPES, SVG_NS } from "../constants";
import { isInitializedImageElement } from "./typeChecks";
export const loadHTMLImageElement = (dataURL) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (error) => {
            reject(error);
        };
        image.src = dataURL;
    });
};
/** NOTE: updates cache even if already populated with given image. Thus,
 * you should filter out the images upstream if you want to optimize this. */
export const updateImageCache = async ({ fileIds, files, imageCache, }) => {
    const updatedFiles = new Map();
    const erroredFiles = new Map();
    await Promise.all(fileIds.reduce((promises, fileId) => {
        const fileData = files[fileId];
        if (fileData && !updatedFiles.has(fileId)) {
            updatedFiles.set(fileId, true);
            return promises.concat((async () => {
                try {
                    if (fileData.mimeType === MIME_TYPES.binary) {
                        throw new Error("Only images can be added to ImageCache");
                    }
                    const imagePromise = loadHTMLImageElement(fileData.dataURL);
                    const data = {
                        image: imagePromise,
                        mimeType: fileData.mimeType,
                    };
                    // store the promise immediately to indicate there's an in-progress
                    // initialization
                    imageCache.set(fileId, data);
                    const image = await imagePromise;
                    imageCache.set(fileId, { ...data, image });
                }
                catch (error) {
                    erroredFiles.set(fileId, true);
                }
            })());
        }
        return promises;
    }, []));
    return {
        imageCache,
        /** includes errored files because they cache was updated nonetheless */
        updatedFiles,
        /** files that failed when creating HTMLImageElement */
        erroredFiles,
    };
};
export const getInitializedImageElements = (elements) => elements.filter((element) => isInitializedImageElement(element));
export const isHTMLSVGElement = (node) => {
    // lower-casing due to XML/HTML convention differences
    // https://johnresig.com/blog/nodename-case-sensitivity
    return node?.nodeName.toLowerCase() === "svg";
};
export const normalizeSVG = async (SVGString) => {
    const doc = new DOMParser().parseFromString(SVGString, MIME_TYPES.svg);
    const svg = doc.querySelector("svg");
    const errorNode = doc.querySelector("parsererror");
    if (errorNode || !isHTMLSVGElement(svg)) {
        throw new Error("Invalid SVG");
    }
    else {
        if (!svg.hasAttribute("xmlns")) {
            svg.setAttribute("xmlns", SVG_NS);
        }
        if (!svg.hasAttribute("width") || !svg.hasAttribute("height")) {
            const viewBox = svg.getAttribute("viewBox");
            let width = svg.getAttribute("width") || "50";
            let height = svg.getAttribute("height") || "50";
            if (viewBox) {
                const match = viewBox.match(/\d+ +\d+ +(\d+) +(\d+)/);
                if (match) {
                    [, width, height] = match;
                }
            }
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
        }
        return svg.outerHTML;
    }
};
