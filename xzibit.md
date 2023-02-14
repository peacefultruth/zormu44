# Xzibit
## Pimp my ride and or formz lost episode transcript
## Yani 44ms vs The Current State Of The Art [formik and any other trash]

## [tl;dr You already use React and prefer React & thus prefer 44]

To start with I searched these:
react forms library compare 2023
react forms library 2023
awesome react form logic

Opened new tabs from first page only these:
> https://formbricks.com/best-react-form-library-2023
>
> https://shopify.engineering/managing-react-form-state-using-react-form-library
>
> https://pmbanugo.me/looking-for-the-best-react-form-library-its-probably-on-this-list
>
> https://javascript-for-breakfast.com/build-quality-forms-with-react
>
> https://github.com/enaqx/awesome-react#forms
>
> https://github.com/brillout/awesome-react-components#form-logic
>
>https://github.com/huaize2020/awesome-react#%E8%A1%A8%E5%8D%95%E9%80%BB%E8%BE%91
>
> https://github.com/Cyanhall/awesome-react#React-Tools-
>
> https://github.com/iArmanKarimi/awesome-react-clocks

Compiled me a list of libraries from that here the names here the hitlist with detailed differences:

## Formik - Build forms without tears and supports Validation in ease. 中开发表单，从此没有眼泪。

First page of their docs:
```
Why not Redux-Form?
By now, you might be thinking, "Why didn't you just use Redux-Form?" Good question.

According to our prophet Dan Abramov, form state is inherently ephemeral and local, so tracking it in Redux (or any kind of Flux library) is unnecessary
Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Form.
Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB)
```

> form state is inherently ephemeral and local

### Gist vs Gist

The formik gist:
```
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
```

vs

