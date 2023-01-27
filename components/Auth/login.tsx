import AuthAPI from "@/api/auth";
import { signIn } from "next-auth/react";
import React, { SyntheticEvent, useState } from "react";
import { emailValidator, passwordValidator } from "../util/validator";
import { ILoginProps } from "./types";
import LoginView from "./view/LoginView";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const isNotEnterEmail = inputs.email.length === 0;
  const isNotEnterPassword = inputs.password.length === 0;

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailValidator(e.target.value)
      ? setValidData((p) => ({ ...p, isEmailValid: true }))
      : setValidData((p) => ({ ...p, isEmailValid: false }));
    setInputs((p) => ({ ...p, email: e.target.value }));
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordValidator(e.target.value)
      ? setValidData((p) => ({ ...p, isPasswordValid: true }))
      : setValidData((p) => ({ ...p, isPasswordValid: false }));
    setInputs((p) => ({ ...p, password: e.target.value }));
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    AuthAPI.login(inputs);
  };

  const LoginProps: ILoginProps = {
    inputs,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isNotEnterPassword,
    isNotEnterEmail,
    validData,
  };

  return <LoginView {...LoginProps} />;
};

export default Login;
