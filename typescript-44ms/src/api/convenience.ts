import { RefPrimitive, RefSymbol } from "./ref-primitive";

const element = {
  name: <YourInterfaceYouWantToKey extends any>(
    whatever: keyof YourInterfaceYouWantToKey
  ) => whatever,
};

const RefPrimitiveConvenience = {
  on: <YourInterfaceYouWantToKey extends any>(
    whatever: keyof YourInterfaceYouWantToKey
  ) => {
    const refPrimitive: RefPrimitive = {
      [RefSymbol]: `${whatever as unknown as string}`,
      _refSymbol: RefSymbol,
    };
    return refPrimitive;
  },
};

export const Convenience = {
  element,
  RefPrimitive: RefPrimitiveConvenience,
};
