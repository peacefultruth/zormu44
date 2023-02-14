export const YieldableHandler = (eventHandlerExplicitNameOnJsx: string) => {
  const yieldableHandler: YieldableHandlerPrimitive = {
    [YieldableHandlerSymbol]: eventHandlerExplicitNameOnJsx,
    _yieldableHandler: YieldableHandlerSymbol,
  };
  return yieldableHandler;
};
export const YieldableHandlerSymbol = Symbol.for(
  "react-44ms/api/YieldableHandlerSymbol"
);

export interface YieldableHandlerPrimitive {
  [YieldableHandlerSymbol]: string;
  _yieldableHandler: typeof YieldableHandlerSymbol;
}

export const isThatAYieldableHandler = (
  input?: any
): input is YieldableHandlerPrimitive => {
  return input?._yieldableHandler === YieldableHandlerSymbol;
};

export const anyYieldableHandlerToValue = (refish?: any): string => {
  if (isThatAYieldableHandler(refish)) {
    return refish[YieldableHandlerSymbol];
  }
  return "";
};