import useUserAction from "@/actions/user";
import { emailValidator, passwordValidator } from "@/utils/validator";
import React, { SyntheticEvent, useState } from "react";
import { ISignUpProps } from "./types";
import SignUpView from "./view/SignUpView";

const SignUp = () => {
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

  const signUpProps: ISignUpProps = {
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
    onSignUp: (e) => {
      e.preventDefault();
      if (user.EmailCheck(inputs.email)) {
        alert("중복된 아이디 입니다.");
      } else {
        user.singUp(inputs);
      }
    },
    isNotEnterPassword,
    isNotEnterEmail,
    validData,
  };

  return <SignUpView {...signUpProps} />;
};

export default SignUp;
