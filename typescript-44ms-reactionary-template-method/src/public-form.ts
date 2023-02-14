import * as t44ms from "typescript-44ms";

export interface PublicForm {
  [key: string | number | symbol]: any;
}

export const publicFormAccess = <
  YourFormStateDescribingInterfaceType extends any
>(
  publicFormState: PublicForm | null,
  ref: t44ms.Api.ref
): YourFormStateDescribingInterfaceType | null => {
  const literalCallstack = ref[t44ms.Api.RefSymbol].split(".");
  let node = publicFormState;
  literalCallstack.forEach((name) => {
    if (name && name.length > 0) {
      node = node?.[name];
    }
  });
  return node as YourFormStateDescribingInterfaceType | null;
};
