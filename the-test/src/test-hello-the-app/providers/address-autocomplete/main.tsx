import * as React from "react";

import { AddressAutocompletePresenterProvider } from "./presenter";
import { AddressAutocomplete_Query_Provider } from "./resource";
import { AddressAutocomplete_AddressParse_Query_Provider } from "./resource-parse";

interface ProviderProps {
  children: React.ReactNode;
}
export const AddressAutocompleteProvider: React.FunctionComponent<
  ProviderProps
> = (props) => {
  return (
    <React.Fragment>
      <AddressAutocomplete_Query_Provider>
        <AddressAutocomplete_AddressParse_Query_Provider>
          <AddressAutocompletePresenterProvider>
            {props.children || []}
          </AddressAutocompletePresenterProvider>
        </AddressAutocomplete_AddressParse_Query_Provider>
      </AddressAutocomplete_Query_Provider>
    </React.Fragment>
  );
};
