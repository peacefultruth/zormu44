import { RefPrimitive } from "./ref-primitive";
export declare const TypedRefSymbol: unique symbol;
export declare const TypedRefValueSymbol: unique symbol;
export interface TypedRef<YourExpectedTypeThatLivesAtTheRefdLocation> extends RefPrimitive {
    [TypedRefSymbol]: RefPrimitive;
    [TypedRefValueSymbol]: YourExpectedTypeThatLivesAtTheRefdLocation;
    _typedRefSymbol: typeof TypedRefSymbol;
}
export declare const isThatATypedRef: (that: any) => that is TypedRef<any>;
