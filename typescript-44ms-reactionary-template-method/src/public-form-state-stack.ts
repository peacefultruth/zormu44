import * as t44ms from "typescript-44ms";

import { PublicForm } from "./public-form";

export interface PublicFormStateStack {
  publicFormStateImmediate: () => PublicForm | null;
  siphonPublicFinal: (
    virtualStack: t44ms.Api.ref[],
    value: any,
    name?: string | typeof PublicFormStateStack_CrushKillDestroy
  ) => void;
  siphonPublicFulfillmentFinal: (
    virtualStack: t44ms.Api.ref[],
    value: any,
    name?: string | typeof PublicFormStateStack_CrushKillDestroy
  ) => void;
  publicFulfillmentImmediate: () => PublicForm | null;
}

export const PublicFormStateStack_CrushKillDestroy = Symbol.for(
  "react-44ms/service/crush-kill-destroy"
);
