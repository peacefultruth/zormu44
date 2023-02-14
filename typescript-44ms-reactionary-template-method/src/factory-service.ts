import { FactoryFormRefs } from "./factory-form-refs";
import { FactorySourceOfTruth } from "./factory-source-of-truth";
import { Service } from "./service";
import { ServiceController } from "./service-controller";

export interface FactoryService {
  (
    formRefStack: ReturnType<FactoryFormRefs>,
    sourceOfTruthStack: ReturnType<FactorySourceOfTruth>,
    serviceController: ServiceController
  ): Service;
}
