export const fulfill = <T extends any>(
  key: keyof T,
  ...args: Parameters<
    T[typeof key] extends (...args: any[]) => any ? T[typeof key] : any
  >
): ReturnType<
  T[typeof key] extends (...args: any[]) => any ? T[typeof key] : any
> => {
  const value: T = {} as unknown as T;
  return (
    value[key] as unknown as T[typeof key] extends (...args: any[]) => any
      ? T[typeof key]
      : any
  )(args);
};
