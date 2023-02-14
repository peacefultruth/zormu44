import * as t44ms from "typescript-44ms";

import { ProviderContextConsumer } from "./provider-context-consumer";
import { Client } from "./client";

export const ConvenienceWindowGatewayClient = Symbol.for(
  "React44ms.ConvenienceWindowGatewayClient"
);
export const convenienceWindowBegin = (
  formContext: ProviderContextConsumer
) => {
  (window as any)[ConvenienceWindowGatewayClient] = formContext.client;
};
export const convenienceWindowRetrieve = () => {
  return (window as any)[ConvenienceWindowGatewayClient] as Client;
};

export type LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType> =
  Partial<React.Ref<Symbol>> &
    t44ms.Api.ref & {
      typedRef: t44ms.Api.TypedRef<YourFormStateDescribingInterfaceType>;
    };
