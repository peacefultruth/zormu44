import * as T44ms from "typescript-44ms";

import { DOMExplorer } from "./dom";
import { FactoryPublicFormState } from "./factory-public-form-state";
import { ServiceController } from "./service-controller";
import { ViewModel } from "./view-model";
import { VirtualDomController } from "./virtual-dom-controller";
import { VirtualDomNode } from "./virtual-dom-node";

export interface FactoryDom {
  (
    serviceController: ServiceController,
    publicFormStateStack: ReturnType<FactoryPublicFormState>,
    serviceViewModel: ViewModel
  ): {
    explorer: DOMExplorer;
    exploreRefs: (whereAmILiterally: T44ms.Api.ref) => VirtualDomNode | null;
    virtualDomController: VirtualDomController;
    giveCurrentRefStack: () => T44ms.Api.ref[];
  };
}
