import { ReactingPower } from "./reacting-power";
import { FinalizedReactionaryBlueprint } from "./reactionary-blueprint";
import { ServiceClient } from "./service-client";

export const reactionaryTemplateMethod = (
  blueprint: FinalizedReactionaryBlueprint
) => {
  const publicFormStateStack = blueprint.publicFormState();

  const formRefStack = blueprint.refs(publicFormStateStack);
  const [formRefs, formRefsIsland] = formRefStack;

  const stateIndexingStack = blueprint.stateIndexing();

  const sourceOfTruthStack = blueprint.sourceOfTruth(stateIndexingStack);
  const {
    sourceOfTruth,
    sourceOfTruthEjectButton,
    sourceOfTruthFromEjectedCartridge,
  } = sourceOfTruthStack;

  const [serviceController, explore, exploreFulfillment, employee, employMeAsAProducer] =
    blueprint.serviceController(publicFormStateStack, formRefStack);

  const service = blueprint.service(
    formRefStack,
    sourceOfTruthStack,
    serviceController
  );

  const dom = blueprint.dom(
    serviceController,
    publicFormStateStack,
    service.ViewModel
  );

  const [logicalContext, logicalContextController] = blueprint.logicalContext();

  let reactingPower: ReactingPower = {
    service,
    sourceOfTruth,
    sourceOfTruthEjectButton,
    sourceOfTruthFromEjectedCartridge,
    dom: dom.explorer,
    logicalContext,
  };
  if (blueprint.reactingPower) {
    reactingPower = blueprint.reactingPower(reactingPower);
  }

  const [createElement, runElementEffects, destroyElement] =
    blueprint.createElement(
      stateIndexingStack,
      dom.virtualDomController,
      logicalContextController,
      reactingPower,
      sourceOfTruthStack,
      service.ViewModel.iAmReact
    );

  const [eventHandler, submitHandler] = blueprint.events(dom, reactingPower);

  let client: ServiceClient = {
    createElement,
    runElementEffects,
    destroyElement,
    eventHandler,
    submitHandler,
    explore,
    exploreFulfillment,
    employee,
    employMeAsAProducer,
    nowish: publicFormStateStack.publicFormStateImmediate,
    formRefs,
    formRefsIsland,
  };
  if (blueprint.serviceClient) {
    client = blueprint.serviceClient(client);
  }
  return client;
};
