export type fulfill = Symbol & {};
export const fulfill = {
  name: <T extends any>(whatever: keyof T) => whatever,
};
