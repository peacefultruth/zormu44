import * as T44ms from "typescript-44ms";

export const createElement = <YourPropsType extends any>(
  type: T44ms.Api.FunctionComponent<YourPropsType>,
  props: Parameters<T44ms.Api.FunctionComponent<YourPropsType>>[0],
  _ref?: Symbol
) => {
  return type(props);
};
