import * as Service from "typescript-44ms-reactionary-template-method";
type ICantBelieveItsNotButter = {
    [AnyElement in keyof JSX.IntrinsicElements]: {
        [AnyEventHandler in keyof JSX.IntrinsicElements[AnyElement] as Exclude<AnyEventHandler, "onSubmit">]-?: BetweenReactAndMs<JSX.IntrinsicElements[AnyElement][AnyEventHandler]>;
    } & {
        [AnyEventHandler in keyof Pick<JSX.IntrinsicElements[AnyElement], "onSubmit">]-?: BetweenReactAndMs__onSubmit<JSX.IntrinsicElements[AnyElement][AnyEventHandler]>;
    };
};
type TheEventParameterPassedToTheFunctionType<T> = T extends (event: infer P) => void ? P : never;
type BetweenReactAndMs<YourEventHandlerExpectedType> = (ref: any, // LooksLikeAReactRefToReact | LooksLikeAReactRefToReact[],
event?: TheEventParameterPassedToTheFunctionType<YourEventHandlerExpectedType>) => YourEventHandlerExpectedType;
declare function BetweenReactAndMs__onSubmit__type_hack<YourEventHandlerExpectedType extends any>(ref: any): YourEventHandlerExpectedType;
declare function BetweenReactAndMs__onSubmit__type_hack<YourEventHandlerExpectedType extends any>(ref: any, event: TheEventParameterPassedToTheFunctionType<YourEventHandlerExpectedType>): FORM_SUBMIT_RETURN_TYPE;
type BetweenReactAndMs__onSubmit<YourEventHandlerExpectedType> = typeof BetweenReactAndMs__onSubmit__type_hack<YourEventHandlerExpectedType>;
type FORM_SUBMIT_RETURN_TYPE = ReturnType<Service.ServiceClient["submitHandler"]>;
export declare const Convenient: ICantBelieveItsNotButter;
export {};
