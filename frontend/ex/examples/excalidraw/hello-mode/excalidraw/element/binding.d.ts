import {
  ExcalidrawBindableElement,
  ExcalidrawElement,
  NonDeleted,
  ExcalidrawLinearElement,
  NonDeletedExcalidrawElement,
  ElementsMap,
  NonDeletedSceneElementsMap,
} from "./types";
import { AppClassProperties, AppState } from "../types";
import { ElementUpdate } from "./mutateElement";
export type SuggestedBinding =
  | NonDeleted<ExcalidrawBindableElement>
  | SuggestedPointBinding;
export type SuggestedPointBinding = [
  NonDeleted<ExcalidrawLinearElement>,
  "start" | "end" | "both",
  NonDeleted<ExcalidrawBindableElement>,
];
export declare const shouldEnableBindingForPointerEvent: (
  event: React.PointerEvent<HTMLElement>,
) => boolean;
export declare const isBindingEnabled: (appState: AppState) => boolean;
export declare const bindOrUnbindLinearElement: (
  linearElement: NonDeleted<ExcalidrawLinearElement>,
  startBindingElement: ExcalidrawBindableElement | null | "keep",
  endBindingElement: ExcalidrawBindableElement | null | "keep",
  elementsMap: NonDeletedSceneElementsMap,
) => void;
export declare const bindOrUnbindLinearElements: (
  selectedElements: NonDeleted<ExcalidrawLinearElement>[],
  app: AppClassProperties,
  isBindingEnabled: boolean,
  draggingPoints: readonly number[] | null,
) => void;
export declare const getSuggestedBindingsForArrows: (
  selectedElements: NonDeleted<ExcalidrawElement>[],
  app: AppClassProperties,
) => SuggestedBinding[];
export declare const maybeBindLinearElement: (
  linearElement: NonDeleted<ExcalidrawLinearElement>,
  appState: AppState,
  pointerCoords: {
    x: number;
    y: number;
  },
  app: AppClassProperties,
) => void;
export declare const bindLinearElement: (
  linearElement: NonDeleted<ExcalidrawLinearElement>,
  hoveredElement: ExcalidrawBindableElement,
  startOrEnd: "start" | "end",
  elementsMap: NonDeletedSceneElementsMap,
) => void;
export declare const isLinearElementSimpleAndAlreadyBound: (
  linearElement: NonDeleted<ExcalidrawLinearElement>,
  alreadyBoundToId: ExcalidrawBindableElement["id"] | undefined,
  bindableElement: ExcalidrawBindableElement,
) => boolean;
export declare const getHoveredElementForBinding: (
  pointerCoords: {
    x: number;
    y: number;
  },
  app: AppClassProperties,
) => NonDeleted<ExcalidrawBindableElement> | null;
export declare const updateBoundElements: (
  changedElement: NonDeletedExcalidrawElement,
  elementsMap: ElementsMap,
  options?: {
    simultaneouslyUpdated?: readonly ExcalidrawElement[];
    newSize?: {
      width: number;
      height: number;
    };
  },
) => void;
export declare const fixBindingsAfterDuplication: (
  sceneElements: readonly ExcalidrawElement[],
  oldElements: readonly ExcalidrawElement[],
  oldIdToDuplicatedId: Map<ExcalidrawElement["id"], ExcalidrawElement["id"]>,
  duplicatesServeAsOld?: "duplicatesServeAsOld" | undefined,
) => void;
export declare const fixBindingsAfterDeletion: (
  sceneElements: readonly ExcalidrawElement[],
  deletedElements: readonly ExcalidrawElement[],
) => void;
export declare const maxBindingGap: (
  element: ExcalidrawElement,
  elementWidth: number,
  elementHeight: number,
) => number;
export declare const bindingProperties: Set<BindableProp | BindingProp>;
export type BindableProp = "boundElements";
export type BindingProp =
  | "frameId"
  | "containerId"
  | "startBinding"
  | "endBinding";
/**
 * Bound element containing bindings to `frameId`, `containerId`, `startBinding` or `endBinding`.
 */
export declare class BoundElement {
  /**
   * Unbind the affected non deleted bindable elements (removing element from `boundElements`).
   * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
   * - prepares updates to unbind each bindable element's `boundElements` from the current element
   */
  static unbindAffected(
    elements: ElementsMap,
    boundElement: ExcalidrawElement | undefined,
    updateElementWith: (
      affected: ExcalidrawElement,
      updates: ElementUpdate<ExcalidrawElement>,
    ) => void,
  ): void;
  /**
   * Rebind the next affected non deleted bindable elements (adding element to `boundElements`).
   * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
   * - prepares updates to rebind each bindable element's `boundElements` to the current element
   *
   * NOTE: rebind expects that affected elements were previously unbound with `BoundElement.unbindAffected`
   */
  static rebindAffected: (
    elements: ElementsMap,
    boundElement: ExcalidrawElement | undefined,
    updateElementWith: (
      affected: ExcalidrawElement,
      updates: ElementUpdate<ExcalidrawElement>,
    ) => void,
  ) => void;
}
/**
 * Bindable element containing bindings to `boundElements`.
 */
export declare class BindableElement {
  /**
   * Unbind the affected non deleted bound elements (resetting `containerId`, `startBinding`, `endBinding` to `null`).
   * - iterates through non deleted `boundElements` of the current element
   * - prepares updates to unbind each bound element from the current element
   */
  static unbindAffected(
    elements: ElementsMap,
    bindableElement: ExcalidrawElement | undefined,
    updateElementWith: (
      affected: ExcalidrawElement,
      updates: ElementUpdate<ExcalidrawElement>,
    ) => void,
  ): void;
  /**
   * Rebind the affected non deleted bound elements (for now setting only `containerId`, as we cannot rebind arrows atm).
   * - iterates through non deleted `boundElements` of the current element
   * - prepares updates to rebind each bound element to the current element or unbind it from `boundElements` in case of conflicts
   *
   * NOTE: rebind expects that affected elements were previously unbound with `BindaleElement.unbindAffected`
   */
  static rebindAffected: (
    elements: ElementsMap,
    bindableElement: ExcalidrawElement | undefined,
    updateElementWith: (
      affected: ExcalidrawElement,
      updates: ElementUpdate<ExcalidrawElement>,
    ) => void,
  ) => void;
}
