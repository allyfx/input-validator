import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <InputContainer {...props} />;
}
