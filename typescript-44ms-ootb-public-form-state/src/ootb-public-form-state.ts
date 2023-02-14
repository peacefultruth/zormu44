import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbPublicFormState: Service.FactoryPublicFormState = () => {
  let publicFormState: Service.PublicForm | null = null;
  let publicFulfillment: Service.PublicForm | null = null;

  const siphonPublicFinal: ReturnType<Service.FactoryPublicFormState>["siphonPublicFinal"] =
    (virtualStack, value, name) => {
      if (!publicFormState) {
        publicFormState = {};
      }

      const literalCallstack = virtualStack
        .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
        .flat();

      let domNode = publicFormState;
      let parentDomNode: Service.PublicForm | null = null;
      let thisDomNodeKeyOnTheParentNode: string | null = null;
      const lastReferenceIndex = literalCallstack.length - 1;
      literalCallstack.forEach((ref, index) => {
        if (index === lastReferenceIndex) {
          if (name === Service.PublicFormStateStack_CrushKillDestroy) {
          } else if (name) {
            if (ref.length > 0) {
              if (!domNode[ref]) {
                domNode[ref] = {};
              }

              domNode[ref][name] = value;
            } else {
              if (parentDomNode) {
                parentDomNode[thisDomNodeKeyOnTheParentNode!][name] = value;
              } else {
                publicFormState![name] = value;
              }
            }
          } else {
            if (ref.length > 0) {
              if (typeof domNode[ref] === "object") {
                domNode[ref] = {
                  ...domNode[ref],
                  ...value,
                };
              } else {
                domNode[ref] = value;
              }
            } else {
              if (parentDomNode) {
                parentDomNode[thisDomNodeKeyOnTheParentNode!] = {
                  ...domNode,
                  ...value,
                };
              } else {
                publicFormState = { ...publicFormState, ...value };
              }
            }
          }
        } else {
          if (ref.length > 0) {
            const thisIsland_orParent = domNode[ref];
            if (!thisIsland_orParent) {
              const domNode_shouldExist: Service.PublicForm = {};
              domNode[ref] = domNode_shouldExist;
            }
          } else {
            if (parentDomNode) {
              parentDomNode[thisDomNodeKeyOnTheParentNode!] = {};
            }
          }
        }

        if (ref.length > 0) {
          parentDomNode = domNode;
          thisDomNodeKeyOnTheParentNode = ref;
          domNode = domNode[ref];
        } else {
          domNode = publicFormState!;
        }
      });

      if (!!name && value === Service.PublicFormStateStack_CrushKillDestroy) {
        if (parentDomNode) {
          delete parentDomNode[thisDomNodeKeyOnTheParentNode!][name];
        } else {
          publicFormState = null;
        }
      }
      if (name === Service.PublicFormStateStack_CrushKillDestroy) {
        if (parentDomNode) {
          delete parentDomNode[thisDomNodeKeyOnTheParentNode!];
        } else {
          publicFormState = null;
        }
      }
    };

  const siphonPublicFulfillmentFinal: ReturnType<Service.FactoryPublicFormState>["siphonPublicFulfillmentFinal"] =
    (virtualStack, value, name) => {
      if (!publicFulfillment) {
        publicFulfillment = {};
      }

      const literalCallstack = virtualStack
        .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
        .flat();

      let domNode = publicFulfillment;
      let parentDomNode: Service.PublicForm | null = null;
      let thisDomNodeKeyOnTheParentNode: string | null = null;
      const lastReferenceIndex = literalCallstack.length - 1;
      literalCallstack.forEach((ref, index) => {
        if (index === lastReferenceIndex) {
          if (name === Service.PublicFormStateStack_CrushKillDestroy) {
          } else if (name) {
            if (ref.length > 0) {
              if (!domNode[ref]) {
                domNode[ref] = {};
              }
              domNode[ref][name] = value;
            } else {
              if (parentDomNode) {
                parentDomNode[thisDomNodeKeyOnTheParentNode!][name] = value;
              } else {
                publicFormState![name] = value;
              }
            }
          } else {
            if (ref.length > 0) {
              if (typeof domNode[ref] === "object") {
                domNode[ref] = {
                  ...domNode[ref],
                  ...value,
                };
              } else {
                domNode[ref] = value;
              }
            } else {
              if (parentDomNode) {
                parentDomNode[thisDomNodeKeyOnTheParentNode!] = {
                  ...domNode,
                  ...value,
                };
              } else {
                publicFormState = { ...publicFormState, ...value };
              }
            }
          }
        } else {
          if (ref.length > 0) {
            const thisIsland_orParent = domNode[ref];
            if (!thisIsland_orParent) {
              const domNode_shouldExist: Service.PublicForm = {};
              domNode[ref] = domNode_shouldExist;
            }
          } else {
            if (parentDomNode) {
              parentDomNode[thisDomNodeKeyOnTheParentNode!] = {};
            }
          }
        }

        if (ref.length > 0) {
          parentDomNode = domNode;
          thisDomNodeKeyOnTheParentNode = ref;
          domNode = domNode[ref];
        } else {
          domNode = publicFulfillment!;
        }
      });

      if (!!name && value === Service.PublicFormStateStack_CrushKillDestroy) {
        if (parentDomNode) {
          delete parentDomNode[thisDomNodeKeyOnTheParentNode!][name];
        } else {
          publicFulfillment = null;
        }
      }
      if (name === Service.PublicFormStateStack_CrushKillDestroy) {
        if (parentDomNode) {
          delete parentDomNode[thisDomNodeKeyOnTheParentNode!];
        } else {
          publicFulfillment = null;
        }
      }
    };

  return {
    publicFormStateImmediate: () => publicFormState,
    siphonPublicFinal,
    siphonPublicFulfillmentFinal,
    publicFulfillmentImmediate: () => publicFulfillment,
  };
};
