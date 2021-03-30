import React, { useState, useEffect } from "react";
import { IError } from "../../Types/IError";
import { IInputValidateProps } from "../../Types/IInputValidateProps";
import { handleValidateEmptyInput } from "../../Utils/ValidateEmptyInput";
import { Error } from "../../Components/Error";
import { Input } from "../../Components/Input";
import { InputError } from "../../Components/InputError";

export function REQUIRED({
  onChange,
  onBlur,
  value,
  ...rest
}: IInputValidateProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<IError>({
    error: false,
    errorMessage: ""
  });
  useEffect(() => {
    if (value && inputValue !== value) setInputValue(value?.toString());
  }, [value, inputValue]);
  return (
    <InputError>
      <Input
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          const isInputEmpty = handleValidateEmptyInput({ error, inputValue });
          setError(isInputEmpty);
          if (onBlur) {
            onBlur(e);
          }
        }}
        value={inputValue}
        {...rest}
      />
      <Error error={error} />
    </InputError>
  );
}
