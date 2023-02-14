import * as React44ms from "react-44ms";

interface AddressLineFormLogicFunctionComponentProps {
  required?: boolean;
}
const AddressLineFormLogicFunctionComponent: React44ms.Api.FunctionComponent<
  AddressLineFormLogicFunctionComponentProps
> = () => {
  const [value, setValue] = React44ms.Api.useState("");
  const handleAddressLineTextChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      setValue(event.target.value);
    }, []);
  return (
    <>
      <input name="setValue" React44ms_onChange={handleAddressLineTextChange} />
      <output React44ms_value={value} />
    </>
  );
};

export const AddressLineFormLogic = React44ms.React.Reactify(
  AddressLineFormLogicFunctionComponent
);
