export const RefSymbol = Symbol.for("react-44ms/api/RefSymbol");

export interface RefPrimitive {
  [RefSymbol]: string;
  _refSymbol: typeof RefSymbol;
}

export const isThatARef = (that: any): that is RefPrimitive => {
  return !!that && that._refSymbol === RefSymbol;
};

export const anyRefishToStringValue = (refish?: any): string => {
  if (isThatARef(refish)) {
    return refish[RefSymbol];
  }
  return refish || "";
};
