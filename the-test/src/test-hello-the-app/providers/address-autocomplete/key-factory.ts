import { AddressAutocomplete_AddressParse_Query_ProviderProps } from "./resource-parse";
import { AddressAutocomplete_Query_ProviderProps } from "./resource";

export type AddressAutocomplete_Query_KeyType = [
  string,
  Omit<AddressAutocomplete_Query_ProviderProps, "useInitialState">
];
const addressAutocomplete_baseKey = `bbnt-data-source-address-autocomplete`;

export type AddressAutocomplete_AddressParse_Query_KeyType = [
  string,
  Omit<AddressAutocomplete_AddressParse_Query_ProviderProps, "useInitialState">
];
const addressAutocomplete_AddressParse_baseKey = `bbnt-data-source-address-autocomplete-address-parse`;

export const AddressAutocomplete_Query_Key = {
  addressAutocomplete: (
    desiredAddress: AddressAutocomplete_Query_ProviderProps
  ): AddressAutocomplete_Query_KeyType => {
    const baseQueryKey = addressAutocomplete_baseKey;

    const { ...desiredAddress_cleaned } = {
      ...desiredAddress,
    };

    const queryKey: AddressAutocomplete_Query_KeyType = [
      baseQueryKey,
      desiredAddress_cleaned,
    ];

    return queryKey;
  },
  addressParse: (
    desiredAddress: AddressAutocomplete_AddressParse_Query_ProviderProps
  ): AddressAutocomplete_AddressParse_Query_KeyType => {
    const baseQueryKey = addressAutocomplete_AddressParse_baseKey;

    const { ...desiredAddress_cleaned } = {
      ...desiredAddress,
    };

    const queryKey: AddressAutocomplete_Query_KeyType = [
      baseQueryKey,
      desiredAddress_cleaned,
    ];

    return queryKey;
  },
};
