import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const useCallback_sourceOfTruth_symbol = Symbol.for(
  "react-44ms/service/ootb-t44ms.Api.Reactionary/useCallback_sourceOfTruth_symbol"
);

type MemoizedCallback<YourCallbackType> = {
  memoizedProxy: YourCallbackType;
  memoizedValue: YourCallbackType;
  memoizedDependencies: any[];
};

export const useCallback: Service.IAmAReactionaryComponent<"useCallback"> = (
  iAmReact: Service.IAmReact
) => {
  return <YourCallbackType extends Function>(
    callback: YourCallbackType,
    dependencies: any[]
  ): YourCallbackType => {
    const reactingPower = Service.useReactingPower();

    const sourceOfTruthCartridge = reactingPower.sourceOfTruthEjectButton(
      iAmReact,
      useCallback_sourceOfTruth_symbol
    );
    const sourceOfTruth = reactingPower.sourceOfTruthFromEjectedCartridge<
      MemoizedCallback<YourCallbackType>
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
      const handler = {
        apply: function (_target: Function, _thisArg: any, argumentsList: any) {
          const yourCallbacksLatestSourceOfTruth =
            reactingPower.sourceOfTruthFromEjectedCartridge<
              MemoizedCallback<YourCallbackType>
            >(iAmReact, sourceOfTruthCartridge);
          const yourCallback =
            yourCallbacksLatestSourceOfTruth.value?.memoizedValue;
          return yourCallback?.apply(null, argumentsList);
        },
      };
      const callbackGetsProxied = new Proxy<YourCallbackType>(
        callback,
        handler
      );

      const memoizedCallback: MemoizedCallback<YourCallbackType> = {
        memoizedValue: callback,
        memoizedProxy: callbackGetsProxied,
        memoizedDependencies: dependencies,
      };
      sourceOfTruth.value = memoizedCallback;

      const referenceToHere: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${sourceOfTruthCartridge.callstack.join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      iAmReact["HEY!LİSTEN!"](referenceToHere);
    }

    return sourceOfTruth.value?.memoizedProxy!;
  };
};
