/// <reference types="react" />
import * as t44ms from "typescript-44ms";
import { Work } from "./work";
import { VirtualDomNode } from "./virtual-dom-node";
export interface VirtualDomController {
    begin_context: (ref?: t44ms.Api.ref) => void;
    createElement: <YourPropsType>(type: t44ms.Api.FunctionComponent<YourPropsType>, props: YourPropsType) => void;
    end_context: (rendered: JSX.Element) => VirtualDomNode;
    effects: Work;
    crush_kill_destroy: (ref: t44ms.Api.ref) => void;
}
