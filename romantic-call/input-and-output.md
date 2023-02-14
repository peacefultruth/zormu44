# React44ms.Api.FunctionComponent: `input` and `output`

## Inputs

### 44

`\<input name="whatever" onBlah={...}\>` is only there for you to supply nicely conveniently readily named event handlers.

```
```

`React44ms_onChange` is a special onChange attribute only for `\<input\>`. It is necessary it has some other name because of `jsx` reasons.

### Reactified

[React44ms.Api.FunctionComponent.gist.tsx](React44ms.Api.FunctionComponent.gist.tsx)

```
export const CreditCardNumber: React.FunctionComponent = () => {
  const [state, locate] = React44ms.React.useForm<{
    creditCardNumber: CreditCardNumberExpects;
  }>();
  return (
    <React.Fragment>
      <input onChange={React44ms.React.Convenient.input.onChange(locate.typedRef)}/>
    </React.Fragment>
  );
};
```
You can see here we use that we use the `locate`r to select it's place in whatever. It will render and live up to your expectations.

If you have multiple inputs, the name seperates them otherwise whoever gets it first gets it at whatever ref it is that is receiving whatever event.

## Outputs

`\<output React44ms_value={...}\>`

Your way to render to the forms public state.

Whatever you send gets spread.

Objects only.
