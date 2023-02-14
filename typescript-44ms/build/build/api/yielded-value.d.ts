export declare const YieldedValueSymbol: unique symbol;
export declare const YieldedValueNotFoundSymbol: unique symbol;
export interface YieldedValuePrimitive {
    [YieldedValueSymbol]: any;
    _yieldedValueSymbol: typeof YieldedValueSymbol;
}
export declare const isThatAYieldedValuePrimitive: (that: any) => that is YieldedValuePrimitive;
export declare const extractYieldedValue: (refish?: any) => any;
export declare const YieldAValueAtTheEnd: (value: any) => YieldedValuePrimitive;
