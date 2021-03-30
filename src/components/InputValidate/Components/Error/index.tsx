import { ErrorContainer } from "./styles";
import { IError } from "../../Types/IError";

interface IErrorProps {
  error: IError;
  className?: string;
}

export function Error({ error, className }: IErrorProps) {
  if (error.error) {
    return (
      <ErrorContainer className={className}>
        <label>{error.errorMessage}</label>
      </ErrorContainer>
    );
  }
  return null;
}
