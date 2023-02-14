import type { ref } from "./ref";
import { RefdValue } from "./refd-value";
import { UseStateSetter } from "./use-state";
import { YieldableHandlerPrimitive } from "./yieldable-handler";
import { YieldablePortPrimitive } from "./yieldable-port";
import { YieldedValuePrimitive } from "./yielded-value";
export type UseEffectConfiguration_Debounce_ms = number;
export interface UseEffectConfiguration {
    debounce?: UseEffectConfiguration_Debounce_ms;
}
export interface Reactionary {
    useFormRefs: <YourType extends any>(parent: ref) => YourType;
    useState: <YourType extends any>(initialState: YourType) => [YourType, UseStateSetter<YourType>];
    useRef: <YourType extends any>(initialValue: YourType) => RefdValue<YourType>;
    useMemo: <YourType extends any>(computer: () => YourType, dependencies: any[]) => YourType;
    useCallback: <YourCallbackType extends Function>(callback: YourCallbackType, deps: any[]) => YourCallbackType;
    useEffect: (computer: () => (() => void) | void, dependencies: any[], configuration?: UseEffectConfiguration) => void;
    Yield: (ref: ref | YieldableHandlerPrimitive | (ref | YieldablePortPrimitive | YieldableHandlerPrimitive | YieldedValuePrimitive)[] | undefined) => void;
}
