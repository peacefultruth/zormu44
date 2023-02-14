import * as t44ms from "typescript-44ms";
import { FactoryStateIndexing } from "./factory-state-indexing";
import { IAmReact } from "./i-am-react";
import { SourceOfTruthEjectButton, SourceOfTruthExplorer, SourceOfTruthExplorerCartridgeBased, SourceOfTruthGracefulExit } from "./source-of-truth";
export interface FactorySourceOfTruth {
    (stateIndexingStack: ReturnType<FactoryStateIndexing>): {
        sourceOfTruth: SourceOfTruthExplorer;
        sourceOfTruthEjectButton: SourceOfTruthEjectButton;
        sourceOfTruthFromEjectedCartridge: SourceOfTruthExplorerCartridgeBased;
        sourceOfTruthOnCrushKillDestroy: SourceOfTruthGracefulExit;
        crushKillDestroy: (iAmReact: IAmReact, ref: t44ms.Api.ref) => void;
    };
}
