export declare const YieldablePortSymbol: unique symbol;
export declare const YieldablePort: (inputName: string) => YieldablePortPrimitive;
export interface YieldablePortPrimitive {
    [YieldablePortSymbol]: string;
    _yieldablePort: typeof YieldablePortSymbol;
}
export declare const isThatAYieldablePort: (input?: any) => input is YieldablePortPrimitive;
