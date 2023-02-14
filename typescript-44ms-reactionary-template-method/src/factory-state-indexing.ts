export interface FactoryStateIndexing {
  (): {
    beginStateIndexesContext: () => void;
    endStateIndexesContext: () => void;
    stateCounter: (ref: Symbol) => number;
  };
}
