# 44 API

zormu44/typescript-44ms/build/build/api/index.d.ts

export type { FunctionComponent } from "./function-component";

# React44ms.Api.FunctionComponent

[Gist](romantic-call/React44ms.Api.FunctionComponent.gist.tsx)

Text above code block is referring to code block underneath.

```
import * as React44ms from "react-44ms";

export interface CreditCardNumberExpects {
  value: string;
  error?: string | "blah" | null;
  nesting: {
    nests: {
      of: {
        nests: "Yeah!";
      };
    };
  };
}
interface CreditCardNumberLogic44Props {
  ref: React44ms.Api.TypedRef<CreditCardNumberExpects>;
}
export const CreditCardNumberLogic44: React44ms.Api.FunctionComponent<
  CreditCardNumberLogic44Props
> = (props) => {
```

## Declare your expectations for what your form logic will be outputting.

```
export interface CreditCardNumberExpects {
```

## Atomic. Bottom Up. Not TopMost.

Have a property that says what you expect in wherever it is in some object that your FunctionComponent is going to be rendering it's object output to.

> Use TypedRef and give it your "*Expects".

```
interface CreditCardNumberLogic44Props {
  ref: React44ms.Api.TypedRef<CreditCardNumberExpects>;
```

## Yayyyy! FunctionComponent Writing Time! Give it your props interface and get those props.

```
export const CreditCardNumberLogic44: React44ms.Api.FunctionComponent<
  CreditCardNumberLogic44Props
> = (props) => {
```

## `useState` same as [useState in React](https://beta.reactjs.org/learn)

> Differences explained in detail: [romantic-call/useState.md](romantic-call/useState.md)

```
const [creditCardNumber, setCreditCardNumberBiggMoney] =
    React44ms.Api.useState<CreditCardNumberExpects["value"]>("");

const [creditCardNumberError, setCreditCardNumberError] =
    React44ms.Api.useState<CreditCardNumberExpects["error"]>(null);
```

## `useCallback` same as [useCallback in React](https://beta.reactjs.org/learn)

> Differences explained in detail: [romantic-call/useState.md](romantic-call/useCallback.md)

## `React44ms.Api.input["onChange"]`

Name kinda crappy.

Anyway it describes the `onChange` of any `\<input\>`.

`\<input\>'s` explained keep on.

`validation` I mean do whatever you want? Plug in [`vest`](https://vestjs.dev/) if you want to I don't care. You have React on demand.

```
  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback();
```

In the example we returning something with some particular nested property, there's several ways to handle it, simplest way is to only expect a partial value and delegate the nesting to the nest making function component.

## `useMemo` same as [useMemo in React](https://beta.reactjs.org/learn)

> Differences explained in detail: [romantic-call/useState.md](romantic-call/useMemo.md)

Anyway memoize your final output ready fo...

```
const value: Partial<CreditCardNumberExpects> = React44ms.Api.useMemo(
  () => ({ ... }),
  [...]
);
```
## `React44ms.Api.form["onSubmit"]`

Crappy name again.

Anyway this is the local atomic form submit handler.

The expectation is as follows: `React44ms.Api.submit(true);` will be called in a synchronous context.

If it isn't called expect an error that says your form is invalid.

If you pass a `boolean`; you are expected to then also say `myBooleanValue as unknown as true!`; What will happen is that if your `boolean value` is not `true` it will consider it the same as an exception being throw in your `submit handler`.

`You can throw exceptions. Throw them. Gives message and sources and blahblahblah. Consumer gets everything.`

```
const handleSubmit: React44ms.Api.form["onSubmit"] =
  React44ms.Api.useCallback((event) => {
    React44ms.Api.submit(true);
  }, []);
```

Okay so now.

## Why even bother with jsx rendering and shit here?

Why not just return an object?

Nah! I want nice simple typing access to any form or input attribute that I would be interested in listening to like expose all the ui event ports to me because I have business and design to satisfy.

Otherwise I would have to guess or name myself for already regular standard browser events that I will be interested in.

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

## What is with the `MuhNestingLogic44`?

[See romantic-call/react-and-44.md](romantic-call/react-and-44.md)

## What is with the `\<output\>`'s and \<input\>'s?

[See romantic-call/input-and-output.md](romantic-call/input-and-output.md)

# Look through [`the test`](./the-test/src/hello.test.tsx) it will probably have the solution.

# Look through [`example-with-create-react-app`](./example-with-create-react-app/package.json) it will probably have the solution.