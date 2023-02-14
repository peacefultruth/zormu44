export type input = Symbol & {
  onChange: (event: InputOnChangeEvent) => void;
};

export interface InputOnChangeEvent {
  target: InputOnChangeEventTarget;
}
export interface InputOnChangeEventTarget {
  value: any;
}
