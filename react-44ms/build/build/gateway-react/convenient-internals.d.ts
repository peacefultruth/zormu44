/// <reference types="react" />
/// <reference types="react" />
import * as t44ms from "typescript-44ms";
import { ProviderContextConsumer } from "./provider-context-consumer";
import { Client } from "./client";
export declare const ConvenienceWindowGatewayClient: unique symbol;
export declare const convenienceWindowBegin: (formContext: ProviderContextConsumer) => void;
export declare const convenienceWindowRetrieve: () => Client;
export type LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType> = Partial<React.Ref<Symbol>> & t44ms.Api.ref & {
    typedRef: t44ms.Api.TypedRef<YourFormStateDescribingInterfaceType>;
};
