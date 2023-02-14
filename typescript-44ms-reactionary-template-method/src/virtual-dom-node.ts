import * as t44ms from "typescript-44ms";

import { GatewayNode } from "./dom";

export type DomNode = JSX.Element;

export interface Output {
  name?: string;
  value: any;
}
export interface VirtualDomNode {
  children: { [key: string | number]: VirtualDomNode };
  type?: t44ms.Api.FunctionComponent;
  props?: any;
  rendered?: DomNode;
  gateway?: GatewayNode;
  lastFulfillment?: {
    [name: string | number | symbol]: Function;
  };
  latestFulfillment?: {
    [name: string | number | symbol]: Function;
  };
  lastOutputs?: Output[];
  latestOutputs?: Output[];
  ref: t44ms.Api.ref;

  latestExplicitChildren: string[] | null;
  lastExplicitChildren: string[] | null;
}
