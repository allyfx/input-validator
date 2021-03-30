## Input Validate

Input that validates if it's content it's ok or invalid.

### How it works?

There are four types of validation: CNPJ, CPF, EMAIL and REQUIRED. First, you'll need to import the Input in your page, then choose wich validation you want by selecting it in the imported component, like that:

```js
import InputValidate from "./InputValidate";

export function MyPage() {
  return (
    <>
      <-- For CNPJ validation -->
      <InputValidate.CNPJ />

      <-- For CPF validation -->
      <InputValidate.CPF />

      <-- For EMAIL validation -->
      <InputValidate.EMAIL />

      <-- For REQUIRED validation -->
      <InputValidate.REQUIRED />
    </>
  )
}
```

If you want the input to be required, just pass the `required` prop as `true` and it'll become a required input! Or you can use the `REQUIRED` type for the Input to be only required without any others validations.

```js
import InputValidate from "./InputValidate";

export function MyPage() {
  return (
    <>
      <-- For CNPJ validation -->
      <InputValidate.CNPJ required />

      <-- For CPF validation -->
      <InputValidate.CPF required />

      <-- For EMAIL validation -->
      <InputValidate.EMAIL required />

      <-- For REQUIRED validation -->
      <InputValidate.REQUIRED />
    </>
  )
}
```

It also receives all default input props, so you can use them as you wish.

```js
import InputValidate from "./InputValidate";

export function MyPage() {
  return (
    <>
      <-- For CNPJ validation -->
      <InputValidate.CNPJ placeholder="Here goes your CNPJ" />

      <-- For CPF validation -->
      <InputValidate.CPF placeholder="Here goes your CPF" />

      <-- For EMAIL validation -->
      <InputValidate.EMAIL placeholder="Here goes your e-mail" />

      <-- For REQUIRED validation -->
      <InputValidate.REQUIRED placeholder="This Input is required" />
    </>
  )
}
```

And if you want to stylish the input container, just make sure to use it's default class: `inputErrorContainer`.

```css
/*
  Set 10px of margin on top of an inputErrorContainer element
  that has an inputErrorContainer before it
*/
.inputErrorContainer + .inputErrorContainer {
  margin-top: 10px;
}
```
