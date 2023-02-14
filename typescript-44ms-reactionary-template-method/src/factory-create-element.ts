import { LogicalContextController } from "./factory-logical-context";
import { FactorySourceOfTruth } from "./factory-source-of-truth";
import { FactoryStateIndexing } from "./factory-state-indexing";
import { IAmReact } from "./i-am-react";
import { ReactingPower } from "./reacting-power";
import { ServiceClient } from "./service-client";
import { VirtualDomController } from "./virtual-dom-controller";

export interface FactoryCreateElement {
  (
    stateIndexingStack: ReturnType<FactoryStateIndexing>,
    virtualDomController: VirtualDomController,
    logicalContextController: LogicalContextController,
    reactingPower: ReactingPower,
    sourceOfTruth: ReturnType<FactorySourceOfTruth>,
    iAmReact: IAmReact
  ): [
    ServiceClient["createElement"],
    ServiceClient["runElementEffects"],
    ServiceClient["destroyElement"]
  ];
}
