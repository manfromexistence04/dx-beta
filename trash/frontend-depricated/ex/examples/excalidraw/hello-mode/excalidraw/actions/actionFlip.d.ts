/// <reference types="react" />
import { ExcalidrawElement } from "../element/types";
import { AppClassProperties, AppState } from "../types";
export declare const actionFlipHorizontal: {
  name: "flipHorizontal";
  label: string;
  icon: JSX.Element;
  trackEvent: {
    category: "element";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: AppClassProperties,
  ) => {
    elements: ExcalidrawElement[];
    appState: Readonly<AppState>;
    storeAction: import("../store").StoreActionType;
  };
  keyTest: (
    event: KeyboardEvent | import("react").KeyboardEvent<Element>,
  ) => boolean;
} & {
  keyTest?:
    | ((
        event: KeyboardEvent | import("react").KeyboardEvent<Element>,
      ) => boolean)
    | undefined;
};
export declare const actionFlipVertical: {
  name: "flipVertical";
  label: string;
  icon: JSX.Element;
  trackEvent: {
    category: "element";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: AppClassProperties,
  ) => {
    elements: ExcalidrawElement[];
    appState: Readonly<AppState>;
    storeAction: import("../store").StoreActionType;
  };
  keyTest: (
    event: KeyboardEvent | import("react").KeyboardEvent<Element>,
  ) => boolean;
} & {
  keyTest?:
    | ((
        event: KeyboardEvent | import("react").KeyboardEvent<Element>,
      ) => boolean)
    | undefined;
};
