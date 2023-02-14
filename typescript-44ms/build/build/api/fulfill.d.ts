export type fulfill = Symbol & {};
export declare const fulfill: {
    name: <T extends unknown>(whatever: keyof T) => keyof T;
};
