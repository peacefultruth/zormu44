import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbSourceOfTruthStack: Service.FactorySourceOfTruth = (
  stateIndexingStack
) => {
  interface AnySourceOfTruthIsland_PerReactionaryState {
    fifo_state_stack?: any[];
  }
  interface AnySourceOfTruthIsland {
    [key: symbol]: AnySourceOfTruthIsland_PerReactionaryState;
  }
  const island = (
    iAmReact: Service.IAmReact,
    sourceOfTruthEjectedCartridge: Omit<
      Service.SourceOfTruthEjectedCartridge,
      "stateIndex"
    >
  ) => {
    const { callstack: literalCallstack } = sourceOfTruthEjectedCartridge;

    let sourceOfTruthPrimitive = iAmReact["what!?"]<AnySourceOfTruthIsland>();

    let traverse_mutating: Service.SourceOfTruthPrimitive<AnySourceOfTruthIsland> =
      sourceOfTruthPrimitive;
    literalCallstack.forEach((literalRef, index) => {
      const thisIsland_orParent = traverse_mutating[literalRef];
      if (!thisIsland_orParent) {
        const island: AnySourceOfTruthIsland = {};
        traverse_mutating[literalRef] = island;

        const referenceToHere: t44ms.Api.RefPrimitive = {
          [t44ms.Api.RefSymbol]: `${literalCallstack
            .slice(0, index + 1)
            .join(".")}`,
          _refSymbol: t44ms.Api.RefSymbol,
        };
        iAmReact["HEY!LİSTEN!"](referenceToHere);
      }
      traverse_mutating = traverse_mutating[
        literalRef
      ] as unknown as Service.SourceOfTruthPrimitive<AnySourceOfTruthIsland>;
    });

    const thisSourceOfTruthIsland: AnySourceOfTruthIsland =
      traverse_mutating as unknown as AnySourceOfTruthIsland;

    return thisSourceOfTruthIsland;
  };

  let crushKillDestroyGracefulExits: [symbol, (sourceOfTruth: any) => void][] =
    [];
  const sourceOfTruthOnCrushKillDestroy: ReturnType<Service.FactorySourceOfTruth>["sourceOfTruthOnCrushKillDestroy"] =
    <YourSourceOfTruthType>(
      sourceOfTruthId: Symbol,
      consumer: (
        sourceOfTruthRawCollection: Service.SourceOfTruthRawCollection<YourSourceOfTruthType>
      ) => void
    ) => {
      const this_graceful_exit: [symbol, (sourceOfTruth: any) => void] = [
        sourceOfTruthId.valueOf(),
        consumer as (sourceOfTruth: any) => void,
      ];
      crushKillDestroyGracefulExits = [
        ...crushKillDestroyGracefulExits,
        ...[this_graceful_exit],
      ];
    };
  const pushDestroy = (thisSourceOfTruthIsland: any) => {
    crushKillDestroyGracefulExits.forEach((gracefulExit) => {
      const [symbolValueOf, consumer] = gracefulExit;
      consumer(thisSourceOfTruthIsland[symbolValueOf]?.fifo_state_stack || []);
    });
  };

  const crushKillDestroy: ReturnType<Service.FactorySourceOfTruth>["crushKillDestroy"] =
    (iAmReact, ref) => {
      let sourceOfTruthPrimitive = iAmReact["what!?"]<AnySourceOfTruthIsland>();

      let traverse_mutating: Service.SourceOfTruthPrimitive<AnySourceOfTruthIsland> =
        sourceOfTruthPrimitive;
      const literalCallstack = t44ms.Api.anyRefishToStringValue(ref).split(".");
      literalCallstack.forEach((literalRef, index) => {
        if (!traverse_mutating) {
          return;
        }
        if (index === literalCallstack.length - 1) {
          if ((traverse_mutating as unknown as {}).hasOwnProperty(literalRef)) {
            const thisNode = traverse_mutating[literalRef];
            Object.keys(thisNode).forEach((key) => {
              const nestedElementRef: t44ms.Api.RefPrimitive = {
                [t44ms.Api.RefSymbol]: `${[...literalCallstack, ...[key]].join(
                  "."
                )}`,
                _refSymbol: t44ms.Api.RefSymbol,
              };
              crushKillDestroy(iAmReact, nestedElementRef);
            });
            pushDestroy(traverse_mutating[literalRef]);
            delete traverse_mutating[literalRef];
          }
        }
        traverse_mutating = traverse_mutating[
          literalRef
        ] as unknown as Service.SourceOfTruthPrimitive<AnySourceOfTruthIsland>;
      });
    };

  const sourceOfTruthFromEjectedCartridge: Service.ReactingPower["sourceOfTruthFromEjectedCartridge"] =
    <YourSourceOfTruthType>(
      iAmReact: Service.IAmReact,
      sourceOfTruthEjectedCartridge: Service.SourceOfTruthEjectedCartridge
    ) => {
      const { thisStateIndex, thisStateSymbol } = sourceOfTruthEjectedCartridge;
      const sourceOfTruthProxy = new Proxy<
        Service.SourceOfTruth<YourSourceOfTruthType>
      >({} as unknown as any, {
        get: (_target: any, name: any) => {
          const thisSourceOfTruthIsland = island(
            iAmReact,
            sourceOfTruthEjectedCartridge
          );
          if (name === "value") {
            return thisSourceOfTruthIsland[thisStateSymbol.valueOf()]
              ?.fifo_state_stack?.[thisStateIndex];
          }
          if (name === "fresh") {
            return (
              (thisSourceOfTruthIsland[thisStateSymbol.valueOf()]
                ?.fifo_state_stack?.length || 0) === thisStateIndex
            );
          }
        },
        set: (_target: any, property: string | symbol, newValue: any) => {
          const thisSourceOfTruthIsland = island(
            iAmReact,
            sourceOfTruthEjectedCartridge
          );

          if (property === "value") {
            if (!thisSourceOfTruthIsland[thisStateSymbol.valueOf()]) {
              const reactionaryState: AnySourceOfTruthIsland_PerReactionaryState =
                {
                  fifo_state_stack: [],
                };
              thisSourceOfTruthIsland[thisStateSymbol.valueOf()] =
                reactionaryState;
            }
            thisSourceOfTruthIsland[
              thisStateSymbol.valueOf()
            ].fifo_state_stack![thisStateIndex] = newValue;
          }

          return true;
        },
      });
      return sourceOfTruthProxy;
    };

  const sourceOfTruthEjectButton: Service.ReactingPower["sourceOfTruthEjectButton"] =
    (
      _iAmReact: Service.IAmReact,
      sourceOfTruthId: Symbol,
      callstackAdditions?: any[]
    ) => {
      const reactingPower = Service.useReactingPower();

      const virtualStack = [
        ...(callstackAdditions ? callstackAdditions : []),
        ...reactingPower.logicalContext.elementStack,
      ];

      const literalCallstack = virtualStack
        .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
        .flat();

      const thisStateIndex = stateIndexingStack.stateCounter(
        sourceOfTruthId.valueOf()
      );
      const cartridge: Service.SourceOfTruthEjectedCartridge = {
        callstack: literalCallstack,
        thisStateIndex,
        thisStateSymbol: sourceOfTruthId,
      };

      return cartridge;
    };

  const sourceOfTruth: Service.ReactingPower["sourceOfTruth"] = <
    YourSourceOfTruthType
  >(
    iAmReact: Service.IAmReact,
    sourceOfTruthId: Symbol,
    callstackAdditions?: any[]
  ) => {
    const cartridge = sourceOfTruthEjectButton(
      iAmReact,
      sourceOfTruthId,
      callstackAdditions
    );
    return sourceOfTruthFromEjectedCartridge<YourSourceOfTruthType>(
      iAmReact,
      cartridge
    );
  };

  return {
    sourceOfTruth,
    sourceOfTruthEjectButton,
    sourceOfTruthFromEjectedCartridge,
    crushKillDestroy,
    sourceOfTruthOnCrushKillDestroy,
  };
};
