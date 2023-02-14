export declare const YieldableHandler: (eventHandlerExplicitNameOnJsx: string) => YieldableHandlerPrimitive;
export declare const YieldableHandlerSymbol: unique symbol;
export interface YieldableHandlerPrimitive {
    [YieldableHandlerSymbol]: string;
    _yieldableHandler: typeof YieldableHandlerSymbol;
}
export declare const isThatAYieldableHandler: (input?: any) => input is YieldableHandlerPrimitive;
export declare const anyYieldableHandlerToValue: (refish?: any) => string;
