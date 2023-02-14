import type { ref } from "./ref";

export interface Expect {
  <YourExpectedFormDataFromThatLocationRef extends any>(
    ref: ref,
    defaultValue: YourExpectedFormDataFromThatLocationRef
  ): YourExpectedFormDataFromThatLocationRef;
}
