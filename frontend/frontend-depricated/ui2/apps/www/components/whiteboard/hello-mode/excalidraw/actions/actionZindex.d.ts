/// <reference types="react" />
export declare const actionSendBackward: {
    name: "sendBackward";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../element/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        storeAction: import("../store").StoreActionType;
    };
    keyPriority: number;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionBringForward: {
    name: "bringForward";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../element/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        storeAction: import("../store").StoreActionType;
    };
    keyPriority: number;
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionSendToBack: {
    name: "sendToBack";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../element/types").ExcalidrawElement[] | import("../element/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionBringToFront: {
    name: "bringToFront";
    label: string;
    icon: JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("../element/types").OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../element/types").ExcalidrawElement[] | import("../element/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        storeAction: import("../store").StoreActionType;
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ updateData, appState }: import("./types").PanelComponentProps) => JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
