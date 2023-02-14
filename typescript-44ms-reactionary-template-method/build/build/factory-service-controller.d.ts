import { FactoryFormRefs } from "./factory-form-refs";
import { FactoryPublicFormState } from "./factory-public-form-state";
import { ServiceClient } from "./service-client";
import { ServiceController } from "./service-controller";
export interface FactoryServiceController {
    (publicFormState: ReturnType<FactoryPublicFormState>, formRefStack: ReturnType<FactoryFormRefs>): [
        ServiceController,
        ServiceClient["explore"],
        ServiceClient["exploreFulfillment"],
        ServiceClient["employee"],
        ServiceClient["employMeAsAProducer"]
    ];
}
