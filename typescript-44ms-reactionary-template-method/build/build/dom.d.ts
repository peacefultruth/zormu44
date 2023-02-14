import * as T44ms from "typescript-44ms";
import { IAmReact } from "./i-am-react";
export interface GatewayNode {
    handleEvent: (yieldingRef: T44ms.Api.YieldingRef) => void;
    handleSubmit: (yieldingRef: T44ms.Api.YieldingRef, handleException: (any_exception: unknown, submit_named?: string) => void) => void;
}
export type DOMExplorer = (iAmReact: IAmReact, callstackAdditions?: any[]) => GatewayNode | null;
