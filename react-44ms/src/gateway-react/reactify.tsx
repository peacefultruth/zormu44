import * as React from "react";

import { Api } from "typescript-44ms";

import { LooksLikeAReactRefToReact } from "./convenient-internals";
import { useProvider } from "./use-provider";

type PretendYouOnlyCareAboutReactRefs<YourPropsTypeWhichDoesntCareAboutReact> =
  YourPropsTypeWhichDoesntCareAboutReact extends Api.ref
    ? ExtractRefTypeGround<YourPropsTypeWhichDoesntCareAboutReact> extends never
      ? LooksLikeAReactRefToReact<any> | null
      : Partial<React.Ref<Symbol>> & YourPropsTypeWhichDoesntCareAboutReact
    : YourPropsTypeWhichDoesntCareAboutReact extends {
        [key: string | symbol | number]: any;
      }
    ? {
        [K in keyof YourPropsTypeWhichDoesntCareAboutReact]: PretendYouOnlyCareAboutReactRefs<
          YourPropsTypeWhichDoesntCareAboutReact[K]
        >;
      }
    : YourPropsTypeWhichDoesntCareAboutReact;

export interface ReactifiedComponentHasAdditionalProps {}
export const Reactify = <YourPropsType extends any = {}>(
  form_logic_component: Api.FunctionComponent<YourPropsType>
) => {
  type ReactifiedComponentProps =
    PretendYouOnlyCareAboutReactRefs<YourPropsType> &
      ReactifiedComponentHasAdditionalProps;

  type TheRefInnerType = ExtractRefType<YourPropsType>;
  type TheRefRequirementForProps = TheRefInnerType extends never
    ? RequiredSpecialRef
    : RequiredSpecialTypedRef<TheRefInnerType>;
  const reactInterface = React.forwardRef<Symbol, ReactifiedComponentProps>(
    (props, ref_that_was_passed_in) => {
      let asATypedRef;
      let asAnUntypedRef;
      if (Api.isThatATypedRef(ref_that_was_passed_in)) {
        asATypedRef = ref_that_was_passed_in;
      } else {
        asAnUntypedRef = ref_that_was_passed_in;
      }
      const ref = asATypedRef
        ? asATypedRef[Api.TypedRefSymbol]
        : asAnUntypedRef;

      const [_theTrueValueOfMoney, forceReactToReRenderThisComponent] =
        React.useState(-1);

      const effectLatch = React.useRef(false);
      const destructionEffectLatch = React.useRef(false);
      const employeeLatch = React.useRef<boolean>(false);

      const provider = useProvider();
      // React is testing your component for
      // some stupid warning where they don't
      // provide any option to workaround
      if (!props || !ref_that_was_passed_in) {
        // React is testing your component
      } else {
        provider.client.serviceClient.createElement<YourPropsType>(
          form_logic_component,
          props as unknown as YourPropsType,
          ref as unknown as Symbol
        );
      }

      React.useEffect(() => {
        if (effectLatch.current) {
          return;
        }
        effectLatch.current = true;
        provider.client.serviceClient.runElementEffects(
          ref as unknown as Symbol
        );
        return () => {
          effectLatch.current = false;
        };
      }, [Date.now()]);

      React.useEffect(() => {
        if (destructionEffectLatch.current) {
          return;
        }
        destructionEffectLatch.current = true;
        return () => {
          destructionEffectLatch.current = false;
          provider.client.serviceClient.destroyElement(
            ref as unknown as Symbol
          );
        };
      }, []);

      const refExplicit = ref as Api.RefPrimitive;
      const theFormStateHasChangedAndINeedToReRender = React.useCallback(() => {
        forceReactToReRenderThisComponent(Date.now());
      }, []);
      React.useEffect(() => {
        if (employeeLatch.current) {
          return;
        }
        employeeLatch.current = true;
        const have_you_considered =
          provider.client.serviceClient.employMeAsAProducer(() => {
            theFormStateHasChangedAndINeedToReRender();
          }, refExplicit);
        return () => {
          employeeLatch.current = false;
          have_you_considered.unsubscribing();
        };
      }, [refExplicit?.[Api.RefSymbol]]);
      return null;
    }
  );
  return reactInterface as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ReactifiedComponentProps> & TheRefRequirementForProps
  >;
};

type ExtractRefTypeGround<YourType> = YourType extends Api.TypedRef<
  infer YourExpectedType
>
  ? YourExpectedType
  : never;

type ExtractRefType<YourType> = YourType extends {
  ref: Api.TypedRef<infer YourExpectedType>;
}
  ? YourExpectedType
  : never;

type RequiredSpecialTypedRef<YourType> = {
  ref: Partial<React.Ref<Symbol>> & Api.TypedRef<YourType>;
};
type RequiredSpecialRef = {
  ref: LooksLikeAReactRefToReact<any>;
};
