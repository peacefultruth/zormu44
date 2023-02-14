import { IAmReact } from "./i-am-react";
import { Work } from "./work";

export interface ViewModel {
  work_reconcile_state: Work;
  work_after_rendering: Work;

  nowish: () => any;
  ["NEVEERRRRRRRRRRRRRRR!"]: any;

  iAmReact: IAmReact;
}
