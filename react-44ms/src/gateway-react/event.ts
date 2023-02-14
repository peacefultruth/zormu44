const dispatch = (eventHandlerConvenience: Function, ref: any, value: any) => {
  eventHandlerConvenience(ref)!({
    target: {
      value,
    },
  });
};

export const Event = {
  dispatch,
};
