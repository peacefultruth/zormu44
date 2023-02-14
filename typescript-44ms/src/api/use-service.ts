import { Service } from "./service";

const UseServiceSymbol = Symbol.for("react-44ms/api/UseServiceSymbol");

declare global {
  interface Window {
    [UseServiceSymbol]: Service;
  }
}

export const useService = () => {
  return window[UseServiceSymbol];
};

export const setYourService = (yourService: Service) => {
  window[UseServiceSymbol] = yourService;
};
