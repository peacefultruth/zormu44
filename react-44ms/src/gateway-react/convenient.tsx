import * as _React from "react";
import { Api } from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

import {
  convenienceWindowRetrieve,
  LooksLikeAReactRefToReact,
} from "./convenient-internals";

type ICantBelieveItsNotButter = {
  [AnyElement in keyof JSX.IntrinsicElements]: {
    [AnyEventHandler in keyof JSX.IntrinsicElements[AnyElement] as Exclude<
      AnyEventHandler,
      "onSubmit"
    >]-?: BetweenReactAndMs<JSX.IntrinsicElements[AnyElement][AnyEventHandler]>;
  } & {
    [AnyEventHandler in keyof Pick<
      JSX.IntrinsicElements[AnyElement],
      "onSubmit"
    >]-?: BetweenReactAndMs__onSubmit<
      JSX.IntrinsicElements[AnyElement][AnyEventHandler]
    >;
  };
};
type TheEventParameterPassedToTheFunctionType<T> = T extends (
  event: infer P
) => void
  ? P
  : never;
type TheExpectedTypeOfTheEventHandlerReturned<T> = T extends () => infer R
  ? R
  : never;

type BetweenReactAndMs<YourEventHandlerExpectedType> = (
  ref: any, // LooksLikeAReactRefToReact | LooksLikeAReactRefToReact[],
  event?: TheEventParameterPassedToTheFunctionType<YourEventHandlerExpectedType>
) => YourEventHandlerExpectedType;
function BetweenReactAndMs__onSubmit__type_hack<
  YourEventHandlerExpectedType extends any
>(ref: any): YourEventHandlerExpectedType;
function BetweenReactAndMs__onSubmit__type_hack<
  YourEventHandlerExpectedType extends any
>(
  ref: any,
  event: TheEventParameterPassedToTheFunctionType<YourEventHandlerExpectedType>
): FORM_SUBMIT_RETURN_TYPE;
function BetweenReactAndMs__onSubmit__type_hack<
  YourEventHandlerExpectedType extends any
>(
  _ref: any,
  event?: TheEventParameterPassedToTheFunctionType<YourEventHandlerExpectedType>
) {
  if (event) {
    return null as unknown as FORM_SUBMIT_RETURN_TYPE;
  } else {
    return null as unknown as YourEventHandlerExpectedType;
  }
}

type BetweenReactAndMs__onSubmit<YourEventHandlerExpectedType> =
  typeof BetweenReactAndMs__onSubmit__type_hack<YourEventHandlerExpectedType>;
type FORM_SUBMIT_RETURN_TYPE = ReturnType<
  Service.ServiceClient["submitHandler"]
>;

type AllTheIntrinsicJSXElementsEventHandlingAttributesCanBeEasilyHandled =
  ICantBelieveItsNotButter;

const convenient_proxy_to_siphon_everything_into_a_single_simple_sweet_event_handler__actual_handler_proxy =
  <IntrinsicType extends { [key: string | symbol]: any }>() =>
    new Proxy<IntrinsicType>({} as unknown as IntrinsicType, {
      get: (
        _target: any,
        reactEquivalentEventHandlerFunctionName: keyof IntrinsicType
      ): BetweenReactAndMs<
        IntrinsicType[typeof reactEquivalentEventHandlerFunctionName]
      > => {
        const turnAReferenceIntoSomethingThatHandlesThisEvent = <
          YourEventHandlerExpectedType extends Function,
          TheEventType extends TheEventParameterPassedToTheFunctionType<
            TheExpectedTypeOfTheEventHandlerReturned<YourEventHandlerExpectedType>
          >
        >(
          refFromTopLevelReact:
            | LooksLikeAReactRefToReact<any>
            | LooksLikeAReactRefToReact<any>[],
          event?: TheEventType
        ) => {
          const ref = refFromTopLevelReact as unknown as Api.ref;
          const customEventHandler = (event: TheEventType) => {
            const gatewayClient = convenienceWindowRetrieve();

            let aYieldingRef: (Api.ref | Api.YieldableHandlerPrimitive)[] =
              Array.isArray(ref) ? ref : [ref];
            aYieldingRef = [
              ...aYieldingRef,
              ...[
                Api.YieldableHandler(
                  reactEquivalentEventHandlerFunctionName as string
                ),
              ],
            ];

            const eventAsAny = event as any;
            if (eventAsAny.target) {
              aYieldingRef = [...aYieldingRef, ...[eventAsAny.target.value]];
            }

            if (reactEquivalentEventHandlerFunctionName === "onSubmit") {
              return gatewayClient.serviceClient.submitHandler(aYieldingRef);
            } else {
              gatewayClient.serviceClient.eventHandler(aYieldingRef);
            }
          };

          const eventHandlerFullyTyped =
            customEventHandler as unknown as YourEventHandlerExpectedType;

          if (event) {
            return eventHandlerFullyTyped(event);
          } else {
            return eventHandlerFullyTyped;
          }
        };
        return turnAReferenceIntoSomethingThatHandlesThisEvent as unknown as BetweenReactAndMs<
          IntrinsicType[typeof reactEquivalentEventHandlerFunctionName]
        >;
      },
    });
const convenient_proxy_to_siphon_everything_into_a_single_simple_sweet_event_handler =
  new Proxy<AllTheIntrinsicJSXElementsEventHandlingAttributesCanBeEasilyHandled>(
    {} as unknown as AllTheIntrinsicJSXElementsEventHandlingAttributesCanBeEasilyHandled,
    {
      get: (
        _target: any,
        intrinsicType: keyof JSX.IntrinsicElements
      ): AllTheIntrinsicJSXElementsEventHandlingAttributesCanBeEasilyHandled[keyof JSX.IntrinsicElements] => {
        return convenient_proxy_to_siphon_everything_into_a_single_simple_sweet_event_handler__actual_handler_proxy<
          AllTheIntrinsicJSXElementsEventHandlingAttributesCanBeEasilyHandled[typeof intrinsicType]
        >();
      },
    }
  );
export const Convenient =
  convenient_proxy_to_siphon_everything_into_a_single_simple_sweet_event_handler;
