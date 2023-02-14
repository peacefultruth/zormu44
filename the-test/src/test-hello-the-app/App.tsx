import * as React from "react";
import { ootb } from "typescript-44ms-ootb-all";
import * as React44ms from "react-44ms";

import { Arrangement } from "../arrangement";

import {
  AddressAutocompleteFormController,
  AddressAutocompleteFormLogic,
  AddressAutocompleteUX,
  AddressLineFormLogic,
} from "./form-logic";

import { MyFormExpects, MyFormExpectsAddress } from "./MyForm";
import { AddressAutocompleteProvider, CountryCodeProvider } from "./providers";

interface MyAddressProps {
  formRef: React44ms.Api.TypedRef<MyFormExpectsAddress>;

  required?: boolean;

  theAddressUserInput_reactTestId: string | undefined;
  theUsersMatchingAddressSuggestions_reactTestId: string | undefined;

  title: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >["title"];
  placeholder: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >["placeholder"];
}
const MyAddress: React.FunctionComponent<MyAddressProps> = (props) => {
  const [thisAddress, formRefs] = React44ms.React.useForm<
    MyFormExpectsAddress,
    AddressAutocompleteFormController
  >(props.formRef);
  const {
    isManualAddress,
    manualAddressLine1,
    manualAddressLine2,
    autocompleteAddress: my_address_as_a_one_line_text_you_autocomplete,
  } = thisAddress || { isManualAddress: false, autocompleteAddress: "" };
  const {
    disabled:
      i_should_be_disabled_while_setting_the_address_after_selecting_one_from_the_suggestions,
    suggestions,
    status,
  } = (thisAddress || { suggestions: [] }) as AddressAutocompleteUX;

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const loading = React.useMemo(() => {
    return status === "loading";
  }, [status]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback((event) => {
      React44ms.React.Convenient.input.onChange(formRefs, event);
    }, []);

  const handleSuggestionClick = React.useCallback((suggestion: string) => {
    React44ms.React.Convenient.input.onChange([
      formRefs,
      React44ms.Api.YieldablePort(
        React44ms.Api.Convenience.element.name<AddressAutocompleteFormController>(
          "handleSuggestionClick"
        )
      ),
    ])!({
      target: {
        value: suggestion,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  }, []);

  return (
    <div className="my-address">
      <button
        onClick={React44ms.React.Convenient.button.onClick(
          formRefs.isManualAddress
        )}
      >
        {isManualAddress
          ? `Use autocomplete instead`
          : `Enter manual address instead`}
      </button>

      {!isManualAddress ? (
        <React.Fragment>
          <input
            className={status === "valid" ? "valid" : "nocomment"}
            name="address-autocomplete"
            ref={inputRef}
            value={my_address_as_a_one_line_text_you_autocomplete}
            disabled={
              Boolean(
                i_should_be_disabled_while_setting_the_address_after_selecting_one_from_the_suggestions
              )
                ? true
                : false
            }
            onFocus={React44ms.React.Convenient.input.onFocus(formRefs)}
            onChange={handleChange}
            // onChange={React44ms.React.Convenient.input.onChange(formRefs)}
            onBlur={React44ms.React.Convenient.input.onBlur(formRefs)}
            placeholder={props.placeholder}
            title={props.title}
            type="text"
            data-testid={props.theAddressUserInput_reactTestId}
            required={props.required}
          ></input>
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion) => {
                const handleThisSuggestionClick: React.MouseEventHandler<
                  HTMLLIElement
                > = (event) => {
                  event.preventDefault();
                  handleSuggestionClick(suggestion);
                };
                return (
                  <li
                    key={`${suggestion}`}
                    id={`${suggestion}`}
                    onClick={handleThisSuggestionClick}
                    data-testid={
                      suggestion.includes("Atatürk")
                        ? props.theUsersMatchingAddressSuggestions_reactTestId
                        : undefined
                    }
                  >{`${suggestion}`}</li>
                );
              })}
            </ul>
          )}
          {loading && (
            <p>{`I AM LOADING RIGHT NOW! YEAH! LOADDDDDDDDD YAYYAY`}</p>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="manualAddressLine1"
            value={manualAddressLine1}
            onChange={React44ms.React.Convenient.input.onChange(
              formRefs.manualAddressLine1
            )}
            required
          />
          <input
            name="manualAddressLine2"
            value={manualAddressLine2}
            onChange={React44ms.React.Convenient.input.onChange(
              formRefs.manualAddressLine2
            )}
          />
        </React.Fragment>
      )}

      <AddressLineFormLogic
        ref={formRefs.manualAddressLine1}
        required={props.required}
      />
      <AddressLineFormLogic ref={formRefs.manualAddressLine2} />
      <AddressAutocompleteFormLogic
        ref={formRefs}
        yieldable={[formRefs.manualAddressLine1, formRefs.manualAddressLine2]}
        required={props.required}
      />
    </div>
  );
};

interface HowManyAddressesFormController {
  isThisAddressRequired: (addressIndex: number) => boolean;
}
interface HowManyAddressesFormLogicProps {
  ref: React44ms.Api.TypedRef<number>;
  addresses: React44ms.Api.ref;
}
const HowManyAddressesFormLogic44: React44ms.Api.FunctionComponent<
  HowManyAddressesFormLogicProps
> = (props) => {
  const [value, setValue] = React44ms.Api.useState(1);

  const isThisAddressRequired: HowManyAddressesFormController["isThisAddressRequired"] =
    React44ms.Api.useCallback((addressIndex: number) => {
      return addressIndex === 0;
    }, []);

  const handleCreateAnotherAddress: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback(
      (_event: React44ms.Api.InputOnChangeEvent) => {
        if (value < 5) {
          setValue(value + 1);
        }
      },
      [value]
    );

  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback(
      (event) => {
        if (value < 1) {
          throw new Error("You must have at least one address");
        }

        if (event.expect(props.addresses, []).length < value) {
          throw new Error("You must fill out all the addresses");
        }
      },
      [value, props.addresses]
    );

  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleCreateAnotherAddress} />

      <fulfill
        name={React44ms.Api.fulfill.name<HowManyAddressesFormController>(
          "isThisAddressRequired"
        )}
        handler={isThisAddressRequired}
      />

      <output name="value" React44ms_value={value} />
    </form>
  );
};
const HowManyAddressesFormLogic = React44ms.React.Reactify(
  HowManyAddressesFormLogic44
);
const MyForm: React.FunctionComponent<AppProps> = (props) => {
  const [formState, formRefs] = React44ms.React.useForm<
    MyFormExpects,
    HowManyAddressesFormController
  >();

  const addressesController =
    React44ms.React.useFulfillment<HowManyAddressesFormController>(
      formRefs?.howManyAddressesAmIExpecting
    );

  const [isLoading, setIsLoading] = React.useState(false);
  const [lastError, setLastError] =
    React.useState<
      ReturnType<
        React44ms.Service.ServiceClient["submitHandler"]
      >["reasons_this_form_is_invalid"]
    >(null);
  const [isSuccessful, setIsSuccessful] = React.useState(false);

  const doesTheFormHaveAnyValidAddressesYet = React.useMemo(() => {
    // const areThereAnyInvalidAddresses = new Array(
    //   formState?.howManyAddressesAmIExpecting
    // ).some((_irrelevant, index) => {
    //   const thisAddress = formState?.addresses?.[index];
    //   const { status } = (thisAddress || {}) as AddressAutocompleteUX;
    //   if (status !== "valid") {
    //     return true;
    //   }
    //   return false;
    // });
    // return !areThereAnyInvalidAddresses;

    const { reasons_this_form_is_invalid } =
      React44ms.React.Convenient.form.onSubmit(
        formRefs,
        {} as unknown as React.FormEvent<HTMLFormElement>
      );
    if (reasons_this_form_is_invalid) {
      return false;
    }
    return true;
  }, [formState]);

  const submitButtonClassName = React.useMemo(() => {
    const areThereAnyBlockersToSubmit = !doesTheFormHaveAnyValidAddressesYet;
    const canSubmit = !areThereAnyBlockersToSubmit;
    return canSubmit
      ? props.arrangement
          .theSubmitButton__when_it_has_the_valid_class_that_the_valid_class
      : props.arrangement.theSubmitButton__should_have_this_invalid_class;
  }, [doesTheFormHaveAnyValidAddressesYet, props]);

  const errorMessageClassName = React.useMemo(() => {
    if (
      Object.keys(lastError || {}).length > 0 ||
      lastError?.[React44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY]
    ) {
      return props.arrangement.theErrorMessage_should_have_this_invalid_class;
    }

    return props.arrangement
      .theErrorMessage_should_have_a_class_saying_its_all_good_and_enjoy_yo_success_yo;
  }, [lastError, props]);

  const theLoadingStateContent = React.useMemo(() => {
    const somethingWhichSaysLoading = isLoading;
    return somethingWhichSaysLoading
      ? props.arrangement
          .theLoadingState__should_have_this_text_when_it_should_be_loading
      : props.arrangement
          .theLoadingState__should_have_this_text_when_it_shouldnt_be_loading;
  }, [isLoading, props]);

  const theSuccessMessageContent = React.useMemo(() => {
    const somethingWhichSaysSuccess = isSuccessful;
    return somethingWhichSaysSuccess
      ? props.arrangement.theSuccessMessage__should_have_this_text
      : "NOT YET";
  }, [isSuccessful, props]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> =
    React.useCallback(
      async (event) => {
        event.preventDefault();

        const { reasons_this_form_is_invalid } =
          React44ms.React.Convenient.form.onSubmit(formRefs, event);
        setLastError(reasons_this_form_is_invalid);
        if (reasons_this_form_is_invalid) {
          if (
            reasons_this_form_is_invalid[
              React44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY
            ]
          ) {
            console.error(
              "React44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY"
            );
          }

          for (const [source, message] of Object.entries(
            reasons_this_form_is_invalid
          )) {
            console.error(source, message);
          }

          return;
        }

        // Yall finished or yall done?
        setIsLoading(true);
        try {
          await new Promise((resolve) => {
            setTimeout(() => {
              setIsLoading(false);
              setIsSuccessful(true);
              resolve({});
            }, 1000);
          });
        } catch (anyError) {
          setIsLoading(false);
          console.error(anyError);
          return;
        }
      },
      [formRefs, setLastError, setIsLoading, setIsSuccessful]
    );
  return (
    <form onSubmit={handleSubmit} role="form">
      {new Array(formState?.howManyAddressesAmIExpecting)
        .fill({})
        .map((_value, index) => {
          return addressesController?.isThisAddressRequired ? (
            <MyAddress
              formRef={formRefs.addresses[index].typedRef}
              theAddressUserInput_reactTestId={
                index === 0
                  ? props.arrangement.theAddressUserInput_reactTestId
                  : undefined
              }
              theUsersMatchingAddressSuggestions_reactTestId={
                props.arrangement.theUsersMatchingAddressSuggestions_reactTestId
              }
              key={index}
              title={`MY #${index} ADDRESS IS HURRRRRRRRRR YO`}
              placeholder="enter your preferred: BLAME IT ON RAP MUSIC SUBURB"
              required={addressesController?.isThisAddressRequired(index)}
            />
          ) : null;
        })}

      <button
        onClick={React44ms.React.Convenient.button.onClick(
          formRefs?.howManyAddressesAmIExpecting
        )}
      >{`Create Another Address`}</button>

      <button
        type="submit"
        data-testid={props.arrangement.theSubmitButton_reactTestId}
        className={submitButtonClassName}
      >{`Submit`}</button>

      <p
        data-testid={props.arrangement.theErrorMessage_reactTestId}
        className={errorMessageClassName}
      ></p>

      <p data-testid={props.arrangement.theLoadingState_reactTestId}>
        {theLoadingStateContent}
      </p>

      <p data-testid={props.arrangement.theSuccessMessage_reactTestId}>
        {theSuccessMessageContent}
      </p>

      <HowManyAddressesFormLogic
        ref={formRefs?.howManyAddressesAmIExpecting.typedRef}
        addresses={formRefs.addresses}
      />
    </form>
  );
};

interface AppProps {
  arrangement: Arrangement;
}
export const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <React44ms.React.Provider client={formCient}>
      <CountryCodeProvider>
        <AddressAutocompleteProvider>
          <section className="acme-commerce where-do-you-want-your-order-again">
            <h1>{`Give me free money, my ecommerce has only one product: just breathing your air for you for $99 a breath...`}</h1>

            <MyForm arrangement={props.arrangement} />
          </section>
        </AddressAutocompleteProvider>
      </CountryCodeProvider>
    </React44ms.React.Provider>
  );
};

const formCient = React44ms.React.createClient(ootb());
