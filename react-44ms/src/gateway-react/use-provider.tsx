import * as React from "react";

import {
  ProviderContext,
  ProviderContextDefaultValue,
} from "./provider-context";

export const useProvider = () => {
  const formContext = React.useContext(ProviderContext);
  if (formContext === ProviderContextDefaultValue) {
    throw new Error(
      "useProvider must be used within a React44ms.React.Provider. Did you forget to include <React44ms.React.Provider client={formCient} />?"
    );
  }
  return formContext;
};
