import * as React44ms from "react-44ms";

import {
  AddressAutocomplete_Query_ProviderProps,
  useAddressAutocompleteFormContext_asController,
  useAddressAutocompleteQueryFormContext,
  useCountryCodeFormContext,
  useAddressAutocomplete_AddressParse_Query_FormContext,
} from "../providers";

export interface AddressAutocompleteExpects {
  autocompleteAddress: string;
  autocompleteAddress_selectedFromAutocomplete: boolean;
}
export interface AddressAutocompleteUX extends AddressAutocompleteExpects {
  disabled: boolean;
  suggestions: string[];
  status: "idle" | "loading" | "error" | "valid";
}

export interface AddressAutocompleteFormController {
  handleSuggestionClick: React44ms.Api.input;
}

const useAddressParseQueryFormContext =
  useAddressAutocomplete_AddressParse_Query_FormContext;

interface AddressAutocomplete44Props {
  yieldable: React44ms.Api.yieldable[];
  required?: boolean | undefined;
}
const AddressAutocomplete44: React44ms.Api.FunctionComponent<
  AddressAutocomplete44Props
> = (props) => {
  const {
    suggest: addressAutocomplete_suggest,
    parse: addressAutocomplete_parse,
  } = useAddressAutocompleteFormContext_asController();
  const { countryCode } = useCountryCodeFormContext();
  const {
    data: addressAutocomplete_queryData,
    status: addressAutocomplete_queryStatus,
  } = useAddressAutocompleteQueryFormContext();
  const { data: addressParse_queryData, status: addressParse_queryStatus } =
    useAddressParseQueryFormContext();

  const [addressToAutocomplete, setAddressToAutocomplete] =
    React44ms.Api.useState("");

  const [official, setOfficial] = React44ms.Api.useState(false);
  const [hasAlreadyBeenParsed, setHasAlreadyBeenParsed] =
    React44ms.Api.useState(false);

  const suggestions = React44ms.Api.useMemo(() => {
    return addressAutocomplete_queryData?.data || [];
  }, [addressAutocomplete_queryData]);

  const presentAsDisabled = React44ms.Api.useMemo(() => {
    return addressParse_queryStatus === "loading";
  }, [addressParse_queryStatus]);

  const status = React44ms.Api.useMemo(() => {
    if (hasAlreadyBeenParsed) {
      return "valid";
    }
    if (
      addressAutocomplete_queryStatus === "loading" ||
      addressParse_queryStatus === "loading"
    ) {
      return "loading";
    }
    if (
      addressAutocomplete_queryStatus === "error" ||
      addressParse_queryStatus === "error"
    ) {
      return "error";
    }
    return "idle";
  }, [
    hasAlreadyBeenParsed,
    addressAutocomplete_queryStatus,
    addressParse_queryStatus,
  ]);

  React44ms.Api.useEffect(
    () => {
      const based_on: AddressAutocomplete_Query_ProviderProps = {
        addressToAutocomplete,
        countryCode,
      };
      addressAutocomplete_suggest(based_on);
    },
    [addressToAutocomplete, countryCode, addressAutocomplete_suggest],
    {
      debounce: 500,
    }
  );
  React44ms.Api.useEffect(
    () => {
      if (official) {
        const parse_based_on = {
          countryCode,
          addressToParse: official ? addressToAutocomplete : "",
        };
        addressAutocomplete_parse(parse_based_on);
      }
    },
    [addressToAutocomplete, countryCode, addressAutocomplete_parse, official],
    {
      debounce: 500,
    }
  );

  /*React44ms.Api.useYieldingMemo(
    [props.yieldable[0]],
    () => {
      const isThisAddressNotEmpty = addressToAutocomplete !== "";
      const hasThisAddressBeenSelectedFromSuggestions = official;
      const isTheAddressThatHasBeenParsedThisAddress =
        addressToAutocomplete == (originalRequest as any)?.addressToParse;
      const parsedAddress = (addressParse_queryData as any)?.data;

      const hasThisAddressBeenParsed =
        !hasAlreadyBeenParsed &&
        isThisAddressNotEmpty &&
        hasThisAddressBeenSelectedFromSuggestions &&
        isTheAddressThatHasBeenParsedThisAddress &&
        !!parsedAddress;
      if (hasThisAddressBeenParsed) {
        return parsedAddress.street0;
        // setHasAlreadyBeenParsed(true);
      }

      return undefined;
    },
    [
      addressToAutocomplete,
      official,
      originalRequest,
      addressParse_queryData,
      hasAlreadyBeenParsed,
    ]
  ); copilot*/

  React44ms.Api.useEffect(() => {
    const isThisAddressNotEmpty = (addressToAutocomplete || "").length > 0;
    const hasThisAddressBeenSelectedFromSuggestions = official;
    const isTheAddressThatHasBeenParsedThisAddress =
      addressToAutocomplete === addressParse_queryData?.requestedAddress;
    const parsedAddress = addressParse_queryData;

    const hasThisAddressBeenParsed =
      !hasAlreadyBeenParsed &&
      isThisAddressNotEmpty &&
      hasThisAddressBeenSelectedFromSuggestions &&
      isTheAddressThatHasBeenParsedThisAddress &&
      !!parsedAddress;

    if (hasThisAddressBeenParsed) {
      React44ms.Api.Yield([
        props.yieldable[0],
        React44ms.Api.YieldAValueAtTheEnd(parsedAddress.street0),
      ]);

      React44ms.Api.Yield([
        props.yieldable[1],
        React44ms.Api.YieldAValueAtTheEnd(parsedAddress.street1),
      ]);

      setHasAlreadyBeenParsed(true);
    }
  }, [
    addressToAutocomplete,
    official,
    addressParse_queryData,
    hasAlreadyBeenParsed,
  ]);

  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      setAddressToAutocomplete(event.target.value);
    }, []);

  const handleSuggestionClick: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      const suggestionSelected = event.target.value as string;
      setAddressToAutocomplete(suggestionSelected);
      setOfficial(true);
    }, []);

  const value: AddressAutocompleteUX = React44ms.Api.useMemo(
    () => ({
      autocompleteAddress: addressToAutocomplete,
      autocompleteAddress_selectedFromAutocomplete: official,

      disabled: presentAsDisabled,
      suggestions,
      status,
    }),
    [addressToAutocomplete, presentAsDisabled, suggestions, status]
  );

  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback(() => {
      if (props.required) {
        if (value.status !== "valid") {
          throw new Error("Address is required");
        }
      }

      React44ms.Api.submit(true);
    }, [props.required, value]);

  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
      <input
        name={React44ms.Api.Convenience.element.name<AddressAutocompleteFormController>(
          "handleSuggestionClick"
        )}
        React44ms_onChange={handleSuggestionClick}
      />

      <output React44ms_value={value} />

      {addressToAutocomplete.length > 0 ? null : (
        <SomeNestedDynamicLogic ref="SomeNestedDynamicLogic" />
      )}
    </form>
  );
};

export const SomeNestedDynamicLogic: React44ms.Api.FunctionComponent = () => {
  const [value, setValue] = React44ms.Api.useState("");

  // console.log("SomeNestedDynamicLogic -> render");
  React44ms.Api.useEffect(() => {
    return () => {
      // console.log("SomeNestedDynamicLogic OUT!");
    };
  }, []);

  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      setValue(event.target.value);
    }, []);

  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback(() => {
      React44ms.Api.submit(false as unknown as true);
    }, [value]);

  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
    </form>
  );
};

export const AddressAutocompleteFormLogic = React44ms.React.Reactify(
  AddressAutocomplete44
);
