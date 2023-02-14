import * as React from "react";
import * as React44ms from "react-44ms";

import { AddressAutocomplete_Query_Key } from "./key-factory";
import * as ReactQuery from "./react-query-without-the-dependency";
import * as axios from "./um-axios_yeah";

export interface AddressAutocomplete_AddressParse_Query_Data {
  street0: string;
  street1: string;
  requestedAddress: string;
}
export interface AddressAutocomplete_AddressParse_Query_Result
  extends AddressAutocomplete_AddressParse_Query_Data {}
export type AddressAutocomplete_AddressParse_Query_Request = Omit<
  AddressAutocomplete_AddressParse_Query_ProviderProps,
  "useInitialState"
>;
export interface AddressAutocomplete_AddressParse_Query_ConsumerInterface {
  data: ReactQuery.UseQueryResult<
    AddressAutocomplete_AddressParse_Query_Result,
    AddressAutocomplete_AddressParse_Query_Request
  >["data"];
  status: ReactQuery.UseQueryResult<
    AddressAutocomplete_AddressParse_Query_Result,
    AddressAutocomplete_AddressParse_Query_Request
  >["status"];
  mutateAsync: (
    request: AddressAutocomplete_AddressParse_Query_Request
  ) => Promise<
    AddressAutocomplete_AddressParse_Query_Result | null | undefined
  >;
}
const defaultValue =
  {} as unknown as AddressAutocomplete_AddressParse_Query_ConsumerInterface;
const AddressAutocomplete_AddressParse_Query_Context =
  React.createContext(defaultValue);
const AddressAutocomplete_AddressParse_Query_FormContext =
  React44ms.React.createContext(
    defaultValue,
    AddressAutocomplete_AddressParse_Query_Context
  );

export interface AddressAutocomplete_AddressParse_Query_ProviderProps {
  addressToParse?: string;
  countryCode?: string;

  children?: React.ReactNode;
}
export const AddressAutocomplete_AddressParse_Query_Provider: React.FunctionComponent<
  AddressAutocomplete_AddressParse_Query_ProviderProps
> = (props) => {
  const queryKey = React.useMemo(() => {
    return AddressAutocomplete_Query_Key.addressParse(props);
  }, [props, props.addressToParse, props.countryCode]);

  const queryFn: ReactQuery.QueryFunction<
    AddressAutocomplete_AddressParse_Query_Result,
    AddressAutocomplete_AddressParse_Query_Request
  > = async (request: AddressAutocomplete_AddressParse_Query_Request) => {
    const { addressToParse, countryCode } = request;

    if ((addressToParse || "").length < 1 || (countryCode || "").length < 1) {
      return {} as unknown as AddressAutocomplete_AddressParse_Query_Result;
    }

    const { data: addressAutocomplete_AddressParse_queryResult } =
      await axios.get<AddressAutocomplete_AddressParse_Query_Result>(
        `/addressvalidation/address/parse?address=${addressToParse}&country=${countryCode}`
      );

    return addressAutocomplete_AddressParse_queryResult;
  };

  const { status, data, mutateAsync } = ReactQuery.useQuery(
    queryKey,
    queryFn,
    {}
  );

  const value: AddressAutocomplete_AddressParse_Query_ConsumerInterface =
    React.useMemo(
      () => ({
        status,
        data,
        mutateAsync,
      }),
      [status, data, mutateAsync]
    );

  return (
    <AddressAutocomplete_AddressParse_Query_Context.Provider value={value}>
      <AddressAutocomplete_AddressParse_Query_FormContext.Provider
        value={value}
      >
        {props?.children || []}
      </AddressAutocomplete_AddressParse_Query_FormContext.Provider>
    </AddressAutocomplete_AddressParse_Query_Context.Provider>
  );
};

export const useAddressAutocomplete_AddressParse_Query = () => {
  const context = React.useContext(
    AddressAutocomplete_AddressParse_Query_Context
  );
  return context;
};

export const useAddressAutocomplete_AddressParse_Query_FormContext = () => {
  const context = React44ms.React.useContext(
    AddressAutocomplete_AddressParse_Query_FormContext
  );
  return context;
};
