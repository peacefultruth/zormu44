import { FactoryCreateElement } from "./factory-create-element";
import { FactoryDom } from "./factory-dom";
import { FactoryEvents } from "./factory-events";
import { FactoryForepersonReactingPower } from "./factory-foreperson-reacting-power";
import { FactoryForepersonServiceClient } from "./factory-foreperson-service-client";
import { FactoryFormRefs } from "./factory-form-refs";
import { FactoryLogicalContext } from "./factory-logical-context";
import { FactoryPublicFormState } from "./factory-public-form-state";
import { FactoryService } from "./factory-service";
import { FactoryServiceController } from "./factory-service-controller";
import { FactorySourceOfTruth } from "./factory-source-of-truth";
import { FactoryStateIndexing } from "./factory-state-indexing";

export interface ReactionaryBlueprint {
  publicFormState?: FactoryPublicFormState;
  refs?: FactoryFormRefs;
  serviceController?: FactoryServiceController;
  service?: FactoryService;
  stateIndexing?: FactoryStateIndexing;
  sourceOfTruth?: FactorySourceOfTruth;
  dom?: FactoryDom;
  logicalContext?: FactoryLogicalContext;
  reactingPower?: FactoryForepersonReactingPower;
  createElement?: FactoryCreateElement;
  events?: FactoryEvents;
  serviceClient?: FactoryForepersonServiceClient;
}

type RequireEverythingExcept<T, K extends keyof T> = Required<Omit<T, K>> &
  Pick<T, K>;

export type FinalizedReactionaryBlueprint =
  RequireEverythingExcept<
    ReactionaryBlueprint,
    "reactingPower" | "serviceClient"
  >;
