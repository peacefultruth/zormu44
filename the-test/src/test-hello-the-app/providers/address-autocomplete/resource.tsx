import * as React from "react";
import * as React44ms from "react-44ms";

import { AddressAutocomplete_Query_Key } from "./key-factory";
import * as ReactQuery from "./react-query-without-the-dependency";
import * as axios from "./um-axios_yeah";

export interface AddressAutocomplete_Query_Result {
  data?: string[];
  success?: boolean;
}
export type AddressAutocomplete_Query_Request = Omit<
  AddressAutocomplete_Query_ProviderProps,
  "useInitialState"
>;
export interface AddressAutocomplete_Query_ConsumerInterface {
  data: ReactQuery.UseQueryResult<
    AddressAutocomplete_Query_Result,
    AddressAutocomplete_Query_Request
  >["data"];
  status: ReactQuery.UseQueryResult<
    AddressAutocomplete_Query_Result,
    AddressAutocomplete_Query_Request
  >["status"];
  mutateAsync: (
    request: AddressAutocomplete_Query_Request
  ) => Promise<AddressAutocomplete_Query_Result | null | undefined>;
}
const defaultValue =
  {} as unknown as AddressAutocomplete_Query_ConsumerInterface;
const AddressAutocomplete_Query_Context = React.createContext(defaultValue);
const AddressAutocomplete_Query_FormContext = React44ms.React.createContext(
  defaultValue,
  AddressAutocomplete_Query_Context
);

export interface AddressAutocomplete_Query_ProviderProps {
  addressToAutocomplete?: string;
  countryCode?: string;

  children?: React.ReactNode;
}
export const AddressAutocomplete_Query_Provider: React.FunctionComponent<
  AddressAutocomplete_Query_ProviderProps
> = (props) => {
  const queryKey = React.useMemo(() => {
    return AddressAutocomplete_Query_Key.addressAutocomplete(props);
  }, [props, props.addressToAutocomplete, props.countryCode]);

  const queryFn: ReactQuery.QueryFunction<
    AddressAutocomplete_Query_Result,
    AddressAutocomplete_Query_Request
  > = async (request: AddressAutocomplete_Query_Request) => {
    const { addressToAutocomplete, countryCode } = request;

    if (
      (addressToAutocomplete || "").length < 1 ||
      (countryCode || "").length < 1
    ) {
      return {};
    }

    const { data: addressAutocomplete_queryResult } =
      await axios.get<AddressAutocomplete_Query_Result>(
        `/addressvalidation/address/search?address=${addressToAutocomplete}&country=${countryCode}`
      );

    return addressAutocomplete_queryResult;
  };

  const { status, data, mutateAsync } = ReactQuery.useQuery(
    queryKey,
    queryFn,
    {}
  );

  const value: AddressAutocomplete_Query_ConsumerInterface = React.useMemo(
    () => ({
      status,
      data,
      mutateAsync,
    }),
    [status, data, mutateAsync]
  );
  
  return (
    <AddressAutocomplete_Query_Context.Provider value={value}>
      <AddressAutocomplete_Query_FormContext.Provider value={value}>
        {props?.children || []}
      </AddressAutocomplete_Query_FormContext.Provider>
    </AddressAutocomplete_Query_Context.Provider>
  );
};

export const useAddressAutocompleteQuery = () => {
  const context = React.useContext(AddressAutocomplete_Query_Context);
  return context;
};

export const useAddressAutocompleteQueryFormContext = () => {
  const context = React44ms.React.useContext(
    AddressAutocomplete_Query_FormContext
  );
  return context;
};
