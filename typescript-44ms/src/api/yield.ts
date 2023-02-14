import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const Yield: Reactionary["Yield"] = (ref) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.Yield(ref);
};
