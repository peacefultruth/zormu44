import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const useFormRefs: Service.IAmAReactionaryComponent<"useFormRefs"> = (
  iAmReact: Service.IAmReact
) => {
  return <YourType extends unknown>(parent: t44ms.Api.ref) => {
    return iAmReact.formRefsIsland(parent) as unknown as YourType;
  };
};
