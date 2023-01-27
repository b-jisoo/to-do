import { SyntheticEvent } from "react";

export interface ILoginProps {
  inputs: {
    email: string;
    password: string;
  };
  validData: {
    isEmailValid: boolean;
    isPasswordValid: boolean;
  };
  isNotEnterPassword: boolean;
  isNotEnterEmail: boolean;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SyntheticEvent) => void;
}
