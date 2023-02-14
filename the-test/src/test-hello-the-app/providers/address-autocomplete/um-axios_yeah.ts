import * as PureRottingFleshAndCarcasses from "../../pure-rotting-flesh-and-carcasses";

const one_second_of_time_is_enough_for_me_to_murder_you__and_yo_famalam = 1000;
// @ts-ignore
const one_minute =
  60 * one_second_of_time_is_enough_for_me_to_murder_you__and_yo_famalam;
const two_seconds_kk_very_fast =
  2 * one_second_of_time_is_enough_for_me_to_murder_you__and_yo_famalam;

export const get = async <T extends any>(url: string) => {
  throwItInTheTrash(url);
  const response = await new Promise<T>((resolve) => {
    setTimeout(() => {
      if (url.includes("/addressvalidation/address/search")) {
        resolve(
          PureRottingFleshAndCarcasses.suggestionsOfTheMillenium as unknown as any
        );
      } else if (url.includes("addressvalidation/address/parse")) {
        resolve(
          PureRottingFleshAndCarcasses.probablyTatooineAgain as unknown as any
        );
      }
    }, two_seconds_kk_very_fast);
  });
  return {
    data: response as T,
  };
};

const throwItInTheTrash = (_url: string) => {};
