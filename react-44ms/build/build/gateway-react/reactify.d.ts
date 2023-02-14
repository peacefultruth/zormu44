import * as React from "react";
import { Api } from "typescript-44ms";
import { LooksLikeAReactRefToReact } from "./convenient-internals";
type PretendYouOnlyCareAboutReactRefs<YourPropsTypeWhichDoesntCareAboutReact> = YourPropsTypeWhichDoesntCareAboutReact extends Api.ref ? ExtractRefTypeGround<YourPropsTypeWhichDoesntCareAboutReact> extends never ? LooksLikeAReactRefToReact<any> | null : Partial<React.Ref<Symbol>> & YourPropsTypeWhichDoesntCareAboutReact : YourPropsTypeWhichDoesntCareAboutReact extends {
    [key: string | symbol | number]: any;
} ? {
    [K in keyof YourPropsTypeWhichDoesntCareAboutReact]: PretendYouOnlyCareAboutReactRefs<YourPropsTypeWhichDoesntCareAboutReact[K]>;
} : YourPropsTypeWhichDoesntCareAboutReact;
export interface ReactifiedComponentHasAdditionalProps {
}
export declare const Reactify: <YourPropsType extends unknown = {}>(form_logic_component: Api.FunctionComponent<YourPropsType>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<PretendYouOnlyCareAboutReactRefs<YourPropsType> & ReactifiedComponentHasAdditionalProps> & (ExtractRefType<YourPropsType> extends never ? RequiredSpecialRef : RequiredSpecialTypedRef<ExtractRefType<YourPropsType>>)>;
type ExtractRefTypeGround<YourType> = YourType extends Api.TypedRef<infer YourExpectedType> ? YourExpectedType : never;
type ExtractRefType<YourType> = YourType extends {
    ref: Api.TypedRef<infer YourExpectedType>;
} ? YourExpectedType : never;
type RequiredSpecialTypedRef<YourType> = {
    ref: Partial<React.Ref<Symbol>> & Api.TypedRef<YourType>;
};
type RequiredSpecialRef = {
    ref: LooksLikeAReactRefToReact<any>;
};
export {};
