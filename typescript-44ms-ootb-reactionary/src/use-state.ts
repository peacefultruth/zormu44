import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const useState_sourceOfTruth_symbol = Symbol.for(
  "react-44ms/service/ootb-t44ms.Api.Reactionary/useState_sourceOfTruth_symbol"
);
export const useState: Service.IAmAReactionaryComponent<"useState"> = (
  iAmReact: Service.IAmReact
) => {
  return <YourType extends unknown>(initialState: YourType) => {
    const reactingPower = Service.useReactingPower();

    const sourceOfTruthCartridge = reactingPower.sourceOfTruthEjectButton(
      iAmReact,
      useState_sourceOfTruth_symbol
    );
    const sourceOfTruth =
      reactingPower.sourceOfTruthFromEjectedCartridge<YourType>(
        iAmReact,
        sourceOfTruthCartridge
      );

    const immediateSetter = (nextValue: YourType) => {
      sourceOfTruth.value = nextValue;

      const referenceToHere: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${sourceOfTruthCartridge.callstack.join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      iAmReact["HEY!LİSTEN!"](referenceToHere);
    };

    if (sourceOfTruth.fresh) {
      immediateSetter(initialState);
    }

    const referenceToHere: t44ms.Api.RefPrimitive = {
      [t44ms.Api.RefSymbol]: `${sourceOfTruthCartridge.callstack.join(".")}`,
      _refSymbol: t44ms.Api.RefSymbol,
    };
    const setState = (nextValue: YourType) => {
      iAmReact.add_work(referenceToHere, () => {
        immediateSetter(nextValue);
      });
    };
    return [sourceOfTruth.value!, setState];
  };
};
