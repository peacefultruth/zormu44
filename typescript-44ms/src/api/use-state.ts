import { Reactionary } from "./reactionary";
import { useService } from "./use-service";

export const useState: Reactionary["useState"] = <YourType extends any>(
  initialState: YourType
): [YourType, UseStateSetter<YourType>] => {
  const { useReactingPower } = useService();
  const reactingPower = useReactingPower();
  const theValue =
    reactingPower.service.Reactionary.useState<YourType>(initialState);
  return theValue;
};

export type UseStateSetter<YourType extends any> = (newState: YourType) => void;
