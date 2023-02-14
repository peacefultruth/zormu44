import * as t44ms from "typescript-44ms";

import { Work, WorkDescription } from "./work";
import {
  SourceOfTruthGracefulExit,
  SourceOfTruthPrimitiveExplorer,
} from "./source-of-truth";
import { ServiceClient } from "./service-client";

/**
 * Special Godlike Object
 */
export interface IAmReact {
  [key: string | number | symbol]: any;
  add_work: (
    ref: t44ms.Api.ref,
    my_buffered_callback: Work,
    work_description?: WorkDescription
  ) => void;
  ["what!?"]: SourceOfTruthPrimitiveExplorer;
  ["HEY!LİSTEN!"]: (ref: t44ms.Api.ref) => void;

  formRefs: ServiceClient["formRefs"];
  formRefsIsland: ServiceClient["formRefsIsland"];

  sourceOfTruthOnCrushKillDestroy: SourceOfTruthGracefulExit;
}
