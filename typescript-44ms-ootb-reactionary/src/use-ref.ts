import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const useRef_sourceOfTruth_symbol = Symbol.for(
  "react-44ms/service/ootb-t44ms.Api.Reactionary/useRef_sourceOfTruth_symbol"
);
export const useRef: Service.IAmAReactionaryComponent<"useRef"> = (
  iAmReact: Service.IAmReact
) => {
  return <YourType extends any>(initialState: YourType) => {
    const reactingPower = Service.useReactingPower();

    const sourceOfTruthCartridge = reactingPower.sourceOfTruthEjectButton(
      iAmReact,
      useRef_sourceOfTruth_symbol
    );

    const sourceOfTruth =
      reactingPower.sourceOfTruthFromEjectedCartridge<YourType>(
        iAmReact,
        sourceOfTruthCartridge
      );
    if (sourceOfTruth.fresh) {
      sourceOfTruth.value = initialState;
    }

    const refdValue = new Proxy<t44ms.Api.RefdValue<YourType>>(
      {} as unknown as any,
      {
        get: (_target: any, name: any) => {
          if (name === "current") {
            return sourceOfTruth.value;
          }
        },
        set: (_target: any, property: string | symbol, newValue: any) => {
          if (property === "current") {
            sourceOfTruth.value = newValue;
          }
          return true;
        },
      }
    );

    return refdValue;
  };
};
