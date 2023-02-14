# 44 & React

```
interface MyFormLogicAtomExpects {
  someNestOfValues: {
    treasure: string;
  };
}
interface MyFormLogicAtom44Props {
  ref: React44ms.Api.TypedRef<MyFormLogicAtomExpects>;
}
const MyFormLogicAtom44: React44ms.Api.FunctionComponent
```

```
const MyFormLogicAtom = React44ms.React.Reactify(MyFormLogicAtom44);
```

When rendering `MyFormLogicAtom` you can use your [`locate`]

> Using `Reactify`ied components use your [`const [_state, locate] = React44ms.React.useForm`](React44ms.React.useForm.md) in order to fulfill the `ref` attribute. `<MyFormLogicAtom ref={locate.myformisland.somenest.logicAtom}/>`.

> Rendering children in pure function components only accept string references. `<MyFormLogicAtom44 ref={React44ms.Api.Convenience.element.name<MyFormLogicAtomExpects>(
        "someNestOfValues"
      )}`/> use the `Convenience` to give you ide autocomplete of the name.

