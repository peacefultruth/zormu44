import { Client } from "./client";
export interface ProviderContextConsumer {
    client: Client;
    pushAnEventIntoReact: (callback: CallableFunction) => void;
}
