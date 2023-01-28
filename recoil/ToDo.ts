import { atom } from "recoil";

export interface IToDoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoList {
  id: string;
  title: string;
  toDoItem?: IToDoItem;
}
export const todoListState = atom<TodoList[]>({
  key: "todoListState",
  default: [],
});
