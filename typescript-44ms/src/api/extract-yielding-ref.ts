import { ref } from "./ref";
import { isThatARef } from "./ref-primitive";
import {
  isThatAYieldableHandler,
  YieldableHandlerPrimitive,
} from "./yieldable-handler";
import { isThatAYieldablePort, YieldablePortPrimitive } from "./yieldable-port";
import {
  extractYieldedValue,
  isThatAYieldedValuePrimitive,
  YieldedValueNotFoundSymbol,
  YieldedValuePrimitive,
} from "./yielded-value";
import { YieldingRef } from "./yielding-ref";

export const extractYieldingRef = (
  refThatCanHaveYielding:
    | ref
    | YieldableHandlerPrimitive
    | (
        | ref
        | YieldablePortPrimitive
        | YieldableHandlerPrimitive
        | YieldedValuePrimitive
      )[]
    | undefined
) => {
  let yieldingCallstackAdditions: ref[] = [];
  let yieldablePort: YieldablePortPrimitive | undefined = undefined;
  let yieldableHandler: YieldableHandlerPrimitive | undefined = undefined;
  let yieldedValue: any | undefined = YieldedValueNotFoundSymbol;
  if (Array.isArray(refThatCanHaveYielding)) {
    type NoLongerAnyYieldableHandlerPrimitive = ref[];
    refThatCanHaveYielding = refThatCanHaveYielding.filter((refComponent) => {
      if (isThatAYieldableHandler(refComponent)) {
        yieldableHandler = refComponent;
        return false;
      }
      return true;
    }) as NoLongerAnyYieldableHandlerPrimitive;

    refThatCanHaveYielding = (
      refThatCanHaveYielding as NoLongerAnyYieldableHandlerPrimitive
    ).filter((refComponent: ref) => {
      if (isThatAYieldablePort(refComponent)) {
        yieldablePort = refComponent;
        return false;
      }
      return true;
    });

    refThatCanHaveYielding = (
      refThatCanHaveYielding as NoLongerAnyYieldableHandlerPrimitive
    ).filter((refComponent: ref) => {
      if (isThatAYieldedValuePrimitive(refComponent)) {
        yieldedValue = extractYieldedValue(refComponent);
        return false;
      }
      return true;
    });

    const lastValueInTheRef =
      refThatCanHaveYielding[refThatCanHaveYielding.length - 1];
    if (!isThatARef(lastValueInTheRef)) {
      yieldedValue = lastValueInTheRef;
      refThatCanHaveYielding = refThatCanHaveYielding.slice(
        0,
        refThatCanHaveYielding.length - 1
      );
    }

    yieldingCallstackAdditions =
      refThatCanHaveYielding as NoLongerAnyYieldableHandlerPrimitive;
  } else if (refThatCanHaveYielding) {
    yieldingCallstackAdditions = [refThatCanHaveYielding as ref];
  }

  const yieldingRef: YieldingRef = {
    yieldingCallstackAdditions,
    yieldablePort,
    yieldableHandler,
    yieldedValue,
  };

  return yieldingRef;
};
