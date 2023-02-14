import { Expect } from "./expect";

export type form = Symbol & {
  onSubmit: (event: FormOnSubmitEvent) => void;
};

export interface FormOnSubmitEvent {
  expect: Expect;
}
