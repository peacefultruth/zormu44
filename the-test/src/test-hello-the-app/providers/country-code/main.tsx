import * as React from "react";
import * as React44ms from "react-44ms";

export enum Countries {
  America = "us",
  Australia = "au",
  NewZealand = "nz",
  Singapore = "sg",
}

type Country = `${Countries}`;

export interface CountryCodeConsumerInterface {
  countryCode: Country;
}
const defaultValue = {} as unknown as CountryCodeConsumerInterface;
const CountryCodeContext = React.createContext(defaultValue);
interface CountryCodeProviderProps {
  children: React.ReactNode;
}
const CountryCodeFormContext =
  React44ms.React.createContext(defaultValue, CountryCodeContext);
export const CountryCodeProvider: React.FunctionComponent<
  CountryCodeProviderProps
> = (props) => {
  const value: CountryCodeConsumerInterface = React.useMemo(
    () => ({
      countryCode: Countries.America,
    }),
    []
  );
  return (
    <CountryCodeContext.Provider value={value}>
      <CountryCodeFormContext.Provider value={value}>
        {props.children || []}
      </CountryCodeFormContext.Provider>
    </CountryCodeContext.Provider>
  );
};
export const useCountryCode = () => {
  const value = React.useContext(CountryCodeContext);
  if (value === defaultValue) {
    throw new Error("useCountryCode must be used within a CountryCodeProvider");
  }
  return value;
};
export const useCountryCodeFormContext = () => {
  const value = React44ms.React.useContext(
    CountryCodeFormContext
  );
  if (value === defaultValue) {
    throw new Error(
      "useCountryCodeFormContext must be used within a CountryCodeProvider"
    );
  }
  return value;
};
