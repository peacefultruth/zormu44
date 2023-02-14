export const YieldedValueSymbol = Symbol.for(
  "react-44ms/api/YieldedValueSymbol"
);
export const YieldedValueNotFoundSymbol = Symbol.for(
  "react-44ms/api/YieldedValueNotFoundSymbol"
);

export interface YieldedValuePrimitive {
  [YieldedValueSymbol]: any;
  _yieldedValueSymbol: typeof YieldedValueSymbol;
}

export const isThatAYieldedValuePrimitive = (
  that: any
): that is YieldedValuePrimitive => {
  return !!that && that._yieldedValueSymbol === YieldedValueSymbol;
};

export const extractYieldedValue = (refish?: any) => {
  if (isThatAYieldedValuePrimitive(refish)) {
    return refish[YieldedValueSymbol];
  }
  return YieldedValueNotFoundSymbol;
};

export const YieldAValueAtTheEnd = (value: any): YieldedValuePrimitive => {
  return {
    [YieldedValueSymbol]: value,
    _yieldedValueSymbol: YieldedValueSymbol,
  };
};
