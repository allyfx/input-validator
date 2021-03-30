import { ReactNode } from "react";
import { InputErrorContainer } from "./styles";

interface IInputErrorProps {
  children: ReactNode;
}

export function InputError({ children }: IInputErrorProps) {
  return (
    <InputErrorContainer className="inputErrorContainer">
      {children}
    </InputErrorContainer>
  );
}
