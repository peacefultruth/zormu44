import { ServiceClient } from "./service-client";
export interface FactoryForepersonServiceClient {
    (serviceClient: ServiceClient): ServiceClient;
}
