import * as React from "react";

import { Api } from "typescript-44ms";

import {
  ProviderContext,
  ProviderContextDefaultValue,
} from "./provider-context";

export const useFulfillment = <
  YourExpectedControllerInterfaceThatLivesAtThatRef extends any
>(
  ref: any
): YourExpectedControllerInterfaceThatLivesAtThatRef | null => {
  const formContext = React.useContext(ProviderContext);
  if (formContext === ProviderContextDefaultValue) {
    throw new Error(
      "useFulfillment must be used within a <React44ms.React.Provider client={formCient}>."
    );
  }

  const subscriptionLatch = React.useRef<boolean>(false);

  const [fulfillment, setFulfillment] =
    React.useState<YourExpectedControllerInterfaceThatLivesAtThatRef | null>(
      null
    );

  React.useEffect(() => {
    if (subscriptionLatch.current) {
      return;
    }
    subscriptionLatch.current = true;
    const have_you_considered =
      formContext.client.serviceClient.exploreFulfillment<YourExpectedControllerInterfaceThatLivesAtThatRef>(
        (
          latestFulfillment: YourExpectedControllerInterfaceThatLivesAtThatRef | null
        ) => {
          setFulfillment(latestFulfillment);
        },
        ref
      );
    return () => {
      subscriptionLatch.current = false;
      have_you_considered.unsubscribing();
    };
  }, [ref?.[Api.RefSymbol]]);

  return fulfillment;
};
