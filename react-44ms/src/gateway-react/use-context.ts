import * as React from "react";

import { Context } from "./context";

export const useContext = <T extends any>(context: Context<T>): T => {
  if (context.reactContextEquivalentToUseAsADependency) {
    React.useContext(context.reactContextEquivalentToUseAsADependency);
  }
  return context.value;
};