import { atom } from "recoil";

export interface UserAccount {
  email: string;
  password: string;
}

export const userAccountState = atom<UserAccount[]>({
  key: "userAccountState",
  default: [],
});

export const authState = atom<UserAccount | null>({
  key: "authState",
  default: null,
});
