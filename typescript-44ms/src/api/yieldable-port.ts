export const YieldablePortSymbol = Symbol.for(
  "react-44ms/api/YieldablePortSymbol"
);
export const YieldablePort = (inputName: string) => {
  const yieldablePortPrimitive: YieldablePortPrimitive = {
    [YieldablePortSymbol]: inputName,
    _yieldablePort: YieldablePortSymbol,
  };
  return yieldablePortPrimitive;
};

export interface YieldablePortPrimitive {
  [YieldablePortSymbol]: string;
  _yieldablePort: typeof YieldablePortSymbol;
}

export const isThatAYieldablePort = (
  input?: any
): input is YieldablePortPrimitive => {
  return input?._yieldablePort === YieldablePortSymbol;
};
