import { atom } from "recoil";

export const IsAddToDoModalState = atom({
  key: "IsAddToDoModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const IsAddToDoModalListState = atom({
  key: "IsAddToDoModalListState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
