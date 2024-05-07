/// <reference types="react" />
import { ExcalidrawElement, OrderedExcalidrawElement } from "../element/types";
import { AppClassProperties, AppState } from "../types";
export declare const actionGroup: {
  name: "group";
  label: string;
  icon: (appState: import("../types").UIAppState) => JSX.Element;
  trackEvent: {
    category: "element";
  };
  perform: (
    elements: readonly OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: AppClassProperties,
  ) => {
    appState: Readonly<AppState>;
    elements: readonly OrderedExcalidrawElement[];
    storeAction: import("../store").StoreActionType;
  };
  predicate: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    _: import("../types").ExcalidrawProps,
    app: AppClassProperties,
  ) => boolean;
  keyTest: (
    event: KeyboardEvent | import("react").KeyboardEvent<Element>,
  ) => boolean;
  PanelComponent: ({
    elements,
    appState,
    updateData,
    app,
  }: import("./types").PanelComponentProps) => JSX.Element;
} & {
  keyTest?:
    | ((
        event: KeyboardEvent | import("react").KeyboardEvent<Element>,
      ) => boolean)
    | undefined;
};
export declare const actionUngroup: {
  name: "ungroup";
  label: string;
  icon: (appState: import("../types").UIAppState) => JSX.Element;
  trackEvent: {
    category: "element";
  };
  perform: (
    elements: readonly OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: AppClassProperties,
  ) => {
    appState: Readonly<AppState>;
    elements: readonly OrderedExcalidrawElement[];
    storeAction: import("../store").StoreActionType;
  };
  keyTest: (
    event: KeyboardEvent | import("react").KeyboardEvent<Element>,
  ) => boolean;
  predicate: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
  ) => boolean;
  PanelComponent: ({
    elements,
    appState,
    updateData,
  }: import("./types").PanelComponentProps) => JSX.Element;
} & {
  keyTest?:
    | ((
        event: KeyboardEvent | import("react").KeyboardEvent<Element>,
      ) => boolean)
    | undefined;
};
