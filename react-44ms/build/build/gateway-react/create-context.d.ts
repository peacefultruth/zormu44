import * as React from "react";
import { Context } from "./context";
export declare const createContext: <T extends unknown>(defaultValue: T, reactContextEquivalentToUseAsADependency: React.Context<T>) => Context<T>;
