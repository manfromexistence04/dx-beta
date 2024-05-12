import { NonDeletedExcalidrawElement } from "../element/types";
import { AppState } from "../types";
import Scene from "./Scene";
export declare class Renderer {
    private scene;
    constructor(scene: Scene);
    getRenderableElements: ((opts: {
        zoom: AppState["zoom"];
        offsetLeft: AppState["offsetLeft"];
        offsetTop: AppState["offsetTop"];
        scrollX: AppState["scrollX"];
        scrollY: AppState["scrollY"];
        height: AppState["height"];
        width: AppState["width"];
        editingElement: AppState["editingElement"];
        pendingImageElementId: AppState["pendingImageElementId"];
        versionNonce: ReturnType<InstanceType<typeof Scene>["getVersionNonce"]>;
    }) => {
        elementsMap: Map<string, NonDeletedExcalidrawElement> & import("../utility-types").MakeBrand<"NonDeletedElementsMap"> & import("../utility-types").MakeBrand<"RenderableElementsMap">;
        visibleElements: readonly NonDeletedExcalidrawElement[];
    }) & {
        clear: () => void;
    };
    destroy(): void;
}
