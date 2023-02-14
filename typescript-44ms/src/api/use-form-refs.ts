import { Reactionary } from "./reactionary";
import { ref } from "./ref";
import { useService } from "./use-service";

export const useFormRefs: Reactionary["useFormRefs"] = <YourType extends any>(
  parent: ref
) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.useFormRefs<YourType>(parent);
};
