import * as React from "react";

import {
  ProviderContext,
  ProviderContextDefaultValue,
} from "./provider-context";

export const useFormRef = <
  YourExpectedInterface extends any
>(): (() => YourExpectedInterface | null) => {
  const formContext = React.useContext(ProviderContext);
  if (formContext === ProviderContextDefaultValue) {
    throw new Error(
      "useFormRef must be used within a <React44ms.React.Provider client={formCient}>."
    );
  }
  return formContext.client.serviceClient.nowish;
};
