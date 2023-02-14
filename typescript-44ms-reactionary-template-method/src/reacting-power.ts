import * as t44ms from "typescript-44ms";

import { DOMExplorer } from "./dom";
import { Service } from "./service";
import {
  SourceOfTruthEjectButton,
  SourceOfTruthExplorer,
  SourceOfTruthExplorerCartridgeBased,
} from "./source-of-truth";

export interface ReactingPower {
  service: Service;

  sourceOfTruth: SourceOfTruthExplorer;
  sourceOfTruthEjectButton: SourceOfTruthEjectButton;
  sourceOfTruthFromEjectedCartridge: SourceOfTruthExplorerCartridgeBased;

  dom: DOMExplorer;

  logicalContext: ReactingPower_LogicalContext;
}

export interface ReactingPower_LogicalContext {
  callStack: t44ms.Api.ref[];
  elementStack: Symbol[];
}
