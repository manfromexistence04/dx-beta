/// <reference types="react" />
import { ExcalidrawElement } from "../element/types";
import { AppState } from "../types";
export declare const actionDuplicateSelection: {
    name: "duplicateSelection";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, formData: any, app: import("../types").AppClassProperties) => false | {
        storeAction: import("../store").StoreActionType;
        elements?: readonly ExcalidrawElement[] | null | undefined;
        appState?: import("../utility-types").MarkOptional<AppState, "width" | "height" | "offsetTop" | "offsetLeft"> | null | undefined;
        files?: import("../types").BinaryFiles | null | undefined;
        replaceFiles?: boolean | undefined;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
