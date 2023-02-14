import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const useMemo: Reactionary["useMemo"] = <YourType extends any>(
  computer: () => YourType,
  dependencies: any[]
) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.useMemo<YourType>(
    computer,
    dependencies
  );
};
