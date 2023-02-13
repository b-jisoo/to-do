import { SyntheticEvent } from "react";

interface IAuthForm {
  inputs: { email: string; password: string };
  validData: { isEmailValid: boolean; isPasswordValid: boolean };
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNotEnterPassword: boolean;
  isNotEnterEmail: boolean;
}

export interface ILoginProps extends IAuthForm {
  onLogin: (e: SyntheticEvent) => void;
}
export interface ISignUpProps extends IAuthForm {
  onSignUp: (e: SyntheticEvent) => void;
}
