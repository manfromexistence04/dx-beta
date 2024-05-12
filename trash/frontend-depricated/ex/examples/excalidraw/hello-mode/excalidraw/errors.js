export class CanvasError extends Error {
    constructor(message = "Couldn't export canvas.", name = "CANVAS_ERROR") {
        super();
        this.name = name;
        this.message = message;
    }
}
export class AbortError extends DOMException {
    constructor(message = "Request Aborted") {
        super(message, "AbortError");
    }
}
export class ImageSceneDataError extends Error {
    code;
    constructor(message = "Image Scene Data Error", code = "IMAGE_SCENE_DATA_ERROR") {
        super(message);
        this.name = "EncodingError";
        this.code = code;
    }
}
export class InvalidFractionalIndexError extends Error {
    code = "ELEMENT_HAS_INVALID_INDEX";
}
