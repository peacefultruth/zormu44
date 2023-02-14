import * as React from "react";

import { Context } from "./context";

export const createContext = <T extends any>(
  defaultValue: T,
  reactContextEquivalentToUseAsADependency: React.Context<T>
): Context<T> => {
  interface ProviderProps {
    value: T;
    children: React.ReactNode;
  }
  const Provider: React.FunctionComponent<ProviderProps> = (props) => {
    value.value = props.value;
    return <React.Fragment>{props.children || []}</React.Fragment>;
  };

  const value: Context<T> = {
    Provider,
    value: defaultValue,
    reactContextEquivalentToUseAsADependency,
  };
  return value;
};
