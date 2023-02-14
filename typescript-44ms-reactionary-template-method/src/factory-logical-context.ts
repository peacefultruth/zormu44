import * as t44ms from "typescript-44ms";

import { ReactingPower_LogicalContext } from "./reacting-power";

export interface LogicalContextController {
  begin_context: (
    logicalContext: ReactingPower_LogicalContext,
    ref?: t44ms.Api.ref
  ) => void;
  end_context: (logicalContext: ReactingPower_LogicalContext) => void;
}

export interface FactoryLogicalContext {
  (): [ReactingPower_LogicalContext, LogicalContextController];
}
