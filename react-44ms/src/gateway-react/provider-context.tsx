import * as React from "react";

import { ProviderContextConsumer } from "./provider-context-consumer";

export const ProviderContextDefaultValue = {} as unknown as ProviderContextConsumer;
export const ProviderContext = React.createContext(ProviderContextDefaultValue);
