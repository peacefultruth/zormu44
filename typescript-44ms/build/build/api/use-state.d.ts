import { Reactionary } from "./reactionary";
export declare const useState: Reactionary["useState"];
export type UseStateSetter<YourType extends any> = (newState: YourType) => void;
