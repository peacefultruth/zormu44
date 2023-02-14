import * as t44ms from "typescript-44ms";

export const React44msUseSubmitSymbol = Symbol.for(
  "react-44ms/service/use-submit"
);

export const useSubmit = () => {
  return (window as any)[React44msUseSubmitSymbol] as t44ms.Api.Submitter;
};
