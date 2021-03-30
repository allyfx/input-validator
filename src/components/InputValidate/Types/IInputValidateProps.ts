import { InputHTMLAttributes } from "react";

export interface IInputValidateProps
  extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
}
