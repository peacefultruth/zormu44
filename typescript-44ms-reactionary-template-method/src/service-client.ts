import * as t44ms from "typescript-44ms";

import { Service } from "./service";
import { Work } from "./work";

export interface ServiceClient {
  createElement: <YourPropsType extends any>(
    type: t44ms.Api.FunctionComponent<YourPropsType>,
    props: YourPropsType,
    ref?: Symbol
  ) => ReturnType<t44ms.Api.FunctionComponent<YourPropsType>>;
  runElementEffects: (ref: Symbol) => void;
  destroyElement: (ref: Symbol) => void;

  eventHandler: t44ms.Api.Reactionary["Yield"];
  submitHandler: (ref: Parameters<t44ms.Api.Reactionary["Yield"]>[0]) => {
    reasons_this_form_is_invalid: {
      [
        key:
          | string
          | typeof t44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY
      ]: string;
    } | null;
  };

  explore: <YourFormStateDescribingInterfaceType extends any>(
    subscriber: (latest: YourFormStateDescribingInterfaceType | null) => void,
    whereAmI?: t44ms.Api.ref
  ) => ServiceClientExplorerConsiderations;

  exploreFulfillment: <
    YourExpectedControllerInterfaceThatLivesAtThatRef extends any
  >(
    subscriber: (
      latest: YourExpectedControllerInterfaceThatLivesAtThatRef | null
    ) => void,
    whereAmI?: t44ms.Api.ref
  ) => ServiceClientExplorerConsiderations;

  employee: (
    subscriber: Work,
    whereAmI?: t44ms.Api.ref
  ) => ServiceClientExplorerConsiderations;
  employMeAsAProducer: (
    subscriber: Work,
    whereAmI?: t44ms.Api.ref
  ) => ServiceClientExplorerConsiderations;

  nowish: Service["ViewModel"]["nowish"];

  formRefs: any;

  formRefsIsland: (
    refRelative: t44ms.Api.ref | undefined
  ) => ServiceClient["formRefs"];
}

export interface ServiceClientExplorerConsiderations {
  unsubscribing: () => void;
}
