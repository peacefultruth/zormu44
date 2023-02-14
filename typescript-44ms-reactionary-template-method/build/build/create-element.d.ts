/// <reference types="react" />
import * as T44ms from "typescript-44ms";
export declare const createElement: <YourPropsType extends unknown>(type: T44ms.Api.FunctionComponent<YourPropsType>, props: Omit<YourPropsType, "ref"> & {
    ref: string;
}, _ref?: Symbol) => JSX.Element;
