import { ReactingPower } from "./reacting-power";
export interface FactoryForepersonReactingPower {
    (reactingPower: ReactingPower): ReactingPower;
}
