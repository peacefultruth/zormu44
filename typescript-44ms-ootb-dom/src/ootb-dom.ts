import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

const traverseFreshMost_giveMutatable = (
  virtualStack: t44ms.Api.ref[],
  virtualDom?: Service.VirtualDomNode
) => {
  const literalCallstack = virtualStack
    .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
    .flat();

  let traverse = virtualDom;
  literalCallstack.forEach((literalRef) => {
    if (literalRef.length > 0) {
      const next = traverse?.children[literalRef];
      traverse = next;
    }
  });

  return traverse;
};
const traverseMutatingFreshMost = (
  virtualStack: t44ms.Api.ref[],
  virtualDom: Service.VirtualDomNode
) => {
  const literalCallstack = virtualStack
    .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
    .flat();

  let virtualDomNode = virtualDom;
  literalCallstack.forEach((literalRef, index) => {
    const thisIsland_orParent = virtualDomNode.children[literalRef];
    if (!thisIsland_orParent) {
      const ref: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${literalCallstack
          .slice(0, index + 1)
          .join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      const virtualDomNode_shouldExist: Service.VirtualDomNode = {
        children: {},
        ref,
        lastExplicitChildren: null,
        latestExplicitChildren: null,
      };
      virtualDomNode.children[literalRef] = virtualDomNode_shouldExist;
    }
    virtualDomNode = virtualDomNode.children[literalRef];
  });

  return virtualDomNode;
};
const deleteNode = (ref: t44ms.Api.ref, virtualDom: Service.VirtualDomNode) => {
  const literalCallstack = [ref]
    .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
    .flat();

  let virtualDomNode = virtualDom;
  literalCallstack.forEach((literalRef, index) => {
    if (index === literalCallstack.length - 1) {
      delete virtualDomNode.children[literalRef];
    } else {
      virtualDomNode = virtualDomNode.children[literalRef];
    }
  });

  return virtualDomNode;
};
const extractFulfillment = (
  rendered?: Service.DomNode
): Service.VirtualDomNode["latestFulfillment"] => {
  let fulfillment: Service.VirtualDomNode["latestFulfillment"] = {};
  const children = !!rendered?.props?.children
    ? Array.isArray(rendered.props.children)
      ? rendered.props.children
      : [rendered.props.children]
    : [];
  children.forEach((child: JSX.Element) => {
    if (!child) {
      return;
    }

    if (child.type === "fulfill") {
      const thisFulfillment: Service.VirtualDomNode["latestFulfillment"] = {
        [child.props.name]: child.props.handler,
      };
      fulfillment = {
        ...fulfillment,
        ...thisFulfillment,
      };
    }
  });
  return fulfillment;
};

const extractGatewayNode = (
  expect: t44ms.Api.Expect,
  rendered?: Service.DomNode
): Service.GatewayNode => {
  type AnyEventHandlerKey_literally = `on${string}`;
  type Input = {
    name?: string;
  } & {
    [key: AnyEventHandlerKey_literally]: () => void;
  } & { onChange?: (newValue: any) => void };
  type Submit = { name?: string } & {
    onSubmit?: t44ms.Api.form["onSubmit"];
  };
  let inputs: Input[] = [];
  let submits: Submit[] = [];
  const children = !!rendered?.props?.children
    ? Array.isArray(rendered.props.children)
      ? rendered.props.children
      : [rendered.props.children]
    : [];
  [...[rendered], ...children].forEach((child: JSX.Element) => {
    if (!child) {
      return;
    }
    if (child.type === "form") {
      const thisSubmit: Submit = {
        name: child.props.name,
        onSubmit: child.props["React44ms_onSubmit"],
      };
      submits = [...submits, ...[thisSubmit]];
    }
    if (child.type === "input" && child.props["React44ms_onChange"]) {
      const thisInput: Input = {
        name: child.props.name,
        onChange: child.props["React44ms_onChange"],
      };
      Object.keys(child.props).forEach((key) => {
        if (
          key.startsWith("on") &&
          key.length > "on".length &&
          child.props[key] instanceof Function
        ) {
          thisInput[key as `on${string}`] = child.props[key];
        }
      });
      inputs = [...inputs, ...[thisInput]];
    }
    if (child.type === "output") {
    }
  });

  const findInputTargetedByEvent = (
    yieldablePort?: t44ms.Api.YieldablePortPrimitive | undefined
  ) => {
    let inputTarget;

    if (yieldablePort) {
      const explicitYieldablePortInput = inputs.find(
        (input) => input.name === yieldablePort[t44ms.Api.YieldablePortSymbol]
      );
      if (explicitYieldablePortInput) {
        inputTarget = explicitYieldablePortInput;
      }
    } else {
      const firstInputWithoutAName = inputs.find((input) => !input.name);
      if (firstInputWithoutAName) {
        inputTarget = firstInputWithoutAName;
      }

      const firstInput = inputs.length > 0 ? inputs[0] : undefined;
      if (!inputTarget && firstInput) {
        inputTarget = firstInput;
      }
    }

    return inputTarget;
  };
  const handleEvent = (yieldingRef: t44ms.Api.YieldingRef) => {
    const inputTarget = findInputTargetedByEvent(yieldingRef.yieldablePort);
    const thisHandlerName_explicit = t44ms.Api.anyYieldableHandlerToValue(
      yieldingRef.yieldableHandler
    );

    let thisHandlerName = thisHandlerName_explicit;
    const thisHasNoHandlerNameExplicitly =
      !thisHandlerName || thisHandlerName.length < 1;
    const thereIsValueBeingSent =
      yieldingRef.yieldedValue !== t44ms.Api.YieldedValueNotFoundSymbol;
    if (thisHasNoHandlerNameExplicitly && thereIsValueBeingSent) {
      thisHandlerName = "onChange";
    }

    if (thisHandlerName === "onChange") {
      const thisNodeEventHandler = inputTarget?.onChange;
      const inputOnChangeEventTarget: t44ms.Api.InputOnChangeEventTarget = {
        value: yieldingRef.yieldedValue,
      };
      const inputOnChangeEvent: t44ms.Api.InputOnChangeEvent = {
        target: inputOnChangeEventTarget,
      };
      thisNodeEventHandler?.(inputOnChangeEvent);
    } else {
      const thisNodeEventHandler =
        inputTarget?.[thisHandlerName as `on${string}`];
      thisNodeEventHandler?.();
    }
  };

  const findSubmitTargetedByEvent = (
    yieldablePort?: t44ms.Api.YieldablePortPrimitive | undefined
  ) => {
    let submitTargets: Submit[] = [];

    if (yieldablePort) {
      const explicitYieldablePortSubmit = submits.find(
        (input) => input.name === yieldablePort[t44ms.Api.YieldablePortSymbol]
      );
      if (explicitYieldablePortSubmit) {
        submitTargets = [...submitTargets, ...[explicitYieldablePortSubmit]];
      }
    } else {
      submitTargets = [...submits];
    }

    return submitTargets;
  };

  const handleSubmit = (
    yieldingRef: t44ms.Api.YieldingRef,
    handleException: (any_exception: unknown, submit_name?: string) => void
  ) => {
    const submitTargets = findSubmitTargetedByEvent(yieldingRef.yieldablePort);
    const submitEvent: t44ms.Api.FormOnSubmitEvent = {
      expect,
    };
    submitTargets.forEach((submitTarget) => {
      try {
        submitTarget.onSubmit?.(submitEvent);
      } catch (anyError) {
        handleException(anyError, submitTarget.name);
      }
    });
  };

  const domNode: Service.GatewayNode = {
    handleEvent,
    handleSubmit,
  };

  return domNode;
};

const extractExplicitChildren = (rendered: JSX.Element) => {
  let explicitChildren: NonNullable<
    Service.VirtualDomNode["latestExplicitChildren"]
  > = [];
  const children: JSX.Element[] = !!rendered?.props?.children
    ? Array.isArray(rendered.props.children)
      ? rendered.props.children
      : [rendered.props.children]
    : [];
  children.forEach((child) => {
    if (!!child && child.type instanceof Function) {
      const this_ref = (child as unknown as any).ref;
      explicitChildren = [...explicitChildren, ...[this_ref]];
    }
  });
  return explicitChildren;
};

const renderOnVirtualDom = (
  expect: t44ms.Api.Expect,
  rendered: JSX.Element,
  virtualStack: t44ms.Api.ref[],
  virtualDom: Service.VirtualDomNode
) => {
  const thisVirtualDomNode = traverseFreshMost_giveMutatable(
    virtualStack,
    virtualDom
  )!;
  thisVirtualDomNode.rendered = rendered;
  thisVirtualDomNode.gateway = extractGatewayNode(expect, rendered);

  if (thisVirtualDomNode.latestOutputs) {
    thisVirtualDomNode.lastOutputs = thisVirtualDomNode.latestOutputs;
    thisVirtualDomNode.latestOutputs = undefined;
  }

  if (thisVirtualDomNode.latestFulfillment) {
    thisVirtualDomNode.lastFulfillment = thisVirtualDomNode.latestFulfillment;
    thisVirtualDomNode.latestFulfillment = undefined;
  }

  if (thisVirtualDomNode.latestExplicitChildren) {
    thisVirtualDomNode.lastExplicitChildren =
      thisVirtualDomNode.latestExplicitChildren;
    thisVirtualDomNode.latestExplicitChildren = null;
  }

  const outputs: Service.Output[] = parseDomNode_forOutputs(rendered);
  thisVirtualDomNode.latestOutputs = outputs;

  thisVirtualDomNode.latestFulfillment = extractFulfillment(rendered);

  thisVirtualDomNode.latestExplicitChildren = extractExplicitChildren(rendered);

  return thisVirtualDomNode;
};

const parseDomNode_forOutputs = (domNode?: Service.DomNode | undefined) => {
  let outputs: Service.Output[] = [];
  const children = !!domNode?.props?.children
    ? Array.isArray(domNode.props.children)
      ? domNode.props.children
      : [domNode.props.children]
    : [];
  children.forEach((child: JSX.Element) => {
    if (!child) {
      return;
    }

    if (child.type === "output") {
      const thisOutput: Service.Output = {
        name: child.props.name,
        value: child.props["React44ms_value"],
      };
      outputs = [...outputs, ...[thisOutput]];
    }
  });
  return outputs;
};
const renderOnPublicDom = (
  _serviceController: Service.ServiceController,
  siphonPublicFinal: ReturnType<Service.FactoryPublicFormState>["siphonPublicFinal"],
  siphonPublicFulfillmentFinal: ReturnType<Service.FactoryPublicFormState>["siphonPublicFulfillmentFinal"],
  virtualStack: t44ms.Api.ref[],
  virtualDomNode:
    | Service.VirtualDomNode
    | typeof Service.PublicFormStateStack_CrushKillDestroy
) => {
  if (virtualDomNode === Service.PublicFormStateStack_CrushKillDestroy) {
    siphonPublicFinal(
      virtualStack,
      undefined,
      Service.PublicFormStateStack_CrushKillDestroy
    );
    siphonPublicFulfillmentFinal(
      virtualStack,
      undefined,
      Service.PublicFormStateStack_CrushKillDestroy
    );
    return;
  }

  (virtualDomNode.lastOutputs || []).forEach((oldOutput) => {
    const equivalentOutput = (virtualDomNode.latestOutputs || []).find(
      (output) => output.name === oldOutput.name
    );
    if (!equivalentOutput) {
      siphonPublicFinal(
        virtualStack,
        Service.PublicFormStateStack_CrushKillDestroy,
        oldOutput.name
      );
    }
  });
  (virtualDomNode.latestOutputs || []).forEach((output) => {
    const equivalentOutput = (virtualDomNode.lastOutputs || []).find(
      (lastOutput) => lastOutput.name === output.name
    );
    if (!equivalentOutput || equivalentOutput?.value !== output.value) {
      siphonPublicFinal(virtualStack, output.value, output.name);
    }
  });

  Object.entries(virtualDomNode.lastFulfillment || {}).forEach(
    (oldFulfillment) => {
      const [oldName] = oldFulfillment;
      const equivalentOutput = Object.entries(
        virtualDomNode.latestFulfillment || {}
      ).find(([newName]) => newName === oldName);
      if (!equivalentOutput) {
        siphonPublicFulfillmentFinal(
          virtualStack,
          Service.PublicFormStateStack_CrushKillDestroy,
          oldName
        );
      }
    }
  );
  Object.entries(virtualDomNode.latestFulfillment || {}).forEach(
    (fulfillment) => {
      const [name, value] = fulfillment;
      const equivalentFulfillment = (virtualDomNode.lastFulfillment || {})[
        name
      ];
      if (!equivalentFulfillment || equivalentFulfillment !== value) {
        siphonPublicFulfillmentFinal(virtualStack, value, name);
      }
    }
  );
};

export const ootbDom: Service.FactoryDom = (
  serviceController,
  publicFormStateStack,
  serviceViewModel
) => {
  const {
    publicFormStateImmediate,
    siphonPublicFinal,
    siphonPublicFulfillmentFinal,
  } = publicFormStateStack;

  const expect: t44ms.Api.Expect = <
    YourExpectedFormDataFromThatLocationRef extends any
  >(
    ref: t44ms.Api.ref,
    defaultValue: YourExpectedFormDataFromThatLocationRef
  ): YourExpectedFormDataFromThatLocationRef => {
    const current_literal_value =
      Service.publicFormAccess<YourExpectedFormDataFromThatLocationRef>(
        publicFormStateImmediate(),
        ref
      );

    const guaranteedValue = current_literal_value || defaultValue;

    return guaranteedValue;
  };

  let virtualDom: Service.VirtualDomNode | null = null;
  let living_effects: Service.Work[] = [];

  let virtualStack: t44ms.Api.ref[] = [];
  const begin_context = (ref?: t44ms.Api.ref) => {
    virtualStack = [...(ref ? [ref] : []), ...virtualStack];
    serviceViewModel.work_reconcile_state();
  };
  const createElement: Service.VirtualDomController["createElement"] = <
    YourPropsType extends any
  >(
    element_type: t44ms.Api.FunctionComponent<YourPropsType>,
    props: YourPropsType
  ) => {
    if (!virtualDom) {
      const ref: t44ms.Api.RefPrimitive = {
        [t44ms.Api.RefSymbol]: `${[].join(".")}`,
        _refSymbol: t44ms.Api.RefSymbol,
      };
      virtualDom = {
        children: {},
        ref,
        latestExplicitChildren: null,
        lastExplicitChildren: null,
      };
    }

    const thisVirtualDomNode: Service.VirtualDomNode =
      traverseMutatingFreshMost(virtualStack, virtualDom);
    thisVirtualDomNode.type =
      element_type as unknown as t44ms.Api.FunctionComponent;
    thisVirtualDomNode.props = props;
  };
  const end_context = (rendered: JSX.Element) => {
    const thisVirtualDomNode_fullyFormed: Service.VirtualDomNode =
      renderOnVirtualDom(expect, rendered, virtualStack, virtualDom!)!;

    let public_form_state_transitions: Service.Work[] = [];
    const proxy_siphonPublicFinal: Service.PublicFormStateStack["siphonPublicFinal"] =
      (virtualStack, value, name) => {
        const virtualStackCopy = [...virtualStack];
        const this_state_transition = () => {
          siphonPublicFinal(virtualStackCopy, value, name);
        };
        public_form_state_transitions = [
          ...public_form_state_transitions,
          ...[this_state_transition],
        ];
      };

    let public_form_fulfillment_transitions: Service.Work[] = [];
    const proxy_siphonPublicFulfillmentFinal: Service.PublicFormStateStack["siphonPublicFulfillmentFinal"] =
      (virtualStack, value, name) => {
        const virtualStackCopy = [...virtualStack];
        const this_fulfillment_transition = () => {
          siphonPublicFulfillmentFinal(virtualStackCopy, value, name);
        };
        public_form_fulfillment_transitions = [
          ...public_form_fulfillment_transitions,
          ...[this_fulfillment_transition],
        ];
      };

    renderOnPublicDom(
      serviceController,
      proxy_siphonPublicFinal,
      proxy_siphonPublicFulfillmentFinal,
      virtualStack,
      thisVirtualDomNode_fullyFormed
    );

    const virtualStackCopy = [...virtualStack];
    const effect_state_transitions__includes_yields: Service.Work = () => {
      serviceViewModel.work_reconcile_state();
    };
    const effect_component_effects: Service.Work = () => {
      serviceViewModel.work_after_rendering();
    };
    const effect_renders_on_the_public_dom: Service.Work = () => {
      public_form_state_transitions.forEach(
        (this_public_form_state_transition) => {
          this_public_form_state_transition();
        }
      );
      if (public_form_state_transitions.length > 0) {
        const literalCallstack = virtualStackCopy
          .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
          .flat();
        const whereAmI: t44ms.Api.RefPrimitive = {
          [t44ms.Api.RefSymbol]: `${literalCallstack.join(".")}`,
          _refSymbol: t44ms.Api.RefSymbol,
        };
        serviceController.public_form_state_ready(whereAmI);
      }

      public_form_fulfillment_transitions.forEach(
        (this_public_form_fulfillment_transition) => {
          this_public_form_fulfillment_transition();
        }
      );
      if (public_form_fulfillment_transitions.length > 0) {
        const literalCallstack = virtualStackCopy
          .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
          .flat();
        const whereAmI: t44ms.Api.RefPrimitive = {
          [t44ms.Api.RefSymbol]: `${literalCallstack.join(".")}`,
          _refSymbol: t44ms.Api.RefSymbol,
        };
        serviceController.public_form_fulfillment_ready(whereAmI);
      }
    };
    living_effects = [
      ...living_effects,
      ...[
        effect_component_effects,
        effect_state_transitions__includes_yields,
        effect_renders_on_the_public_dom,
      ],
    ];

    virtualStack = virtualStack.slice(1);

    return thisVirtualDomNode_fullyFormed;
  };
  const effects = () => {
    const effects = living_effects;
    living_effects = [];
    effects.forEach((this_effect) => {
      this_effect();
    });
  };

  const crush_kill_destroy: Service.VirtualDomController["crush_kill_destroy"] =
    (ref) => {
      if (!virtualDom) {
        return;
      }

      deleteNode(ref, virtualDom);

      let public_form_state_transitions: Service.Work[] = [];
      const proxy_siphonPublicFinal: Service.PublicFormStateStack["siphonPublicFinal"] =
        (virtualStack, value, name) => {
          const virtualStackCopy = [...virtualStack];
          const this_state_transition = () => {
            siphonPublicFinal(virtualStackCopy, value, name);
          };
          public_form_state_transitions = [
            ...public_form_state_transitions,
            ...[this_state_transition],
          ];
        };

      let public_form_fulfillment_transitions: Service.Work[] = [];
      const proxy_siphonPublicFulfillmentFinal: Service.PublicFormStateStack["siphonPublicFulfillmentFinal"] =
        (virtualStack, value, name) => {
          const virtualStackCopy = [...virtualStack];
          const this_fulfillment_transition = () => {
            siphonPublicFulfillmentFinal(virtualStackCopy, value, name);
          };
          public_form_fulfillment_transitions = [
            ...public_form_fulfillment_transitions,
            ...[this_fulfillment_transition],
          ];
        };

      renderOnPublicDom(
        serviceController,
        proxy_siphonPublicFinal,
        proxy_siphonPublicFulfillmentFinal,
        [ref],
        Service.PublicFormStateStack_CrushKillDestroy
      );
      const effect_renders_on_the_public_dom: Service.Work = () => {
        public_form_state_transitions.forEach(
          (this_public_form_state_transition) => {
            this_public_form_state_transition();
          }
        );
        if (public_form_state_transitions.length > 0) {
          serviceController.public_form_state_ready(ref);
        }

        public_form_fulfillment_transitions.forEach(
          (this_public_form_fulfillment_transition) => {
            this_public_form_fulfillment_transition();
          }
        );
        if (public_form_fulfillment_transitions.length > 0) {
          serviceController.public_form_fulfillment_ready(ref);
        }
      };
      living_effects = [
        ...living_effects,
        ...[effect_renders_on_the_public_dom],
      ];
    };

  const explorer: Service.DOMExplorer = (
    _iAmReact: Service.IAmReact,
    callstackAdditions?: any[]
  ): Service.GatewayNode | null => {
    if (!virtualDom) {
      return null;
    }

    const callstack = [...(callstackAdditions ? callstackAdditions : [])];

    const thisVirtualDomNode = traverseFreshMost_giveMutatable(
      callstack,
      virtualDom
    );

    const thisGatewayNode: Service.GatewayNode | undefined =
      thisVirtualDomNode?.gateway;

    return thisGatewayNode || null;
  };
  const exploreRefs = (whereAmILiterally: t44ms.Api.ref) => {
    if (!virtualDom) {
      return null;
    }

    const thisVirtualDomNode: Service.VirtualDomNode | undefined =
      traverseFreshMost_giveMutatable([whereAmILiterally], virtualDom);

    return thisVirtualDomNode ? thisVirtualDomNode : null;
  };
  const giveCurrentRefStack = () => {
    return virtualStack;
  };

  const virtualDomController: Service.VirtualDomController = {
    begin_context,
    createElement,
    end_context,
    effects,
    crush_kill_destroy,
  };
  return { explorer, exploreRefs, virtualDomController, giveCurrentRefStack };
};
