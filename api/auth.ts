import { signIn } from "next-auth/react";
import { IUserInfo } from "./types";

const AuthAPI = {
  login: (inputs: IUserInfo) => {
    signIn("credentials", {
      email: inputs.email,
      password: inputs.password,
      callbackUrl: "http://localhost:3000",
    });
  },
};

export default AuthAPI;
