import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbCreateElement: Service.FactoryCreateElement = (
  stateIndexingStack,
  virtualDomController,
  logicalContextController,
  reactingPower,
  sourceOfTruth,
  iAmReact
) => {
  const { beginStateIndexesContext, endStateIndexesContext } =
    stateIndexingStack;

  const begin_context = (ref?: t44ms.Api.ref) => {
    logicalContextController.begin_context(reactingPower.logicalContext, ref);

    beginStateIndexesContext();

    (window as any)[Service.React44msReactingPowerSymbol] = reactingPower;

    virtualDomController.begin_context(ref);
  };
  const createElement: Service.ServiceClient["createElement"] = <
    YourPropsType extends any
  >(
    type: t44ms.Api.FunctionComponent<YourPropsType>,
    props: YourPropsType,
    ref?: Symbol
  ) => {
    begin_context(ref as unknown as t44ms.Api.ref);
    virtualDomController.createElement<YourPropsType>(type, props);
    const rendered = type({
      ...(props as unknown as any),
      ...{
        ref: (ref as unknown as t44ms.Api.ref)[t44ms.Api.RefSymbol],
      },
    });
    end_context(rendered);

    const children: JSX.Element[] = !!rendered?.props?.children
      ? Array.isArray(rendered.props.children)
        ? rendered.props.children
        : [rendered.props.children]
      : [];

    children.forEach((child: JSX.Element) => {
      if (!child) {
        return;
      }
      if (child.type instanceof Function) {
        const childProps = child.props;
        const childRef: string = (child as unknown as any).ref;
        const childType = child.type;

        const fullyQualifiedRef: t44ms.Api.RefPrimitive = {
          [t44ms.Api.RefSymbol]: `${
            (ref as unknown as t44ms.Api.ref)[t44ms.Api.RefSymbol]
          }.${childRef}`,
          _refSymbol: t44ms.Api.RefSymbol,
        };

        createElement(
          childType,
          childProps,
          fullyQualifiedRef as unknown as Symbol
        );
      }
    });

    return rendered;
  };
  const end_context = (rendered: JSX.Element) => {
    const virtualDomNode_fullyFormed =
      virtualDomController.end_context(rendered);
      
    virtualDomNode_fullyFormed.lastExplicitChildren?.forEach(
      (aPreviousExplicitChild) => {
        const thisChildDoesntExistAnymore =
          !virtualDomNode_fullyFormed.latestExplicitChildren?.includes(
            aPreviousExplicitChild
          );
        if (thisChildDoesntExistAnymore) {
          const childRef: t44ms.Api.RefPrimitive = {
            [t44ms.Api.RefSymbol]: `${
              virtualDomNode_fullyFormed.ref[t44ms.Api.RefSymbol]
            }.${aPreviousExplicitChild}`,
            _refSymbol: t44ms.Api.RefSymbol,
          };
          destroyElement(childRef as unknown as symbol);
        }
      }
    );

    logicalContextController.end_context(reactingPower.logicalContext);

    endStateIndexesContext();

    (window as any)[Service.React44msReactingPowerSymbol] = undefined;
  };

  const runElementEffects: Service.ServiceClient["runElementEffects"] = (
    _ref
  ) => {
    (window as any)[Service.React44msReactingPowerSymbol] = reactingPower;

    virtualDomController.effects();

    (window as any)[Service.React44msReactingPowerSymbol] = undefined;
  };

  const destroyElement: Service.ServiceClient["destroyElement"] = (ref) => {
    virtualDomController.crush_kill_destroy(ref as unknown as t44ms.Api.ref);
    sourceOfTruth.crushKillDestroy(iAmReact, ref as unknown as t44ms.Api.ref);
  };

  return [createElement, runElementEffects, destroyElement];
};
