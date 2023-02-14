import { IAmReact } from "./i-am-react";
export interface SourceOfTruth<YourSourceOfTruthType> {
    value?: YourSourceOfTruthType;
    fresh: boolean;
}
export interface SourceOfTruthEjectedCartridge {
    callstack: any[];
    thisStateIndex: number;
    thisStateSymbol: Symbol;
}
export type SourceOfTruthRawCollection<YourSourceOfTruthType> = YourSourceOfTruthType[];
export type SourceOfTruthExplorer = <YourSourceOfTruthType>(iAmReact: IAmReact, sourceOfTruthId: Symbol, callstackAdditions?: any[]) => SourceOfTruth<YourSourceOfTruthType>;
export type SourceOfTruthExplorerCartridgeBased = <YourSourceOfTruthType>(iAmReact: IAmReact, sourceOfTruthEjectedCartridge: SourceOfTruthEjectedCartridge) => SourceOfTruth<YourSourceOfTruthType>;
export type SourceOfTruthEjectButton = (iAmReact: IAmReact, sourceOfTruthId: Symbol, callstackAdditions?: any[]) => SourceOfTruthEjectedCartridge;
export type SourceOfTruthPrimitive<YourSourceOfTruthIslandType> = {
    [key: string]: YourSourceOfTruthIslandType & SourceOfTruthPrimitive<YourSourceOfTruthIslandType>;
};
export type SourceOfTruthPrimitiveExplorer = <YourSourceOfTruthIslandType>() => SourceOfTruthPrimitive<YourSourceOfTruthIslandType>;
export type SourceOfTruthGracefulExit = <YourSourceOfTruthType>(sourceOfTruthId: Symbol, callback: (sourceOfTruthRawCollection: SourceOfTruthRawCollection<YourSourceOfTruthType>) => void) => void;
