export declare const RefSymbol: unique symbol;
export interface RefPrimitive {
    [RefSymbol]: string;
    _refSymbol: typeof RefSymbol;
}
export declare const isThatARef: (that: any) => that is RefPrimitive;
export declare const anyRefishToStringValue: (refish?: any) => string;
