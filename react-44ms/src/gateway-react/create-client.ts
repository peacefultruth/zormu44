import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

import { Client } from "./client";
import { startTheRevolution } from "./create-service-client";

export const createClient = (
  blueprint: Service.FinalizedReactionaryBlueprint
) => {
  const serviceClient = startTheRevolution(blueprint);

  t44ms.Api.setYourService(Service);

  const client: Client = {
    serviceClient,
  };
  return client;
};
