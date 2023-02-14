import * as t44ms from "typescript-44ms";
import { IAmReact } from "./i-am-react";
export type IAmAReactionaryComponent<ReactionKey extends keyof t44ms.Api.Reactionary> = (iAmReact: IAmReact) => t44ms.Api.Reactionary[ReactionKey];
