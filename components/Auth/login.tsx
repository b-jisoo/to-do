import useUserAction from "@/actions/user";
import React, { SyntheticEvent, useState } from "react";
import { emailValidator, passwordValidator } from "../../utils/validator";
import { ILoginProps } from "./types";
import LoginView from "./view/LoginView";

const Login = () => {
  const user = useUserAction();
  const [inputs, setInputs] = useState({
    email: "testuser@email.com",
    password: "12341234",
  });
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const isNotEnterEmail = inputs.email.length === 0;
  const isNotEnterPassword = inputs.password.length === 0;

  const LoginProps: ILoginProps = {
    inputs,
    onChangeEmail: (e) => {
      emailValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isEmailValid: true }))
        : setValidData((p) => ({ ...p, isEmailValid: false }));
      setInputs((p) => ({ ...p, email: e.target.value }));
    },
    onChangePassword: (e) => {
      passwordValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isPasswordValid: true }))
        : setValidData((p) => ({ ...p, isPasswordValid: false }));
      setInputs((p) => ({ ...p, password: e.target.value }));
    },
    onLogin: (e) => {
      e.preventDefault();
      user.login(inputs);
    },
    isNotEnterPassword,
    isNotEnterEmail,
    validData,
  };

  return <LoginView {...LoginProps} />;
};

export default Login;
