import * as t44ms from "typescript-44ms";

const nameFromRef = (refish: any) =>
  t44ms.Api.anyRefishToStringValue(refish).split(".").pop();

const elements = {
  nameFromRef,
};

export const Presentation = {
  elements,
};