```
import * as React from "react";
import * as React44ms from "react-44ms";
import { ootb } from "typescript-44ms-ootb-all";

interface MyForm {
  email: {
    value: string;
    error?: string;
  };
  password: string;
}
interface MyFormProps {
  formRef: React44ms.Api.TypedRef<MyForm>;
}
const MyForm: React.FunctionComponent<MyFormProps> = (props) => {
  const [state, locate] = React44ms.React.useForm(props.formRef);
  React44ms.React.useForm(locate.email);

  const {
    email: { value: email, error: emailError },
    password,
  } = state || { email: {} };

  const [submissionError, setSubmissionError] = React.useState<string | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedSuccessfullySuper, setSubmittedSuccessfullySuper] =
    React.useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> =
    React.useCallback(
      (event) => {
        event.preventDefault();

        setSubmissionError(null);
        const { reasons_this_form_is_invalid } =
          React44ms.React.Convenient.form.onSubmit(locate, event);
        if (reasons_this_form_is_invalid) {
          if (
            reasons_this_form_is_invalid[
              React44ms.Api.submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY
            ]
          ) {
            setSubmissionError("Your form is empty and empty is invalid.");
            return;
          }

          for (const [source, message] of Object.entries(
            reasons_this_form_is_invalid
          )) {
            setSubmissionError(message);
          }
          return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmittedSuccessfullySuper(true);
        }, 1000);
      },
      [locate]
    );

  if (submittedSuccessfullySuper) {
    return (
      <div className="submission-successful">
        <h1>Submitted successfully!</h1>
        <h2>You have been registered with these details:</h2>
        <div>
          <p className="email">{`email: ${email}`}</p>
          <p className="password">{`password: ${password}`}</p>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <EmailLogic ref={locate.email.typedRef} />
      <input
        value={email}
        onChange={React44ms.React.Convenient.input.onChange(locate.email)}
      />
      {emailError && <div className="error emailError">{emailError}</div>}

      <PasswordLogic ref={locate.typedRef} />
      <input
        type="password"
        value={password}
        onChange={React44ms.React.Convenient.input.onChange(locate)}
      />

      {submissionError && <div className="error">{submissionError}</div>}

      <button type="submit" disabled={!!emailError || isSubmitting}>
        Submit
      </button>
    </form>
  );
};
const Page: React.FunctionComponent = () => {
  const [_state, locate] = React44ms.React.useForm<MyForm>();
  return <MyForm formRef={locate.typedRef} />;
};
const formCient = React44ms.React.createClient(ootb());
const App: React.FunctionComponent = () => {
  return (
    <React44ms.React.Provider client={formCient}>
      <Page />
    </React44ms.React.Provider>
  );
};
export default App;

interface EmailLogicProps {
  ref: React44ms.Api.TypedRef<MyForm["email"]>;
}
const EmailLogic44: React44ms.Api.FunctionComponent<EmailLogicProps> = () => {
  const [email, setEmail] =
    React44ms.Api.useState<MyForm["email"]["value"]>("");
  const [error, setError] =
    React44ms.Api.useState<MyForm["email"]["error"]>(undefined);
  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      const newEmailValueTheUserTyped = event.target.value;
      setEmail(newEmailValueTheUserTyped);

      if (newEmailValueTheUserTyped.length < 1) {
        setError("Required");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
          newEmailValueTheUserTyped
        )
      ) {
        setError("Invalid email address");
      } else {
        setError(undefined);
      }
    }, []);
  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback(
      (event) => {
        // Can do this as simply as:
        // React44ms.Api.submit(!error as unknown as true);
        // or:

        if (error) {
          throw error;
        }
        React44ms.Api.submit(true);
      },
      [error]
    );
  const value: MyForm["email"] = React44ms.Api.useMemo(
    () => ({
      value: email,
      error,
    }),
    [email, error]
  );
  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
      <output React44ms_value={value} />
    </form>
  );
};
const EmailLogic = React44ms.React.Reactify(EmailLogic44);

interface AnyFormWithAPasswordSlot {
  password: string;
}
interface PasswordLogicProps {
  ref: React44ms.Api.TypedRef<AnyFormWithAPasswordSlot>;
}
const PasswordLogic44: React44ms.Api.FunctionComponent<
  PasswordLogicProps
> = () => {
  const [password, setPassword] =
    React44ms.Api.useState<MyForm["password"]>("");

  const handleChange: React44ms.Api.input["onChange"] =
    React44ms.Api.useCallback((event) => {
      const newPasswordValueTheUserTyped = event.target.value;
      setPassword(newPasswordValueTheUserTyped);
    }, []);
  const handleSubmit: React44ms.Api.form["onSubmit"] =
    React44ms.Api.useCallback(
      (event) => {
        if (password.length < 1) {
          throw new Error("You need a password to submit.");
        }
        React44ms.Api.submit(true);
      },
      [password]
    );
  const value: AnyFormWithAPasswordSlot = React44ms.Api.useMemo(
    () => ({ password }),
    [password]
  );
  return (
    <form React44ms_onSubmit={handleSubmit}>
      <input React44ms_onChange={handleChange} />
      <output React44ms_value={value} />
    </form>
  );
};
const PasswordLogic = React44ms.React.Reactify(PasswordLogic44);
```

So what's the difference?

### Formik wants a literal "\<Formik\>" to be your "\<form\>"
Disgusting!
```
    <Formik
```

### Formik wants this disgusting piece of syntax "functional child"
Disgusting!

```
    <Formik>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
```

Did I mention disgusting yet?

### Formik wants you to know all of your [initial values, validation stack, and submission] in one big gulp at the parent most level

```
  <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
```

Disgusting! Also severely limiting and scales terribly.

Also whatever happened to:
> form state is inherently ephemeral and local
?

How is it ephemeral and local to have everything declared on the parent-most declaration of the form instead of as atomic state like any React function? I need to know everything about my form before I even get to writing my form?

### `44` instead has `FunctionComponent` & `TypedRef`

Maybe you might be saying: "but having declared interfaces is sort of similar to formik having a single declaration of a form topmost".

Enter the TypedRef.

TypedRef is one of the very interesting emergences from building this library. It came about as a specification AFTER the library was already passing all tests.

