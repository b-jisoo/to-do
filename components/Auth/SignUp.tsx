import useUserAction from "@/actions/user";
import { emailValidator, passwordValidator } from "@/utils/validator";
import React, { SyntheticEvent, useState } from "react";
import { ISignUpProps } from "./types";
import SignUpView from "./view/SignUpView";

const SignUp = () => {
  const user = useUserAction();
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

  const onSignUp = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(user.EmailCheck(inputs.email));
    if (user.EmailCheck(inputs.email)) {
      alert("중복된 아이디 입니다.");
    } else {
      user.singUp(inputs);
    }
  };
  const signUpProps: ISignUpProps = {
    inputs,
    onChangeEmail,
    onChangePassword,
    onSignUp,
    isNotEnterPassword,
    isNotEnterEmail,
    validData,
  };

  return <SignUpView {...signUpProps} />;
};

export default SignUp;
