/// <reference types="react" />
import { ExcalidrawElement } from "../element/types";
import { AppState, NormalizedZoomValue } from "../types";
import { SceneBounds } from "../element/bounds";
export declare const actionChangeViewBackgroundColor: {
  name: "changeViewBackgroundColor";
  label: string;
  paletteName: string;
  trackEvent: false;
  predicate: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    props: import("../types").ExcalidrawProps,
    app: import("../types").AppClassProperties,
  ) => boolean;
  perform: (
    _: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    value: any,
  ) => {
    appState: any;
    storeAction: import("../store").StoreActionType;
  };
  PanelComponent: ({
    elements,
    appState,
    updateData,
    appProps,
  }: import("./types").PanelComponentProps) => JSX.Element;
} & {
  keyTest?: undefined;
};
export declare const actionClearCanvas: {
  name: "clearCanvas";
  label: string;
  paletteName: string;
  icon: JSX.Element;
  trackEvent: {
    category: "canvas";
  };
  predicate: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    props: import("../types").ExcalidrawProps,
    app: import("../types").AppClassProperties,
  ) => boolean;
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    elements: import("../element/types").OrderedExcalidrawElement[];
    appState: {
      files: {};
      theme: import("../element/types").Theme;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      gridSize: number | null;
      showStats: boolean;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      viewModeEnabled: boolean;
      zenModeEnabled: boolean;
      objectsSnapModeEnabled: boolean;
      name: string | null;
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      scrollX: number;
      scrollY: number;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      isResizing: boolean;
      isRotating: boolean;
      zoom: Readonly<{
        value: NormalizedZoomValue;
      }>;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      currentChartType: import("../element/types").ChartType;
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
    storeAction: import("../store").StoreActionType;
  };
} & {
  keyTest?: undefined;
};
export declare const actionZoomIn: {
  name: "zoomIn";
  label: string;
  viewMode: true;
  icon: JSX.Element;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    _elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      userToFollow: null;
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      followedBy: Set<import("../types").SocketId>;
    };
    storeAction: import("../store").StoreActionType;
  };
  PanelComponent: ({
    updateData,
    appState,
  }: import("./types").PanelComponentProps) => JSX.Element;
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
export declare const actionZoomOut: {
  name: "zoomOut";
  label: string;
  icon: JSX.Element;
  viewMode: true;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    _elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      userToFollow: null;
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      followedBy: Set<import("../types").SocketId>;
    };
    storeAction: import("../store").StoreActionType;
  };
  PanelComponent: ({
    updateData,
    appState,
  }: import("./types").PanelComponentProps) => JSX.Element;
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
export declare const actionResetZoom: {
  name: "resetZoom";
  label: string;
  icon: JSX.Element;
  viewMode: true;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    _elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      userToFollow: null;
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      followedBy: Set<import("../types").SocketId>;
    };
    storeAction: import("../store").StoreActionType;
  };
  PanelComponent: ({
    updateData,
    appState,
  }: import("./types").PanelComponentProps) => JSX.Element;
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
export declare const zoomToFitBounds: ({
  bounds,
  appState,
  fitToViewport,
  viewportZoomFactor,
}: {
  bounds: SceneBounds;
  appState: Readonly<AppState>;
  /** whether to fit content to viewport (beyond >100%) */
  fitToViewport: boolean;
  /** zoom content to cover X of the viewport, when fitToViewport=true */
  viewportZoomFactor?: number | undefined;
}) => {
  appState: {
    scrollX: number;
    scrollY: number;
    zoom: {
      value: NormalizedZoomValue;
    };
    contextMenu: {
      items: import("../components/ContextMenu").ContextMenuItems;
      top: number;
      left: number;
    } | null;
    showWelcomeScreen: boolean;
    isLoading: boolean;
    errorMessage: import("react").ReactNode;
    activeEmbeddable: {
      element: import("../element/types").NonDeletedExcalidrawElement;
      state: "hover" | "active";
    } | null;
    draggingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    resizingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    multiElement:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawLinearElement
        >
      | null;
    selectionElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    isBindingEnabled: boolean;
    startBoundElement:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawBindableElement
        >
      | null;
    suggestedBindings: import("../element/binding").SuggestedBinding[];
    frameToHighlight:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawFrameLikeElement
        >
      | null;
    frameRendering: {
      enabled: boolean;
      name: boolean;
      outline: boolean;
      clip: boolean;
    };
    editingFrame: string | null;
    elementsToHighlight:
      | import("../element/types").NonDeleted<ExcalidrawElement>[]
      | null;
    editingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    editingLinearElement:
      | import("../element/linearElementEditor").LinearElementEditor
      | null;
    activeTool: {
      lastActiveTool: import("../types").ActiveTool | null;
      locked: boolean;
    } & import("../types").ActiveTool;
    penMode: boolean;
    penDetected: boolean;
    exportBackground: boolean;
    exportEmbedScene: boolean;
    exportWithDarkMode: boolean;
    exportScale: number;
    currentItemStrokeColor: string;
    currentItemBackgroundColor: string;
    currentItemFillStyle: import("../element/types").FillStyle;
    currentItemStrokeWidth: number;
    currentItemStrokeStyle: import("../element/types").StrokeStyle;
    currentItemRoughness: number;
    currentItemOpacity: number;
    currentItemFontFamily: number;
    currentItemFontSize: number;
    currentItemTextAlign: string;
    currentItemStartArrowhead: import("../element/types").Arrowhead | null;
    currentItemEndArrowhead: import("../element/types").Arrowhead | null;
    currentItemRoundness: import("../element/types").StrokeRoundness;
    viewBackgroundColor: string;
    cursorButton: "up" | "down";
    scrolledOutside: boolean;
    name: string | null;
    isResizing: boolean;
    isRotating: boolean;
    openMenu: "canvas" | "shape" | null;
    openPopup:
      | "canvasBackground"
      | "elementBackground"
      | "elementStroke"
      | null;
    openSidebar: {
      name: string;
      tab?: string | undefined;
    } | null;
    openDialog:
      | {
          name: "imageExport" | "help" | "jsonExport";
        }
      | {
          name: "settings";
          source: "settings" | "tool" | "generation";
          tab: "text-to-diagram" | "diagram-to-code";
        }
      | {
          name: "ttd";
          tab: "text-to-diagram" | "mermaid";
        }
      | {
          name: "commandPalette";
        }
      | null;
    defaultSidebarDockedPreference: boolean;
    lastPointerDownWith: import("../element/types").PointerType;
    selectedElementIds: Readonly<{
      [id: string]: true;
    }>;
    previousSelectedElementIds: {
      [id: string]: true;
    };
    selectedElementsAreBeingDragged: boolean;
    shouldCacheIgnoreZoom: boolean;
    toast: {
      message: string;
      closable?: boolean | undefined;
      duration?: number | undefined;
    } | null;
    zenModeEnabled: boolean;
    theme: import("../element/types").Theme;
    gridSize: number | null;
    viewModeEnabled: boolean;
    selectedGroupIds: {
      [groupId: string]: boolean;
    };
    editingGroupId: string | null;
    width: number;
    height: number;
    offsetTop: number;
    offsetLeft: number;
    fileHandle: import("browser-fs-access").FileSystemHandle | null;
    collaborators: Map<
      import("../types").SocketId,
      Readonly<{
        pointer?: import("../types").CollaboratorPointer | undefined;
        button?: "up" | "down" | undefined;
        selectedElementIds?:
          | Readonly<{
              [id: string]: true;
            }>
          | undefined;
        username?: string | null | undefined;
        userState?: import("../types").UserIdleState | undefined;
        color?:
          | {
              background: string;
              stroke: string;
            }
          | undefined;
        avatarUrl?: string | undefined;
        id?: string | undefined;
        socketId?: import("../types").SocketId | undefined;
        isCurrentUser?: boolean | undefined;
        isInCall?: boolean | undefined;
        isSpeaking?: boolean | undefined;
        isMuted?: boolean | undefined;
      }>
    >;
    showStats: boolean;
    currentChartType: import("../element/types").ChartType;
    pasteDialog:
      | {
          shown: false;
          data: null;
        }
      | {
          shown: true;
          data: import("../charts").Spreadsheet;
        };
    pendingImageElementId: string | null;
    showHyperlinkPopup: false | "info" | "editor";
    selectedLinearElement:
      | import("../element/linearElementEditor").LinearElementEditor
      | null;
    snapLines: readonly import("../snapping").SnapLine[];
    originSnapOffset: {
      x: number;
      y: number;
    } | null;
    objectsSnapModeEnabled: boolean;
    userToFollow: import("../types").UserToFollow | null;
    followedBy: Set<import("../types").SocketId>;
  };
  storeAction: import("../store").StoreActionType;
};
export declare const zoomToFit: ({
  targetElements,
  appState,
  fitToViewport,
  viewportZoomFactor,
}: {
  targetElements: readonly ExcalidrawElement[];
  appState: Readonly<AppState>;
  /** whether to fit content to viewport (beyond >100%) */
  fitToViewport: boolean;
  /** zoom content to cover X of the viewport, when fitToViewport=true */
  viewportZoomFactor?: number | undefined;
}) => {
  appState: {
    scrollX: number;
    scrollY: number;
    zoom: {
      value: NormalizedZoomValue;
    };
    contextMenu: {
      items: import("../components/ContextMenu").ContextMenuItems;
      top: number;
      left: number;
    } | null;
    showWelcomeScreen: boolean;
    isLoading: boolean;
    errorMessage: import("react").ReactNode;
    activeEmbeddable: {
      element: import("../element/types").NonDeletedExcalidrawElement;
      state: "hover" | "active";
    } | null;
    draggingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    resizingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    multiElement:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawLinearElement
        >
      | null;
    selectionElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    isBindingEnabled: boolean;
    startBoundElement:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawBindableElement
        >
      | null;
    suggestedBindings: import("../element/binding").SuggestedBinding[];
    frameToHighlight:
      | import("../element/types").NonDeleted<
          import("../element/types").ExcalidrawFrameLikeElement
        >
      | null;
    frameRendering: {
      enabled: boolean;
      name: boolean;
      outline: boolean;
      clip: boolean;
    };
    editingFrame: string | null;
    elementsToHighlight:
      | import("../element/types").NonDeleted<ExcalidrawElement>[]
      | null;
    editingElement:
      | import("../element/types").NonDeletedExcalidrawElement
      | null;
    editingLinearElement:
      | import("../element/linearElementEditor").LinearElementEditor
      | null;
    activeTool: {
      lastActiveTool: import("../types").ActiveTool | null;
      locked: boolean;
    } & import("../types").ActiveTool;
    penMode: boolean;
    penDetected: boolean;
    exportBackground: boolean;
    exportEmbedScene: boolean;
    exportWithDarkMode: boolean;
    exportScale: number;
    currentItemStrokeColor: string;
    currentItemBackgroundColor: string;
    currentItemFillStyle: import("../element/types").FillStyle;
    currentItemStrokeWidth: number;
    currentItemStrokeStyle: import("../element/types").StrokeStyle;
    currentItemRoughness: number;
    currentItemOpacity: number;
    currentItemFontFamily: number;
    currentItemFontSize: number;
    currentItemTextAlign: string;
    currentItemStartArrowhead: import("../element/types").Arrowhead | null;
    currentItemEndArrowhead: import("../element/types").Arrowhead | null;
    currentItemRoundness: import("../element/types").StrokeRoundness;
    viewBackgroundColor: string;
    cursorButton: "up" | "down";
    scrolledOutside: boolean;
    name: string | null;
    isResizing: boolean;
    isRotating: boolean;
    openMenu: "canvas" | "shape" | null;
    openPopup:
      | "canvasBackground"
      | "elementBackground"
      | "elementStroke"
      | null;
    openSidebar: {
      name: string;
      tab?: string | undefined;
    } | null;
    openDialog:
      | {
          name: "imageExport" | "help" | "jsonExport";
        }
      | {
          name: "settings";
          source: "settings" | "tool" | "generation";
          tab: "text-to-diagram" | "diagram-to-code";
        }
      | {
          name: "ttd";
          tab: "text-to-diagram" | "mermaid";
        }
      | {
          name: "commandPalette";
        }
      | null;
    defaultSidebarDockedPreference: boolean;
    lastPointerDownWith: import("../element/types").PointerType;
    selectedElementIds: Readonly<{
      [id: string]: true;
    }>;
    previousSelectedElementIds: {
      [id: string]: true;
    };
    selectedElementsAreBeingDragged: boolean;
    shouldCacheIgnoreZoom: boolean;
    toast: {
      message: string;
      closable?: boolean | undefined;
      duration?: number | undefined;
    } | null;
    zenModeEnabled: boolean;
    theme: import("../element/types").Theme;
    gridSize: number | null;
    viewModeEnabled: boolean;
    selectedGroupIds: {
      [groupId: string]: boolean;
    };
    editingGroupId: string | null;
    width: number;
    height: number;
    offsetTop: number;
    offsetLeft: number;
    fileHandle: import("browser-fs-access").FileSystemHandle | null;
    collaborators: Map<
      import("../types").SocketId,
      Readonly<{
        pointer?: import("../types").CollaboratorPointer | undefined;
        button?: "up" | "down" | undefined;
        selectedElementIds?:
          | Readonly<{
              [id: string]: true;
            }>
          | undefined;
        username?: string | null | undefined;
        userState?: import("../types").UserIdleState | undefined;
        color?:
          | {
              background: string;
              stroke: string;
            }
          | undefined;
        avatarUrl?: string | undefined;
        id?: string | undefined;
        socketId?: import("../types").SocketId | undefined;
        isCurrentUser?: boolean | undefined;
        isInCall?: boolean | undefined;
        isSpeaking?: boolean | undefined;
        isMuted?: boolean | undefined;
      }>
    >;
    showStats: boolean;
    currentChartType: import("../element/types").ChartType;
    pasteDialog:
      | {
          shown: false;
          data: null;
        }
      | {
          shown: true;
          data: import("../charts").Spreadsheet;
        };
    pendingImageElementId: string | null;
    showHyperlinkPopup: false | "info" | "editor";
    selectedLinearElement:
      | import("../element/linearElementEditor").LinearElementEditor
      | null;
    snapLines: readonly import("../snapping").SnapLine[];
    originSnapOffset: {
      x: number;
      y: number;
    } | null;
    objectsSnapModeEnabled: boolean;
    userToFollow: import("../types").UserToFollow | null;
    followedBy: Set<import("../types").SocketId>;
  };
  storeAction: import("../store").StoreActionType;
};
export declare const actionZoomToFitSelectionInViewport: {
  name: "zoomToFitSelectionInViewport";
  label: string;
  icon: JSX.Element;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
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
export declare const actionZoomToFitSelection: {
  name: "zoomToFitSelection";
  label: string;
  icon: JSX.Element;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
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
export declare const actionZoomToFit: {
  name: "zoomToFit";
  label: string;
  icon: JSX.Element;
  viewMode: true;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
  ) => {
    appState: {
      scrollX: number;
      scrollY: number;
      zoom: {
        value: NormalizedZoomValue;
      };
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
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
export declare const actionToggleTheme: {
  name: "toggleTheme";
  label: (
    _: readonly ExcalidrawElement[],
    appState: Readonly<AppState>,
  ) => "buttons.lightMode" | "buttons.darkMode";
  keywords: string[];
  icon: (appState: import("../types").UIAppState) => JSX.Element;
  viewMode: true;
  trackEvent: {
    category: "canvas";
  };
  perform: (
    _: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    value: any,
  ) => {
    appState: {
      theme: any;
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      activeEmbeddable: {
        element: import("../element/types").NonDeletedExcalidrawElement;
        state: "hover" | "active";
      } | null;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      scrollX: number;
      scrollY: number;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      zoom: Readonly<{
        value: NormalizedZoomValue;
      }>;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      selectedElementIds: Readonly<{
        [id: string]: true;
      }>;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      gridSize: number | null;
      viewModeEnabled: boolean;
      selectedGroupIds: {
        [groupId: string]: boolean;
      };
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
    storeAction: import("../store").StoreActionType;
  };
  keyTest: (
    event: KeyboardEvent | import("react").KeyboardEvent<Element>,
  ) => boolean;
  predicate: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    props: import("../types").ExcalidrawProps,
    app: import("../types").AppClassProperties,
  ) => boolean;
} & {
  keyTest?:
    | ((
        event: KeyboardEvent | import("react").KeyboardEvent<Element>,
      ) => boolean)
    | undefined;
};
export declare const actionToggleEraserTool: {
  name: "toggleEraserTool";
  label: string;
  trackEvent: {
    category: "toolbar";
  };
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
  ) => {
    appState: {
      selectedElementIds: {};
      selectedGroupIds: {};
      activeEmbeddable: null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      scrollX: number;
      scrollY: number;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      zoom: Readonly<{
        value: NormalizedZoomValue;
      }>;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
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
export declare const actionToggleHandTool: {
  name: "toggleHandTool";
  label: string;
  paletteName: string;
  trackEvent: {
    category: "toolbar";
  };
  icon: JSX.Element;
  viewMode: false;
  perform: (
    elements: readonly import("../element/types").OrderedExcalidrawElement[],
    appState: Readonly<AppState>,
    _: any,
    app: import("../types").AppClassProperties,
  ) => {
    appState: {
      selectedElementIds: {};
      selectedGroupIds: {};
      activeEmbeddable: null;
      activeTool: {
        lastActiveTool: import("../types").ActiveTool | null;
        locked: boolean;
      } & import("../types").ActiveTool;
      contextMenu: {
        items: import("../components/ContextMenu").ContextMenuItems;
        top: number;
        left: number;
      } | null;
      showWelcomeScreen: boolean;
      isLoading: boolean;
      errorMessage: import("react").ReactNode;
      draggingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      resizingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      multiElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawLinearElement
          >
        | null;
      selectionElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      isBindingEnabled: boolean;
      startBoundElement:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawBindableElement
          >
        | null;
      suggestedBindings: import("../element/binding").SuggestedBinding[];
      frameToHighlight:
        | import("../element/types").NonDeleted<
            import("../element/types").ExcalidrawFrameLikeElement
          >
        | null;
      frameRendering: {
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
      };
      editingFrame: string | null;
      elementsToHighlight:
        | import("../element/types").NonDeleted<ExcalidrawElement>[]
        | null;
      editingElement:
        | import("../element/types").NonDeletedExcalidrawElement
        | null;
      editingLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      penMode: boolean;
      penDetected: boolean;
      exportBackground: boolean;
      exportEmbedScene: boolean;
      exportWithDarkMode: boolean;
      exportScale: number;
      currentItemStrokeColor: string;
      currentItemBackgroundColor: string;
      currentItemFillStyle: import("../element/types").FillStyle;
      currentItemStrokeWidth: number;
      currentItemStrokeStyle: import("../element/types").StrokeStyle;
      currentItemRoughness: number;
      currentItemOpacity: number;
      currentItemFontFamily: number;
      currentItemFontSize: number;
      currentItemTextAlign: string;
      currentItemStartArrowhead: import("../element/types").Arrowhead | null;
      currentItemEndArrowhead: import("../element/types").Arrowhead | null;
      currentItemRoundness: import("../element/types").StrokeRoundness;
      viewBackgroundColor: string;
      scrollX: number;
      scrollY: number;
      cursorButton: "up" | "down";
      scrolledOutside: boolean;
      name: string | null;
      isResizing: boolean;
      isRotating: boolean;
      zoom: Readonly<{
        value: NormalizedZoomValue;
      }>;
      openMenu: "canvas" | "shape" | null;
      openPopup:
        | "canvasBackground"
        | "elementBackground"
        | "elementStroke"
        | null;
      openSidebar: {
        name: string;
        tab?: string | undefined;
      } | null;
      openDialog:
        | {
            name: "imageExport" | "help" | "jsonExport";
          }
        | {
            name: "settings";
            source: "settings" | "tool" | "generation";
            tab: "text-to-diagram" | "diagram-to-code";
          }
        | {
            name: "ttd";
            tab: "text-to-diagram" | "mermaid";
          }
        | {
            name: "commandPalette";
          }
        | null;
      defaultSidebarDockedPreference: boolean;
      lastPointerDownWith: import("../element/types").PointerType;
      previousSelectedElementIds: {
        [id: string]: true;
      };
      selectedElementsAreBeingDragged: boolean;
      shouldCacheIgnoreZoom: boolean;
      toast: {
        message: string;
        closable?: boolean | undefined;
        duration?: number | undefined;
      } | null;
      zenModeEnabled: boolean;
      theme: import("../element/types").Theme;
      gridSize: number | null;
      viewModeEnabled: boolean;
      editingGroupId: string | null;
      width: number;
      height: number;
      offsetTop: number;
      offsetLeft: number;
      fileHandle: import("browser-fs-access").FileSystemHandle | null;
      collaborators: Map<
        import("../types").SocketId,
        Readonly<{
          pointer?: import("../types").CollaboratorPointer | undefined;
          button?: "up" | "down" | undefined;
          selectedElementIds?:
            | Readonly<{
                [id: string]: true;
              }>
            | undefined;
          username?: string | null | undefined;
          userState?: import("../types").UserIdleState | undefined;
          color?:
            | {
                background: string;
                stroke: string;
              }
            | undefined;
          avatarUrl?: string | undefined;
          id?: string | undefined;
          socketId?: import("../types").SocketId | undefined;
          isCurrentUser?: boolean | undefined;
          isInCall?: boolean | undefined;
          isSpeaking?: boolean | undefined;
          isMuted?: boolean | undefined;
        }>
      >;
      showStats: boolean;
      currentChartType: import("../element/types").ChartType;
      pasteDialog:
        | {
            shown: false;
            data: null;
          }
        | {
            shown: true;
            data: import("../charts").Spreadsheet;
          };
      pendingImageElementId: string | null;
      showHyperlinkPopup: false | "info" | "editor";
      selectedLinearElement:
        | import("../element/linearElementEditor").LinearElementEditor
        | null;
      snapLines: readonly import("../snapping").SnapLine[];
      originSnapOffset: {
        x: number;
        y: number;
      } | null;
      objectsSnapModeEnabled: boolean;
      userToFollow: import("../types").UserToFollow | null;
      followedBy: Set<import("../types").SocketId>;
    };
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
