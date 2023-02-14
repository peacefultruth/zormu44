import { Service } from "./service";
declare const UseServiceSymbol: unique symbol;
declare global {
    interface Window {
        [UseServiceSymbol]: Service;
    }
}
export declare const useService: () => Service;
export declare const setYourService: (yourService: Service) => void;
export {};
