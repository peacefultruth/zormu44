import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbStateIndexingStack: Service.FactoryStateIndexing = () => {
  let stateIndexes_filo: Record<symbol, number>[] = [];
  const beginStateIndexesContext = () => {
    stateIndexes_filo = [...[{}], ...stateIndexes_filo];
  };
  const endStateIndexesContext = () => {
    stateIndexes_filo = stateIndexes_filo.slice(1);
  };
  const topOfTheStack = () => stateIndexes_filo[0];
  const stateCounter = (ref: Symbol) => {
    const thisContext = topOfTheStack();
    if (
      thisContext[ref.valueOf()] === undefined ||
      thisContext[ref.valueOf()] === null
    ) {
      thisContext[ref.valueOf()] = -1;
    }
    thisContext[ref.valueOf()] = thisContext[ref.valueOf()] + 1;
    return thisContext[ref.valueOf()];
  };

  return {
    beginStateIndexesContext,
    endStateIndexesContext,
    stateCounter,
  };
};
