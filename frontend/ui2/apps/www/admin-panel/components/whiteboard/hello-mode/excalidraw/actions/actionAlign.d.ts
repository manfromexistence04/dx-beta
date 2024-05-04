/// <reference types="react" />
import { ExcalidrawElement } from "../element/types";
import { AppClassProperties, AppState, UIAppState } from "../types";
export declare const actionAlignTop: {
    name: "alignTop";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionAlignBottom: {
    name: "alignBottom";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionAlignLeft: {
    name: "alignLeft";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionAlignRight: {
    name: "alignRight";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionAlignVerticallyCentered: {
    name: "alignVerticallyCentered";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: undefined;
};
export declare const actionAlignHorizontallyCentered: {
    name: "alignHorizontallyCentered";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: UIAppState, _: unknown, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        appState: Readonly<AppState>;
        elements: ExcalidrawElement[];
        storeAction: import("../store").StoreActionType;
    };
    PanelComponent: ({ elements, appState, updateData, app }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: undefined;
};
