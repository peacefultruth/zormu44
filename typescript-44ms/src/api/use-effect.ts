import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const useEffect: Reactionary["useEffect"] = (
  computer,
  dependencies,
  configuration
) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.useEffect(
    computer,
    dependencies,
    configuration
  );
};
