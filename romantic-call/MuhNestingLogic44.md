# MuhNestingLogic44

Rendering children in pure function components only accept string references.

[Gist here](React44ms.Api.FunctionComponent.gist.tsx)

```
return (
  <form React44ms_onSubmit={handleSubmit}>
    <input React44ms_onChange={handleChange} />
    <output React44ms_value={value} />
    <MuhNestingLogic44
      ref={React44ms.Api.Convenience.element.name<CreditCardNumberExpects>(
        "nesting"
      )}
    />
```

Using `Reactify`ied components use your [`const [_state, locate] = React44ms.React.useForm`](React44ms.React.useForm.md).