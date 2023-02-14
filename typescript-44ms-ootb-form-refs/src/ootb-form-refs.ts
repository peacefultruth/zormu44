import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbFormRefs: Service.FactoryFormRefs = (publicFormStateStack) => {
  const { publicFormStateImmediate } = publicFormStateStack;

  const somethingYetToExist = Symbol.for("somethingYetToExist");
  const form_refs_pretend_object = {};
  const createProxy = <ProxyingType extends {}>(previousNameStack?: any) => {
    const nameStack = Array.isArray(previousNameStack)
      ? previousNameStack
      : previousNameStack
      ? [previousNameStack]
      : [];
    const form_refs_proxy = new Proxy<ProxyingType>(
      form_refs_pretend_object as unknown as ProxyingType,
      {
        get: (_target: any, name: any) => {
          if (name === t44ms.Api.RefSymbol) {
            return `${nameStack.join(".")}`;
          }
          if (name === "_refSymbol") {
            return t44ms.Api.RefSymbol;
          }
          if (name === somethingYetToExist) {
            return nameStack;
          }
          if (name === t44ms.Api.TypedRefSymbol) {
            const value: t44ms.Api.RefPrimitive = {
              [t44ms.Api.RefSymbol]: `${nameStack.join(".")}`,
              _refSymbol: t44ms.Api.RefSymbol,
            };
            return value;
          }
          if (name === t44ms.Api.TypedRefValueSymbol) {
            return somethingYetToExist;
          }
          if (name === "typedRef") {
            const refPrimitive: t44ms.Api.RefPrimitive = {
              [t44ms.Api.RefSymbol]: `${nameStack.join(".")}`,
              _refSymbol: t44ms.Api.RefSymbol,
            };
            const value: t44ms.Api.TypedRef<unknown> = {
              ...refPrimitive,
              [t44ms.Api.TypedRefSymbol]: refPrimitive,
              [t44ms.Api.TypedRefValueSymbol]: somethingYetToExist,
              _typedRefSymbol: t44ms.Api.TypedRefSymbol,
            };
            return value;
          }

          const myForm =
            publicFormStateImmediate() || ({} as Service.PublicForm);

          const thisFullName = [...nameStack, ...[name]];

          let value: any;
          thisFullName.forEach((name, index) => {
            value =
              value && value !== somethingYetToExist && name in value
                ? (value as any)[name]
                : index === 0
                ? name in myForm
                  ? (myForm as any)[name]
                  : somethingYetToExist
                : somethingYetToExist;
          });

          if (typeof value === "object" || value === somethingYetToExist) {
            return createProxy<ProxyingType>(thisFullName);
          } else {
            const value: t44ms.Api.RefPrimitive = {
              [t44ms.Api.RefSymbol]: `${thisFullName.join(".")}`,
              _refSymbol: t44ms.Api.RefSymbol,
            };
            return value;
          }
        },
      }
    ) as any;
    return form_refs_proxy as ProxyingType;
  };
  const formRefs = createProxy();

  const formRefsIsland = (ref: t44ms.Api.ref | undefined) => {
    const literalCallstack = [ref || formRefs]
      .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
      .flat();

    let island = formRefs;
    literalCallstack.forEach((name) => {
      if (name && name.length > 0) {
        island = (island as any | undefined)?.[name];
      }
    });

    return island;
  };

  return [formRefs, formRefsIsland];
};