Ref's in 44 are basically a way to navigate and identify your form. My form: "{ some_nested_field: { some_extra_nested_field: { my_value: string } } }" you can use refs like "locate.some_nested_field.some_extra_nested_field.my_value" with full typescript completion. That way you can identify something completely abstracted from the current state of that something/your-form.

Basically what happened was: I had the library passing tests and needed to now make the production code using it to replace the preexisting form library solution and also then extend to support the design requirement that wasn't supported previously.

So in now making a production app using the library, where did I start from? Do you think I started from "the whole form should just already be ready?"? No! I started from the most atomic piece that I could get done and working on Staging just to even see the library work in a browser.

What emerged from this?

You declare forms from the bottom up, you give specifications/requirements/expectations from what you need in atomic contexts and then you curate those into fully fledged form interfaces as you move your way up.

Example: I need a shipping form.
Shipping form has a first name and last name to start off with...
So let's build our name guy:
```
export interface AnyNameInMyFormExpects {
  value: string;
  error?: string;
}
export interface NameLogicProps {
  ref: React44ms.Api.TypedRef<AnyNameInMyFormExpects>;
}
export interface NameProps {
  formRef: NameLogicProps["ref"];
}
export const Name: React.FunctionComponent<NameLogicProps> = (props) => {
  const [state, locate] = React44ms.React.useForm(props.formRef);
  ...
}
export const MyForm: React.FunctionComponent = (props) => {
  const [_state, locate] = React44ms.React.useForm<{ firstname: AnyNameInMyFormExpects; }>();
  return (
    <form>
      <Name formRef={locate.firstName.typedRef}/>
    </form>
  );
};
```

So the thing is we are free to build our ui completely independant of the logic.

All I need to know is what I require from my most local piece of state that has been reserved for me in the object I am rendering to.

And this way you build your atomic components and then you can easily declare your form at the top level if need be:
```
export interface MyBigForm {
  firstName: AnyNameInMyFormExpects;
  lastName: AnyNameInMyFormExpects;
  ...
}
```

That's even if you need that which you don't.

All you ever need is the interface enough to satisfy whatever atomic conditions your form fragments are working in.

Totally atomic. Totally ephemeral.

It was worth writing this library just to discover that almost is how I felt.

### Formik wants unknown access to your input events

```
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
```

On their documentation: "The code above is very explicit about exactly what Formik is doing. onChange -> handleChange, onBlur -> handleBlur, and so on. "

No it's not that explicit. What in the living hell does it need this executive control for exactly such that it absolutely requires me to use their custom \<form\> element and special functions? What happens if I don't pass handleBlur? How composeable are these functions exactly do they preventDefault? What the hell is formik even doing for me?

### Formik is made for VERY SIMPLE USE CASES I never select it for any serious commercial frontends

Don't believe me. I can get hired as a consultant to fix your formik shitpiece and get paid high daily rates.

## redux-form - Redux 表单状态管理(Web and Native)。

From their page 20230213 7:21pm
```
Attention: Do not begin a project with Redux Form. The author of Redux Form has written a superior library, React Final Form. If
```

Hahahahaha okay! I already was planning on not using it because it's redux.

## react-final-form - High performance subscription-based form state management for React. 基于订阅的表单状态管理。

? That landing page gif? background/banner looks like shit.

> Get Started

```
React Final Form is a thin React wrapper for Final Form, which is a subscriptions-based form state management library that uses the Observer pattern, so only the components that need updating are re-rendered as the form's state changes.
```

That sounds nice! I do want to see it.

> https://final-form.org/

? That landing page gif? background/banner looks like shit.

> Get Started

```

// Create Form
const form = createForm({
  initialValues,
  onSubmit, // required
  validate
})
```

