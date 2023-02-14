import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const useMemo_sourceOfTruth_symbol = Symbol.for(
  "react-44ms/service/ootb-t44ms.Api.Reactionary/useMemo_sourceOfTruth_symbol"
);

type Memoized<YourType> = {
  memoizedValue: YourType;
  memoizedDependencies: any[];
};

export const useMemo: Service.IAmAReactionaryComponent<"useMemo"> = (
  iAmReact: Service.IAmReact
) => {
  return <YourType extends unknown>(
    computer: () => YourType,
    dependencies: any[]
  ): YourType => {
    const reactingPower = Service.useReactingPower();

    const sourceOfTruthCartridge = reactingPower.sourceOfTruthEjectButton(
      iAmReact,
      useMemo_sourceOfTruth_symbol
    );
    const sourceOfTruth = reactingPower.sourceOfTruthFromEjectedCartridge<
      Memoized<YourType>
    >(iAmReact, sourceOfTruthCartridge);

    const haveAnyOfMyDependenciesChanged =
      t44ms.Always.dependenciesVsDependencies(
        sourceOfTruth.value?.memoizedDependencies,
        dependencies
      );

    if (
      sourceOfTruth.fresh ||
      haveAnyOfMyDependenciesChanged ===
        t44ms.Always.NoTheDependenciesAreNotTheSame
    ) {
      const computedValue = computer();
      const memo: Memoized<YourType> = {
        memoizedValue: computedValue,
        memoizedDependencies: dependencies,
      };
      sourceOfTruth.value = memo;

      const referenceToHere: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${sourceOfTruthCartridge.callstack.join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      iAmReact["HEY!LİSTEN!"](referenceToHere);
    }

    return sourceOfTruth.value!.memoizedValue;
  };
};
