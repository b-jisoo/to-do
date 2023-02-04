import { atom } from "recoil";

export interface IToDoItem {
  id: string;
  listId: string;
  title: string;
  contents: string;
  isComplete: boolean;
}

export interface TodoList {
  id: string;
  title: string;
  toDoItem: IToDoItem[];
}

export const todoListState = atom<TodoList[]>({
  key: "todoListState",
  default: [],
});
export const todoItemState = atom<IToDoItem[]>({
  key: "todoItemState",
  default: [],
});

export const SelectedListIdState = atom<string>({
  key: "activeListState",
  default: "",
});
