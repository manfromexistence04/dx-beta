import { OrderedExcalidrawElement } from "../element/types";
import { AppState } from "../types";
import { MakeBrand } from "../utility-types";
export type ReconciledExcalidrawElement = OrderedExcalidrawElement &
  MakeBrand<"ReconciledElement">;
export type RemoteExcalidrawElement = OrderedExcalidrawElement &
  MakeBrand<"RemoteExcalidrawElement">;
export declare const reconcileElements: (
  localElements: readonly OrderedExcalidrawElement[],
  remoteElements: readonly RemoteExcalidrawElement[],
  localAppState: AppState,
) => ReconciledExcalidrawElement[];
