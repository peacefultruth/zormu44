import * as React from "react";
import { Client } from "./client";
export interface ProviderProps {
    children: React.ReactNode;
    client: Client;
}
export declare const Provider: React.FunctionComponent<ProviderProps>;
