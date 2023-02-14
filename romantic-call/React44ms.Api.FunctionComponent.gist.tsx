import * as React from "react";
import * as React44ms from "react-44ms";

export interface CreditCardNumberExpects {
  value: string;
  error?: string | "blah" | null;
  nesting: {
    nests: {
      of: {
        nests: "Yeah!";
      };
    };
  };
}
interface CreditCardNumberLogic44Props {
  ref: React44ms.Api.TypedRef<CreditCardNumberExpects>;
}
export const CreditCardNumberLogic44: React44ms.Api.FunctionComponent<
  CreditCardNumberLogic44Props
> = (props) => {
  const [creditCardNumber, setCreditCardNumberBiggMoney] =
    React44ms.Api.useState("");
  const [creditCardNumberError, setCreditCardNumberError] =
    React44ms.Api.useState<string | null>(null);

  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      const value = event.target.value;
      setCreditCardNumberError(ifThisIsAValidCreditCardNumberSayNothing(value));
      setCreditCardNumberBiggMoney(value);
    }, []);
  const value: Partial<CreditCardNumberExpects> = React44ms.Api.useMemo(
    () => ({
      value: creditCardNumber,
      error: creditCardNumberError,
    }),
    [creditCardNumber, creditCardNumberError]
  );
  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback((event) => {
      React44ms.Api.submit(true);
    }, []);
  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
      <output React44ms_value={value} />
      <MuhNestingLogic44
        ref={React44ms.Api.Convenience.element.name<CreditCardNumberExpects>(
          "nesting"
        )}
      />
    </form>
  );
};
interface MuhNestingLogic44Props {
  ref: React44ms.Api.TypedRef<CreditCardNumberExpects["nesting"]>;
}
const MuhNestingLogic44: React44ms.Api.FunctionComponent<
  MuhNestingLogic44Props
> = (props) => {
  const [nesting, setNesting] = React44ms.Api.useState("");
  const [nestingError, setNestingError] = React44ms.Api.useState<string | null>(
    null
  );
  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      const value = event.target.value;
      setNestingError(ifThisIsAValidCreditCardNumberSayNothing(value));
      setNesting(value);
    }, []);
  const value: Partial<CreditCardNumberExpects["nesting"]> =
    React44ms.Api.useMemo(
      () => ({
        nests: {
          of: {
            // Human intervention:
            // This correctly gives an error in the ide.
            // nests: nesting,
            nests: "Yeah!",
          },
        },
      }),
      [nesting]
    );
  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback((event) => {
      React44ms.Api.submit(true);
    }, []);
  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
      <output React44ms_value={value} />
    </form>
  );
}; // copilot.tsx

export const ifThisIsAValidCreditCardNumberSayNothing = (
  value?: string | null
) => {
  if ((value?.length || 0) < 16) {
    return "Credit card number must be 16 digits";
  }
  return null;
};

export const CreditCardNumber: React.FunctionComponent = () => {
  const [state, locate] = React44ms.React.useForm<{
    creditCardNumber: CreditCardNumberExpects;
  }>();
  return (
    <React.Fragment>
      <input onChange={React44ms.React.Convenient.input.onChange(locate.typedRef)}/>
    </React.Fragment>
  );
};
