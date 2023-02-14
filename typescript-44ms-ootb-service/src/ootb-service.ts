import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

import * as OOTBREACTIONARY from "typescript-44ms-ootb-reactionary";

export const ootbService: Service.FactoryService = (
  formRefStack,
  sourceOfTruthStack,
  { work_required_here }
) => {
  const [formRefs, formRefsIsland] = formRefStack;

  let state = {};
  let isAnythingAnyDifferent = false;
  const sourceOfTruthPrimitiveExplorer: Service.SourceOfTruthPrimitiveExplorer =
    () => {
      return state;
    };
  const heyListen = () => {
    isAnythingAnyDifferent = true;
  };

  let work_for_state: Service.Work[] = [];
  let work_for_after_rendering: Service.Work[] = [];
  const add_work: Service.IAmReact["add_work"] = (
    ref: t44ms.Api.ref,
    my_buffered_callback: Service.Work,
    work_description: Service.WorkDescription = Service.WorkDescription.state
  ) => {
    switch (work_description) {
      case Service.WorkDescription.state:
        work_for_state = [...work_for_state, ...[my_buffered_callback]];
        work_required_here(ref);
        break;
      case Service.WorkDescription.after_rendering:
        work_for_after_rendering = [
          ...work_for_after_rendering,

          ...[my_buffered_callback],
        ];
        break;
      default:
        break;
    }
  };

  const iAmReact: Service.IAmReact = {
    add_work,
    ["what!?"]: sourceOfTruthPrimitiveExplorer,
    ["HEY!LİSTEN!"]: heyListen,

    formRefs,
    formRefsIsland,

    sourceOfTruthOnCrushKillDestroy:
      sourceOfTruthStack.sourceOfTruthOnCrushKillDestroy,
  };

  const useFormRefs: t44ms.Api.Reactionary["useFormRefs"] =
    OOTBREACTIONARY.useFormRefs(iAmReact);
  const useState: t44ms.Api.Reactionary["useState"] =
    OOTBREACTIONARY.useState(iAmReact);
  const useRef: t44ms.Api.Reactionary["useRef"] =
    OOTBREACTIONARY.useRef(iAmReact);
  const useMemo: t44ms.Api.Reactionary["useMemo"] =
    OOTBREACTIONARY.useMemo(iAmReact);
  const useCallback: t44ms.Api.Reactionary["useCallback"] =
    OOTBREACTIONARY.useCallback(iAmReact);
  const useEffect: t44ms.Api.Reactionary["useEffect"] =
    OOTBREACTIONARY.useEffect(iAmReact);
  const Yield: t44ms.Api.Reactionary["Yield"] = OOTBREACTIONARY.Yield(iAmReact);

  const Reactionary: t44ms.Api.Reactionary = {
    useFormRefs,
    useState,
    useRef,
    useMemo,
    useCallback,
    useEffect,
    Yield,
  };

  const work_reconcile_state: Service.Service["ViewModel"]["work_reconcile_state"] =
    () => {
      const this_work = work_for_state;
      work_for_state = [];
      this_work.forEach((buffered_callback) => {
        buffered_callback();
      });
    };
  const work_after_rendering: Service.Service["ViewModel"]["work_after_rendering"] =
    () => {
      const this_work = work_for_after_rendering;
      work_for_after_rendering = [];
      this_work.forEach((effect) => {
        effect();
      });
    };

  const top_level_state_is_A_special_memoish_callback_ = () => {
    if (isAnythingAnyDifferent) {
      // TECHNICALLY A DIFFERENT FORM NOW AS FAR AS ANY MEMOISH ARE CONCERNED
      state = {
        ...state,
      };
    }
    return state;
  };
  const view_model: Service.Service["ViewModel"] = {
    work_reconcile_state,
    work_after_rendering,
    nowish: top_level_state_is_A_special_memoish_callback_,
    ["NEVEERRRRRRRRRRRRRRR!"]: state,
    iAmReact,
  };
  const ootbService: Service.Service = {
    Reactionary: Reactionary,
    ViewModel: view_model,
  };
  return ootbService;
};
