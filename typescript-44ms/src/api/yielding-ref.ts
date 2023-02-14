import { ref } from "./ref";
import { YieldableHandlerPrimitive } from "./yieldable-handler";
import { YieldablePortPrimitive } from "./yieldable-port";

export interface YieldingRef {
  yieldingCallstackAdditions: ref[];
  yieldablePort?: YieldablePortPrimitive;
  yieldableHandler?: YieldableHandlerPrimitive;
  yieldedValue?: any;
}
