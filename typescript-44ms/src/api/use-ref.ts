import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const useRef: Reactionary["useRef"] = <YourType extends any>(
  initialState: YourType
) => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  return reactingPower.service.Reactionary.useRef<YourType>(initialState);
};
