import { Action } from "./types";
import { History } from "../history";
import { Store } from "../store";
type ActionCreator = (history: History, store: Store) => Action;
export declare const createUndoAction: ActionCreator;
export declare const createRedoAction: ActionCreator;
export {};
