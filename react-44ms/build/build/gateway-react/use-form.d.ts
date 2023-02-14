import { Api } from "typescript-44ms";
import { LooksLikeAReactRefToReact } from "./convenient-internals";
type Refify<YourFormStateDescribingInterfaceType> = YourFormStateDescribingInterfaceType extends {
    [key: string | symbol | number]: any;
} ? {
    [K in keyof YourFormStateDescribingInterfaceType]-?: Refify<Required<YourFormStateDescribingInterfaceType[K]>>;
} & LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType> : LooksLikeAReactRefToReact<YourFormStateDescribingInterfaceType>;
export declare const useForm: <YourFormStateDescribingInterfaceType extends unknown, YourFormReferencesCanReferenceAnInterfaceWithCallableInputsThatComesFromYourFormLogic extends unknown = {}>(ref?: Api.RefPrimitive | Api.TypedRef<YourFormStateDescribingInterfaceType> | undefined) => [YourFormStateDescribingInterfaceType | null, Refify<Required<YourFormStateDescribingInterfaceType & YourFormReferencesCanReferenceAnInterfaceWithCallableInputsThatComesFromYourFormLogic>>];
export {};
