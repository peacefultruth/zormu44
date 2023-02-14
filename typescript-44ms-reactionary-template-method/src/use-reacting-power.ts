import { ReactingPower } from "./reacting-power";

export const React44msReactingPowerSymbol = Symbol.for(
  "react-44ms/service/reacting-power"
);

export const useReactingPower = () => {
  return (window as any)[
    React44msReactingPowerSymbol
  ] as ReactingPower;
};
