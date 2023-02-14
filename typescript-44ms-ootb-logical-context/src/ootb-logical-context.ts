import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbLogicalContext: Service.FactoryLogicalContext = () => {
  const logicalContext: Service.ReactingPower_LogicalContext = {
    callStack: [],
    elementStack: [],
  };

  interface Counter {
    value: number;
  }
  let counterStack_filo: Counter[] = [];
  const topOfTheCounterStack = () => {
    return counterStack_filo.length > 0 ? counterStack_filo[0] : undefined;
  };
  const incrementCounter = () => {
    const top = topOfTheCounterStack();
    if (top) {
      top.value = top.value + 1;
      return top.value;
    }
    return -1;
  };
  const begin_context = (
    logicalContext: Service.ReactingPower_LogicalContext,
    ref?: any
  ) => {
    const thisCounted = incrementCounter();

    counterStack_filo = [
      ...[
        {
          value: -1,
        },
      ],
      ...counterStack_filo,
    ];

    logicalContext.callStack = [
      ...(ref ? [ref] : []),
      ...logicalContext.callStack,
    ];

    const bespokeImplicitRef: t44ms.Api.RefPrimitive = {
      [t44ms.Api.RefSymbol]: `__ImplicitReferenceToElement_${thisCounted}`,
      _refSymbol: t44ms.Api.RefSymbol,
    };
    logicalContext.elementStack = [
      ...(ref ? [ref] : [bespokeImplicitRef]),
      ...logicalContext.elementStack,
    ];
  };
  const end_context = (
    logicalContext: Service.ReactingPower_LogicalContext
  ) => {
    logicalContext.elementStack = logicalContext.elementStack.slice(1);
    logicalContext.callStack = logicalContext.callStack.slice(1);
  };
  const logicalContextController: Service.LogicalContextController = {
    begin_context,
    end_context,
  };
  return [logicalContext, logicalContextController];
};
