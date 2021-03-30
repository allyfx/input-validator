import { IError } from "../Types/IError";

interface IValidateEmptyInputProps {
  error: IError;
  inputValue: string;
}

export function handleValidateEmptyInput({
  error,
  inputValue
}: IValidateEmptyInputProps): IError {
  let newError = error;
  if (inputValue.length <= 0) {
    newError = {
      error: true,
      errorMessage: "Campo obrigatório"
    };
  } else if (error.error) {
    newError = {
      error: false,
      errorMessage: ""
    };
  }
  return newError;
}