MEH. SAME AS FORMIK. [I WANT EVERYTHING TOP MOST ALREADY KNOWN AT THE PARENT TOTALLY BEFORE CONTINUING TO WRITE YOUR FORM](#formik-wants-you-to-know-all-of-your-initial-values-validation-stack-and-submission-in-one-big-gulp-at-the-parent-most-level)

```
const unregisterField = form.registerField(
  'username',
  fieldState => {
    // Update field UI
    const { blur, change, focus, ...rest } = fieldState
    // In addition to the values you subscribe to, field state also
    // includes functions that your inputs need to update their state.
  },
  { // FieldSubscription: the list of values you want to be updated about
    active: true,
    dirty: true,
    touched: true,
    valid: true,
    value: true
  }
)
```

MEH. Looks like a more difficult way of writing it as a Function Component. Like I'm literally in the engine of some toy car. Like a somebody.

Also looks easily crappy in terms of like, what happens with nesting? I mean I could assume it understands from the `username` field to do something like `username.some_extra_thing_i_need_for_some_reason` but I mean if it could do that why would it be a fucking string? [Don't help me typescript! Don't have TypedRef's](#44-instead-has-functioncomponent--typedref)

```
form.submit() // only submits if all validation passes
```

?????? What? What is this api? I want a NO or a YEAH when I ask you if the shit valid. Right there when I ask you. From this example I have no idea where I get my delicious info. What I need a bunch of beauracracy signals and shit?! You know everything right there and the next statement in every control flow that is ever going to get value from you is almost always going to be "form.validate; if (form valid) ..."? I want a signal around it? Whatever I'm not reading the rest of your documentation that the first page and I extracted that. You're free to select it on top. Enjoy your terrible experience.

## react-hook-form - React hooks for form validation without the hassle. 用于表单校验的不麻烦的

Website looks nice.

v5/v6 switch?

v6 first or v5 first?

The website says v5 first. L

There is a video demo!

> Press Play
> Stop the video at 17 seconds
> <form onSubmit={onSubmit}>
> Instead becomes
> <form onSubmit={handleSubmit(onSubmit)}>

Nah!

It should be the other way around I call your shit function.

You want executive control!

Normally this is where the journey ends between me and you.

Fo your sake let me get into detailed shitting on you:

> Continue rest of the video

I see nothing about validation here? You have a form that stringifies state? And you need to register fields with spreading.

> Get Started Click.

First example:
```
{/* register your input into the hook by invoking the "register" function */}
<input defaultValue="test" {...register("example")} />

{/* include validation with required or other standard HTML validation rules */}
<input {...register("exampleRequired", { required: true })} />
{/* errors will return when field validation fails  */}
{errors.exampleRequired && <span>This field is required</span>}
```

I hate it. The `{ required: true }` shit -- hardcoded require into the form shit? Where can I customize or extend that?

And the thought of every single property being only as advanced as literals and some big `error` shitbox.

```
List of validation rules supported:
required, min, max, minLength, maxLength, pattern, validate
```

Find me the business that is that simple needs forms that simple. Please! We will be rich!

Extension looks miserable.

```
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    }
  });
```

Again know your entire form already type shit but it's greedy with the default values. I would rather you just tell me you haven't been defaulted yet thanks and I can use basic javascript to provide that.

It was already a no and now more of a no!

Oh wait! I forgot about v6!

> Looks exactly the fucking same.

## react-hooks-form

This is not the same library as the one above it. It has a plural on the middle word.

> Getting Started
>> Overview
> "React Hooks Form helps you with:
> 1. Handling field values, errors, visited status and more."
> ...
> Usage

```
import React from 'react'
import { Form, FormField } from 'react-hooks-form'

async function handleSubmit(values) {
  try {
    await _myApiRequest(values);
  } catch (error) {
    alert(error.message)
  }
}

function SignUpForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormField component="input" name="fullName" type="text" />
      <FormField component="input" name="email" type="text" />
      <FormField component="input" name="password" type="password" />
      <button type="submit">Sign Up</button>
    </Form>
  )
```

This is literally the first example.

The form has no validation? It is doing nothing? This is boilerplate external library naming shitcode around regular shit.

I have no idea why I would use this? Like the library has done absolutely nothing here?

That is the entire example. Entire page.

> Organizing your fields

Worthless don't care bye! Typescript already not enough how?

> Client-side validation

```
function validate(formValues) {
  let errors = {};
  ...
```

One big validation function. Topmost.

Shitfest!

## Formily - High performance, extensible, and Typescript friendly 高性能、高扩展、TypeScript友好的表单解决方案。 

Website looks pro. Alibaba? Wuht? Say my name bitch

> Two options
> Introduction
> Quick start
> "start" not capitalized
> Introduction Click.

```
As we all know, the form scene has always been the most complex scene in the front-end and back-end fields. What is the main complexity of it?
```

Yeah I said the same shit? Okay maybe this might be nice.

> A lot of rambling, 
> the various shitty problems of forms!
> ...

K?

> `Solution`
> In order to solve the above problems, 
> we can further refine the problem and 
> come up with a breakthrough direction.
>
> [That is the entire section.]
> [That is the entire section. No solution given.]

K????

Oh no no I got it wrong.

The next part is a subtitle.

Oh it's a list of all the shit it does okay, the list:
> Accurate Rendering
> Domain Model
> Path System
> Life Cycle
> Protocol Driven
> Layered Architecture
> Competitive Product Comparison
> Core Advantages
> Core Disadvantage
> Q: What is the biggest advantage of Formily2.x compared to 1.x?
> Answer: The cost of learning, yes, the core is to allow users to understand Formily more quickly. We have tried our best to avoid all kinds of obscure logic and boundary problems during the 2.x design process.

You went out of your way to avoid edge cases.

Okay anyway the comparison:

```
{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "title": "Source",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      },
      "x-reactions": [
        {
          "when": "{{$self.value == '123'}}",
          "target": "target",
          "fulfill": {
            "state": {
              "visible": true
            }
          },
          "otherwise": {
            "state": {
              "visible": false
            }
          }
        }
      ]
    },
    "target": {
      "type": "string",
      "title": "Target",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
```

Static object specification mysterious template language shit "when": "{{$self.value == '123'}}",

What technology illiterate technophobe has strangled who into being forced into this miserable and terrible way of never doing forms.

I'm not gonna stop you from using it.

I would never use it for any web react shit that like majority of us are making easy react dollahz from.

## formsy-react - A form input builder and validator for React JS. 的表单输入构建器和验证。 

Only a github repo. Sweet!

> Quick Start	API	1.x API
> Background
> What You Can Do
> 1. Build any kind of form element components...
> Blahblahblah.
> Formsy component packages

I want logic. Why the fuck am I seeing ui shit?! Why I'ma want yo logical ui bundled shit pieces?

> Quick Start
> 1. Build a Formsy element
> class MyInput extends React.Component {

Class react?! Class react?!?!?!??!?! 2023??!?

FUCK YOU.

## Phormal - Docs & Demos - Responsive, multilingual forms with built-in validation, support for dark mode and right-to-left languages.

> Please note, that this library is still in its beta versions.

Yeahhhhhhhhhh I mean I look as suspect as you do.

> Getting started
> "started" not capitalized?

```
PhormalExample() {
  const formFields = {
    paymentMethod: {
      type: 'radiogroup',
      label: 'Payment Method',
      value: 'paypal',
      options: [
        {label: 'PayPal', value: 'paypal'},
        {label: 'Credit card', value: 'creditcard'},
        {label: 'Klarna', value: 'klarna'},
      ]
    },
    name: {
      label: 'Name',
      hooks: [useRequired(), useLength(3)]
    },
    email: {
      label: 'Email',
      hooks: [useRequired(), useEmail()]
    },
    newsletter: {
      type: 'checkbox',
      label: 'Newsletter',
      value: true
    },
  }
  const formInstance = useForm(formFields)
 
  const getValues = () => {
    console.log(formInstance.$values()) // Logs the values of all form fields
  }
 
  const validate = () => {
    const formIsValid = formInstance.$validate()
    console.log(formIsValid) // Logs true if all fields are valid, false otherwise
  }
 
  return (
    <>
      <main>
        <div className={'container'}>
          <h1>Phormal</h1>
 
          <FormContent instance={formInstance} />
```

Not only do you have to know your form you need to know your form in absolute literal object to pass in topmost or you get no form.

Hooks? You can provide an array of hooks.

Why not just a functioncomponent? You're basically a rigid functioncomponent.

Anyway see the same reasons as formik.

## data-driven-forms - A declarative way for building forms with all the functionality.

Yeah yeah static object schema topmost. Same as formik. Pass.

## KendoReact Form

I didn't immediately get what the fuck they're doing and so hate it but let's go further:

```
<Field
  name={"email"}
  type={"email"}
  component={EmailInput}
  label={"Email"}
  validator={emailValidator}
/>
```

So basically you give it a `validator` and your ui component to render `EmailInput`.

```
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};
```

> \<Input {...others}\>
> {...others}
> Mysterious and spooky
> Just more event handlers?
> How mysterious and spooky are you {...others}?

Anyway that's a no from me.

This would be fun except [see the earthq](/www.turkiye.com)

## plexus-form - A dynamic form component for react using JSON-Schema.

So that title there, is from the description of it I found it from in the `awesome-react` type repo.

But then the first line in the npm page:

```
A dynamic form component for React using a specification format based on JSON-Schema.
```

How... How is it dynamic and json schema based?

I mean again, it wants everything from the top down. topmost forms. I know everything and then I write my form.

If I already knew everything I would already know it and not need to write it?

Anyway the simplest way to make that piece of shit dynamic then is to have some provider which provides the schema and then you make your own custom registration function that that provides to controllers, you register your fields and it becomes dynamic-ish.

Meh! Weak! Not a real emergence of form shit! Not interested!

## react-jsonschema-form - A React component for building Web forms from JSONSchema. 基于 JSONSchema 构建表单。 

> JSONSchema
> UISchema
> formData

Schema validation with a ui schema as well -- sort of public/private distinction in classes or whatever, but I mean again it feels like a rigid function component. Just let me write function components? Like these all look like a complicated way around just being able to declare state and a function with closure on that state.

## react-formawesome - Complex library for creating awesome forms.

> React UI lib for react-formawesome-core.
> /react-formawesome-core
> React wrapper for class-validator library.
> /class-validator
> Allows use of decorator and non-decorator based validation. Internally uses validator.js to perform validation.
> /validator.js
> A library of string validators and sanitizers.
> `validator.isEmail('foo@bar.com');`

K

> React Formawesome core
> Validators
> AbstractValidator, ModelValidator, SchemaValidator
> Error cases

```
Public interface
Class require to implement two methods:
  . Getter for name of model/schema
        public get modelName(): string;
  . Validate method
        public validate: async (groups?: Array<string>) => Promise<void>
        
And provide implemented methods:
{getters and setters for explicit "values" "errors" "attributes"}
```

Yeahhhhhhhh
```
INSTANCE - object or class that describe attributes and rules. ALL ATTRIBUTES SHOULD BE INITIALIZED, EVEN WITH UNDEFINED VALUE!
WRONG:
class SomeModel {
    public someField: string;
}
RIGHT:
class SomeModel {
    public someField: string = undefined; // or null, string, number, boolean.
}
```

I ran into a similar problem as I was developing this library.

Basically forms have an initial state.

Actually forms have two seperate initial states, one is for the situation that renders are incomplete and the form state is technically undefined and the other is the explicit user defined initial state.

What happened in this persons library is that they encountered the same roadblock and opted instead to not be transparent so you *must* declare an initial state.

44 the solution was to make it explicit that whenever you use form state at the react layer / ui layer; it's type is `Whatever Type You're Expecting From Your Form Interface | null`.

The expectation is that a null there is an explicit "this is neither uninitialized or initialized or anything".

But I mean ultimately the difference here is class based components vs function components.

## react-validation-mixin - eact 的简单验证Mixin (HoC高阶组件)。

> Introduction
> This library simply wraps your React Component, transfering it props containing the boilerplate to validate a React form.
> Overview
> Install

The install page has like options of what to install or whatever but I have no idea what the fuck any of your shit is yet. How can I select between varieties of unknown shit?

> Getting Started

```
import validation from 'react-validation-mixin'; //import the mixin
import strategy from 'joi-validation-strategy'; //choose a validation strategy
```

Ahhhhhhh okay.

```
Wrap the component with the validation mixin and supporting strategy on export:

export default validation(strategy)(Component);
```

But then... the rest of the example, none of it makes sense? It wants me to implement functions in some `unknown file or location` in a `class context` but it has no interface?

What is this nonsense trash?

> Basic Example
> Class based React

FUCK THAT SHIT BYE

## surveyjs - The advanced Survey and Form library 先进的调查和表单库。 

Website looks nice?
> Go pro
?

If I wasn't a pro why would I be looking at your developer facing library?

Anyway going through this shit it's basically more quiz json file generating ui editor than anything else.

JSON schema library basically.

## uniforms - A React library for building forms from any schema

Json schema shit blahblahblah oh dear god the bridges and adapters and shit kill it with fire.

## react-formal - Sophisticated HTML form management for React

> Classy HTML form management

> Get started
> "started" not capitalized??

```
<Form noValidate defaultValue={{ age: 25, name: 'Jane Doe' }}>
  <label>
```

Formik.

## vest - Declarative form validation framework inspired by unit testing syntax.

> Vest is a form-validation framework inspired by unit testing libraries like Mocha or Jest; It is designed to be easy to use and easy to learn by introducing their declarative syntax.

That sounds nice! I want to see more!

```
export default function Form() {
  const [formstate, setFormstate] = useState({});
```

You have total control over your formState and it's a literal useState call, that's nice.

```
  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = suite(nextState, currentField);
```

Not some hog that wants executive control on your event handlers. Nice!

```
import { create, test, enforce, only, warn, skipWhen } from "vest";
import wait from "wait";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty();
  });
  test("username", "Username is too short", () => {
    enforce(data.username).longerThan(2);
  });

  skipWhen(
    (res) => res.hasErrors("username"),
    () => {
      test.memo(
        "username",
        "Username already taken",
        () => {
          return doesUserExist(data.username);
        },
        [data.username]
      );
    }
  );
```

Yeahhhhhhh

Okay so I like it but it's still lacking.

`only(currentField)` literally what the fuck does that mean?

`test("username", "Username is required", () => {` I like the test driven ish look and feel -- and it turns out I did implement something similar in 44 own submit having an `expect` passed to it.

`enforce(data.username).isNotEmpty();` Not bad. I mean not particularly the responsibility of the form library but nice.

You could use this library with 44. You can use it as your validation language within your event handlers.

```
skipWhen(
  (res) => res.hasErrors("username"),
  () => {
    test.memo(
      "username",
      "Username already taken",
      () => {
        return doesUserExist(data.username);
      },
      [data.username]
    );
```

Yeah sorta crumbling here because it's like, wherever I see a string used as a key for placing some value in an object AND you don't have typescript help around it -- it looks suspiscious to me. Because I almost never encounter simple object usecases with no nesting.

But then what's with the concerns and how they're described here in this memo? I mean:
```
test.memo(
  "someobjectkey.something", // I assume this works?
  "Username already taken", // I assume this is the value of the memo?
  () => {
    return doesUserExist(data.username);
  }, // So then this is the switch
  [data.username] // When to run the switch
);
```

This custom memoish shit, this is some weird ass memo. This is not a memo I would expect from react.

But I mean more importantly, do you really need the seperation between `something that generates a value` and `value outputted by me if that something that generates a value is a something?`.

Not bad though -- I might could consider using it in concert with 44 -- but it's less a solution for forms and more a solution for the explicit validation part of a form's state.

# ANYONE ELSE WANNA STEP IN THE RING?
20230213 09:01pm
