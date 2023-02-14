# 44ms

# Valentines Day 4 React Developers 2023 ❤️

## Say goodbye to your `form`er troubles 

## Forms are eazy now

## [tl;dr You already use React and prefer React & thus prefer 44]

## Pronounciation

<br/>

> `Foh Thah Fohms! / Forty Fo(u)rms / Forty Four'ms / "React" for the forms!` Whatever

<br/>

[github.com/peacefultruth/zormu44](https://github.com/peacefultruth/zormu44)

[MIT LICENSE](https://github.com/peacefultruth/zormu44/LICENSE)

[API](https://github.com/peacefultruth/zormu44/api.md)

[Xzibit / 44 vs The Current State Of The Art / Form Library Comparison 2023 February](https://github.com/peacefultruth/zormu44/xzibit.md)

Deprem? Deprem is a turk word for earthq [🇹🇷 Donate to me directly.](https://www.buymeacoffee.com/44ms) Or do you need an `ls ./tragedy`? You can always release fo free.

No idea why that script below doesn't work and don't really care. [Buy me a bag yani]()

<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="44ms" data-color="#40DCA5" data-emoji="👜"  data-font="Cookie" data-text="Buy me a bag" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>

# Yallah

```
npm install --save react-44ms typescript-44ms typescript-44ms-ootb-all 
```

```
import * as React44ms from 'react-44ms';
```

```
import { ootb } from "typescript-44ms-ootb-all";

const formCient = React44ms.React.createClient(ootb());
const App: React.FunctionComponent = () => {
  return (
    <React44ms.React.Provider client={formCient}>
```

```
interface AnEmailInMyFormExpects {
  value: string;
  error?: string;
}
interface EmailLogicProps {
  ref: React44ms.Api.TypedRef<AnEmailInMyFormExpects>;
}

const EmailLogic44: React44ms.Api.FunctionComponent<EmailLogicProps> = () => {
  const [email, setEmail] =
    React44ms.Api.useState<AnEmailInMyFormExpects["value"]>("");

  const [error, setError] =
    React44ms.Api.useState<AnEmailInMyFormExpects["error"]>(undefined);

...
```

```
const EmailLogic = React44ms.React.Reactify(EmailLogic44);
```

```
import * as React from "react";

interface EmailProps {
  formRef: React44ms.Api.TypedRef<AnEmailInMyFormExpects>;
}
const Email: React.FunctionComponent<EmailProps> = (props) => {
  const [state, locate] = React44ms.React.useForm(props.formRef);
  const { value, error } = state || {};
  return (
    <div>
      <EmailLogic ref={locate.typedRef} />
      <input value={value} onChange={React44ms.React.Convenient.input.onChange(locate)}/>
...
```

# LEVEL 11