import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const useEffect_sourceOfTruth_symbol = Symbol.for(
  "react-44ms/service/ootb-reactionary/useEffect_sourceOfTruth_symbol"
);

type Effect = {
  afterlife?: () => void;
  memoizedDependencies: any[];
};

export const useEffect: Service.IAmAReactionaryComponent<"useEffect"> = (
  iAmReact: Service.IAmReact
) => {
  const useEffect: t44ms.Api.Reactionary["useEffect"] = (
    computer,
    dependencies,
    configuration
  ) => {
    const reactingPower = Service.useReactingPower();

    const sourceOfTruthCartridge = reactingPower.sourceOfTruthEjectButton(
      iAmReact,
      useEffect_sourceOfTruth_symbol
    );
    const sourceOfTruth =
      reactingPower.sourceOfTruthFromEjectedCartridge<Effect>(
        iAmReact,
        sourceOfTruthCartridge
      );

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
      const this_afterlife = sourceOfTruth.value?.afterlife;
      const this_effect_work = () => {
        this_afterlife?.();
        if (configuration?.debounce) {
          const timeoutId = setTimeout(() => {
            const newAfterlife = computer();
            if (newAfterlife) {
              const latestSourceOfTruth =
                reactingPower.sourceOfTruthFromEjectedCartridge<Effect>(
                  iAmReact,
                  sourceOfTruthCartridge
                );
              const latestSourceOfTruthValue = latestSourceOfTruth.value;
              if (latestSourceOfTruthValue) {
                latestSourceOfTruthValue.afterlife = newAfterlife;
              }
            } else {
              const latestSourceOfTruth =
                reactingPower.sourceOfTruthFromEjectedCartridge<Effect>(
                  iAmReact,
                  sourceOfTruthCartridge
                );
              const latestSourceOfTruthValue = latestSourceOfTruth.value;
              if (latestSourceOfTruthValue) {
                delete latestSourceOfTruthValue.afterlife;
              }
            }
          }, configuration.debounce);
          const effect: Effect = {
            memoizedDependencies: dependencies,
            afterlife: () => {
              clearTimeout(timeoutId);
            },
          };
          sourceOfTruth.value = effect;
        } else {
          const afterlife = computer();
          const effect: Effect = {
            memoizedDependencies: dependencies,
          };
          if (afterlife) {
            effect.afterlife = afterlife;
          }
          sourceOfTruth.value = effect;
        }
      };

      const referenceToHere: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${sourceOfTruthCartridge.callstack.join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      iAmReact.add_work(
        referenceToHere,
        this_effect_work,
        Service.WorkDescription.after_rendering
      );
    }
  };

  iAmReact.sourceOfTruthOnCrushKillDestroy<Effect>(
    useEffect_sourceOfTruth_symbol,
    (sourceOfTruthRawCollection) => {
      sourceOfTruthRawCollection.forEach((anEffectToDestroy) => {
        anEffectToDestroy.afterlife?.();
      });
    }
  );

  return useEffect;
};
