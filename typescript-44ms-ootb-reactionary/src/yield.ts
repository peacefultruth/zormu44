import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const Yield: Service.IAmAReactionaryComponent<"Yield"> = (
  iAmReact: Service.IAmReact
) => {
  const Yield: t44ms.Api.Reactionary["Yield"] = (ref) => {
    const reactingPower = Service.useReactingPower();

    const yieldingRef = t44ms.Api.extractYieldingRef(ref);

    const referenceToHere: t44ms.Api.RefPrimitive = {
      [t44ms.Api.RefSymbol]: `${yieldingRef.yieldingCallstackAdditions
        .map((refPrimitive) => {
          return refPrimitive[t44ms.Api.RefSymbol];
        })
        .join(".")}`,
      _refSymbol: t44ms.Api.RefSymbol,
    };
    iAmReact.add_work(
      referenceToHere,
      () => {
        const yieldableLogic = reactingPower.dom(
          iAmReact,
          yieldingRef.yieldingCallstackAdditions
        );
        yieldableLogic?.handleEvent(yieldingRef);
      },
      Service.WorkDescription.state
    );
  };
  return Yield;
};
