import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const useCallback: Reactionary["useCallback"] = <
  YourCallbackType extends Function
>(
  callback: YourCallbackType,
  deps: any[]
) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.useCallback<YourCallbackType>(
    callback,
    deps
  );
};
