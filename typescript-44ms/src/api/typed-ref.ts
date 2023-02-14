import { RefPrimitive } from "./ref-primitive";

export const TypedRefSymbol = Symbol.for("react-44ms/api/TypedRefSymbol");
export const TypedRefValueSymbol = Symbol.for(
  "react-44ms/api/TypedRefValueSymbol"
);

export interface TypedRef<YourExpectedTypeThatLivesAtTheRefdLocation>
  extends RefPrimitive {
  [TypedRefSymbol]: RefPrimitive;
  [TypedRefValueSymbol]: YourExpectedTypeThatLivesAtTheRefdLocation;
  _typedRefSymbol: typeof TypedRefSymbol;
}

export const isThatATypedRef = (that: any): that is TypedRef<any> => {
  return !!that && that._typedRefSymbol === TypedRefSymbol;
};
