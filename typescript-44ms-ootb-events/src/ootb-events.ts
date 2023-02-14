import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

export const ootbEvents: Service.FactoryEvents = (dom, reactingPower) => {
  const eventHandler: Service.ServiceClient["eventHandler"] = (ref) => {
    const yieldingRef = t44ms.Api.extractYieldingRef(ref);
    const referencedNode = reactingPower.dom(
      null as unknown as Service.IAmReact,
      yieldingRef.yieldingCallstackAdditions
    );
    referencedNode?.handleEvent(yieldingRef);
  };
  const submitHandler: Service.ServiceClient["submitHandler"] = (ref) => {
    const yieldingRef = t44ms.Api.extractYieldingRef(ref);
    const { reasons_this_form_is_invalid } = handleSubmit(dom, yieldingRef);
    return { reasons_this_form_is_invalid };
  };

  return [eventHandler, submitHandler];
};

type Submissions = { [key: string]: true };
const handleSubmit = (
  dom: ReturnType<Service.FactoryDom>,
  starting_from_here: t44ms.Api.YieldingRef,
  howDeep: number = 0
): ReturnType<Service.ServiceClient["submitHandler"]> & {
  submissions: Submissions;
} => {
  if (!starting_from_here) {
    const reasons_this_form_is_invalid = {
      [t44ms.Api.submit
        .NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY]: `Cannot handle submit without a starting point. Please provide a ref.`,
    };
    return { reasons_this_form_is_invalid, submissions: {} };
  }

  const ref: t44ms.Api.RefPrimitive = {
    [t44ms.Api.RefSymbol]: starting_from_here.yieldingCallstackAdditions
      .map((ref) => t44ms.Api.anyRefishToStringValue(ref).split("."))
      .flat()
      .join("."),
    _refSymbol: t44ms.Api.RefSymbol,
  };

  const here = dom.exploreRefs(ref);
  if (!here) {
    const reasons_this_form_is_invalid = {
      [t44ms.Api.submit
        .NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY]: `Cannot handle submit without a starting point. Please provide a ref to something valid.`,
    };
    return { reasons_this_form_is_invalid, submissions: {} };
  }

  let submissions: Submissions = {};
  const submit: t44ms.Api.Submitter["submit"] = (submission) => {
    if (!submission) {
      throw new Error(`Cannot submit an invalid submission!`);
    }
    submissions = {
      ...submissions,
      ...{
        [`${ref[t44ms.Api.RefSymbol]}`]: !!submission,
      },
    };
  };
  const submitter: t44ms.Api.Submitter = {
    submit,
  };
  (window as any)[Service.React44msUseSubmitSymbol] = submitter;
  let reasons_this_form_is_invalid__local: NonNullable<
    ReturnType<
      Service.ServiceClient["submitHandler"]
    >["reasons_this_form_is_invalid"]
  > = {};
  here.gateway?.handleSubmit(
    starting_from_here,
    (any_exception, submit_named) => {
      const this_key = `${ref[t44ms.Api.RefSymbol]}${
        submit_named ? `.${submit_named}` : ""
      }`;
      if (any_exception) {
        reasons_this_form_is_invalid__local[this_key] = `${any_exception}`;
      } else {
        reasons_this_form_is_invalid__local[this_key] = `${new Error(
          "Unknown error."
        )}`;
      }
    }
  );
  (window as any)[Service.React44msUseSubmitSymbol] = null;

  Object.entries(here.children).forEach(([refPortion]) => {
    if (!refPortion || refPortion.trim().length < 1) {
      return;
    }
    const next_position: t44ms.Api.RefPrimitive = {
      [t44ms.Api.RefSymbol]: `${ref[t44ms.Api.RefSymbol]}.${refPortion}`,
      _refSymbol: t44ms.Api.RefSymbol,
    };
    const next_yielding_ref: t44ms.Api.YieldingRef = {
      ...starting_from_here,
      yieldingCallstackAdditions: [...[next_position]],
    };
    const {
      reasons_this_form_is_invalid: rhs__reasons_this_form_is_invalid,
      submissions: rhs__submissions,
    } = handleSubmit(dom, next_yielding_ref, howDeep + 1);
    reasons_this_form_is_invalid__local = {
      ...reasons_this_form_is_invalid__local,
      ...rhs__reasons_this_form_is_invalid,
    };
    submissions = {
      ...submissions,
      ...rhs__submissions,
    };
  });

  if (howDeep === 0 && Object.keys(submissions).length < 1) {
    reasons_this_form_is_invalid__local = {
      ...reasons_this_form_is_invalid__local,
      [t44ms.Api.submit
        .NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY]: `Nothing submitted yet.`,
    };
  }

  let reasons_this_form_is_invalid = null;
  if (
    Object.keys(reasons_this_form_is_invalid__local).length > 0 ||
    !!reasons_this_form_is_invalid__local[
      t44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY
    ]
  ) {
    reasons_this_form_is_invalid = reasons_this_form_is_invalid__local;
  }

  return { reasons_this_form_is_invalid, submissions };
};
