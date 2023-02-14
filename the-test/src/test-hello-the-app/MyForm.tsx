import { AddressAutocompleteExpects } from "./form-logic";

export interface MyFormExpects {
  howManyAddressesAmIExpecting: number;
  addresses: MyFormExpectsAddress[];
}

export interface MyFormExpectsAddress extends AddressAutocompleteExpects {
  isManualAddress?: boolean;
  manualAddressLine1?: string;
  manualAddressLine2?: string;
}
