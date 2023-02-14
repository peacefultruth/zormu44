import { Reactionary } from "./reactionary";

export interface Service {
  useSubmit: () => Submitter;
  useReactingPower: () => ReactingPower;
}

export interface Submitter {
  submit: (submission: true) => void;
}

export interface ReactingPower {
  service: ReactingService;
}

export interface ReactingService {
  Reactionary: Reactionary;
}
