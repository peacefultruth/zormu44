import * as React from "react";

export interface Context<T extends any> {
  Provider: React.FunctionComponent<ContextProviderProps<T>>;
  value: T;
  reactContextEquivalentToUseAsADependency: React.Context<T>;
}

export interface ContextProviderProps<T extends any> {
  value: T;
  children: React.ReactNode;
}
