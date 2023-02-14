import * as t44ms from "typescript-44ms";

import { FactoryPublicFormState } from "./factory-public-form-state";

export type FormRefsProxy = any;
export type FormRefsIslandBoat = (ref: t44ms.Api.ref | undefined) => any;
export interface FactoryFormRefs {
  (publicFormStateStack: ReturnType<FactoryPublicFormState>): [
    FormRefsProxy,
    FormRefsIslandBoat
  ];
}
