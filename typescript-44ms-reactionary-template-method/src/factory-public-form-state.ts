import { PublicFormStateStack } from "./public-form-state-stack";

export interface FactoryPublicFormState {
  (): PublicFormStateStack;
}
