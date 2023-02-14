import * as React from "react";
import * as React44ms from "react-44ms";
import {
  AddressAutocomplete_Query_Request,
  useAddressAutocompleteQuery,
} from "./resource";
import {
  AddressAutocomplete_AddressParse_Query_Request,
  useAddressAutocomplete_AddressParse_Query,
} from "./resource-parse";

export interface AddressAutocomplete_React_ConsumerInterface {}
const defaultValue =
  {} as unknown as AddressAutocomplete_React_ConsumerInterface;
const context = React.createContext(defaultValue);
const formContext = React44ms.React.createContext(defaultValue, context);

export type AddressAutocomplete_Request = AddressAutocomplete_Query_Request;
export interface AddressAutocomplete_React_ControllerInterface {
  suggest: (based_on: AddressAutocomplete_Request) => Promise<void>;
  parse: (
    based_on: AddressAutocomplete_AddressParse_Query_Request
  ) => Promise<void>;
}
const defaultValue_forControllers =
  {} as unknown as AddressAutocomplete_React_ControllerInterface;
const context_forControllers = React.createContext(defaultValue_forControllers);
const formContext_forControllers = React44ms.React.createContext(
  defaultValue_forControllers,
  context_forControllers
);

export interface AddressAutocomplete_Provider_Props {
  children: React.ReactNode;
}
export const AddressAutocompletePresenterProvider: React.FunctionComponent<
  AddressAutocomplete_Provider_Props
> = (props) => {
  const { mutateAsync } = useAddressAutocompleteQuery();
  const { mutateAsync: parseMutateAsync } =
    useAddressAutocomplete_AddressParse_Query();

  const suggest: AddressAutocomplete_React_ControllerInterface["suggest"] =
    React.useCallback(
      async (suggest) => {
        await mutateAsync(suggest);
      },
      [mutateAsync]
    );

  const parse: AddressAutocomplete_React_ControllerInterface["parse"] =
    React.useCallback(
      async (parse) => {
        await parseMutateAsync(parse);
      },
      [parseMutateAsync]
    );

  const value: AddressAutocomplete_React_ConsumerInterface = React.useMemo(
    () => ({}),
    []
  );
  const controllerValue: AddressAutocomplete_React_ControllerInterface =
    React.useMemo(
      () => ({
        suggest,
        parse,
      }),
      [suggest, parse]
    );
  return (
    <context_forControllers.Provider value={controllerValue}>
      <formContext_forControllers.Provider value={controllerValue}>
        <context.Provider value={value}>
          <formContext.Provider value={value}>
            {props.children || []}
          </formContext.Provider>
        </context.Provider>
      </formContext_forControllers.Provider>
    </context_forControllers.Provider>
  );
};

export const useAddressAutocomplete = () => {
  const value = React.useContext(context);
  return value;
};
export const useAddressAutocomplete_asController = () => {
  const value = React.useContext(context_forControllers);
  return value;
};
export const useAddressAutocompleteFormContext = () => {
  const value = React44ms.React.useContext(formContext);
  return value;
};
export const useAddressAutocompleteFormContext_asController = () => {
  const value = React44ms.React.useContext(formContext_forControllers);
  return value;
};
