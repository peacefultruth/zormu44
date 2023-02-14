import * as React from "react";

import { Api } from "typescript-44ms";

import {
  convenienceWindowBegin,
  LooksLikeAReactRefToReact,
} from "./convenient-internals";

import {
  ProviderContext,
  ProviderContextDefaultValue,
} from "./provider-context";

type Refify<YourFormStateDescribingInterfaceType> =
  YourFormStateDescribingInterfaceType extends {
    [key: string | symbol | number]: any;
  }
    ? {
        [K in keyof YourFormStateDescribingInterfaceType]-?: Refify<
          Required<YourFormStateDescribingInterfaceType[K]>
        >;
      } & LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType>
    : LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType>;
export const useForm = <
  YourFormStateDescribingInterfaceType extends any,
  YourFormReferencesCanReferenceAnInterfaceWithCallableInputsThatComesFromYourFormLogic extends any = {}
>(
  ref?: Api.ref | Api.TypedRef<YourFormStateDescribingInterfaceType>
): [
  YourFormStateDescribingInterfaceType | null,
  Refify<
    Required<
      YourFormStateDescribingInterfaceType &
        YourFormReferencesCanReferenceAnInterfaceWithCallableInputsThatComesFromYourFormLogic
    >
  >
] => {
  type FormRefs = Refify<
    Required<
      YourFormStateDescribingInterfaceType &
        YourFormReferencesCanReferenceAnInterfaceWithCallableInputsThatComesFromYourFormLogic
    >
  >;

  const formContext = React.useContext(ProviderContext);
  if (formContext === ProviderContextDefaultValue) {
    throw new Error(`
      useForm must be used within a <React44ms.React.Provider client={formCient}>. 
    `);
  }

  /**
   * This convenience window isn't for the formState retrieval.
   * The convenience functions in your React components which use the gateway convenience
   * so that it can easily handle form elements events.
   * Github Copilot: "Conveniently, the formState retrieval is also a convenience function."
   * hahahahahahahahahahahahahahahahahahashfhasdhfjdsahgkjdsfhllgjkfdhjkgdfg
   */
  convenienceWindowBegin(formContext);

  const exploreLatch = React.useRef<boolean>(false);
  const employeeLatch = React.useRef<boolean>(false);

  const formStateRef =
    React.useRef<YourFormStateDescribingInterfaceType | null>(null);

  const [workTrigger, setWorkTrigger] = React.useState(-1);

  /**
   * This has to be a memo.
   *
   * Memos in react lang are immediate, the interface for references is immediate.
   *
   */
  const formRefs_thisIsland: FormRefs = React.useMemo(
    () => formContext.client.serviceClient.formRefsIsland(ref),
    [ref?.[Api.RefSymbol]]
  );

  const formState_interfaceConforming: YourFormStateDescribingInterfaceType | null =
    React.useMemo(() => {
      return formStateRef.current;
    }, [workTrigger, ref?.[Api.RefSymbol]]);

  const wheneverTheFormStateChanges = React.useCallback(() => {
    formContext.pushAnEventIntoReact(() => {
      try {
        setWorkTrigger(Date.now());
      } catch (error) {}
    });
  }, [formContext.pushAnEventIntoReact, setWorkTrigger]);

  React.useEffect(() => {
    if (exploreLatch.current) {
      return;
    }
    exploreLatch.current = true;
    const have_you_considered =
      formContext.client.serviceClient.explore<YourFormStateDescribingInterfaceType>(
        (
          formState_interfaceConforming: YourFormStateDescribingInterfaceType | null
        ) => {
          formStateRef.current = formState_interfaceConforming;
          wheneverTheFormStateChanges();
        },
        ref
      );
    return () => {
      exploreLatch.current = false;
      have_you_considered.unsubscribing();
    };
  }, [ref?.[Api.RefSymbol]]);
  React.useEffect(() => {
    if (employeeLatch.current) {
      return;
    }
    employeeLatch.current = true;
    const have_you_considered = formContext.client.serviceClient.employee(
      () => {
        wheneverTheFormStateChanges();
      },
      ref
    );
    return () => {
      employeeLatch.current = false;
      have_you_considered.unsubscribing();
    };
  }, [ref?.[Api.RefSymbol]]);

  return [formState_interfaceConforming, formRefs_thisIsland];
};
