import { FactoryDom } from "./factory-dom";
import { ReactingPower } from "./reacting-power";
import { ServiceClient } from "./service-client";

export interface FactoryEvents {
  (dom: ReturnType<FactoryDom>, reactingPower: ReactingPower): [
    ServiceClient["eventHandler"],
    ServiceClient["submitHandler"]
  ];
}
