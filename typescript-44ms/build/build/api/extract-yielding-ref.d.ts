import { ref } from "./ref";
import { YieldableHandlerPrimitive } from "./yieldable-handler";
import { YieldablePortPrimitive } from "./yieldable-port";
import { YieldedValuePrimitive } from "./yielded-value";
import { YieldingRef } from "./yielding-ref";
export declare const extractYieldingRef: (refThatCanHaveYielding: ref | YieldableHandlerPrimitive | (ref | YieldablePortPrimitive | YieldableHandlerPrimitive | YieldedValuePrimitive)[] | undefined) => YieldingRef;
