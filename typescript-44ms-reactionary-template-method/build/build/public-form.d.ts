import * as t44ms from "typescript-44ms";
export interface PublicForm {
    [key: string | number | symbol]: any;
}
export declare const publicFormAccess: <YourFormStateDescribingInterfaceType extends unknown>(publicFormState: PublicForm | null, ref: t44ms.Api.RefPrimitive) => YourFormStateDescribingInterfaceType | null;
