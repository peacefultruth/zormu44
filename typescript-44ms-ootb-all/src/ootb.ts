import { FinalizedReactionaryBlueprint } from "typescript-44ms-reactionary-template-method";
import { ootbCreateElement } from "typescript-44ms-ootb-create-element";
import { ootbDom } from "typescript-44ms-ootb-dom";
import { ootbEvents } from "typescript-44ms-ootb-events";
import { ootbFormRefs } from "typescript-44ms-ootb-form-refs";
import { ootbLogicalContext } from "typescript-44ms-ootb-logical-context";
import { ootbPublicFormState } from "typescript-44ms-ootb-public-form-state";
import { ootbService } from "typescript-44ms-ootb-service";
import { ootbServiceController } from "typescript-44ms-ootb-service-controller";
import { ootbSourceOfTruthStack } from "typescript-44ms-ootb-source-of-truth";
import { ootbStateIndexingStack } from "typescript-44ms-ootb-state-indexing";

export const ootb = (): FinalizedReactionaryBlueprint => ({
  publicFormState: ootbPublicFormState,
  refs: ootbFormRefs,
  serviceController: ootbServiceController,
  service: ootbService,
  stateIndexing: ootbStateIndexingStack,
  sourceOfTruth: ootbSourceOfTruthStack,
  dom: ootbDom,
  logicalContext: ootbLogicalContext,
  createElement: ootbCreateElement,
  events: ootbEvents,
});
