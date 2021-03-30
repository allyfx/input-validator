import React, { useState, useEffect } from "react";
import { IError } from "../../Types/IError";
import { IInputValidateProps } from "../../Types/IInputValidateProps";
import Mask from "../../../../utils/Mask";
import Validators from "../../../../utils/Validators";
import { handleValidateEmptyInput } from "../../Utils/ValidateEmptyInput";
import { Error } from "../../Components/Error";
import { Input } from "../../Components/Input";
import { InputError } from "../../Components/InputError";

export function CNPJ({
  onChange,
  onBlur,
  value,
  required,
  ...rest
}: IInputValidateProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<IError>({
    error: false,
    errorMessage: ""
  });
  const handleValidateInput = () => {
    const validate = Validators.CNPJ(inputValue);
    let newError = error;
    if (!validate) newError = { error: true, errorMessage: "CNPJ Inválido" };
    else newError = { error: false, errorMessage: "" };
    setError(newError);
  };
  useEffect(() => {
    if (value && inputValue !== value) setInputValue(value?.toString());
  }, [value, inputValue]);
  return (
    <InputError>
      <Input
        onChange={(e) => {
          setInputValue(Mask.NUMBER(e.currentTarget.value));
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          let isInputEmpty: IError = error;
          if (required) {
            isInputEmpty = handleValidateEmptyInput({ error, inputValue });
            setError(isInputEmpty);
          }
          if (!isInputEmpty.error || !required) handleValidateInput();
          if (onBlur) {
            onBlur(e);
          }
        }}
        value={Mask.CNPJ(inputValue)}
        {...rest}
      />
      <Error error={error} />
    </InputError>
  );
}
