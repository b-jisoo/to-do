import { atom } from "recoil";

export interface IToDoItem {
  id: string;
  listId: string;
  title: string;
  contents: string;
  isComplete: boolean;
}
export interface ICopyToDoItem {
  id?: string;
  title?: string;
  toDoItem?: IToDoItem[];
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
export const TodoListCopyState = atom<ICopyToDoItem[]>({
  key: "TodoListCopyState",
  default: [],
});
export const activeListState = atom<string>({
  key: "activeListState",
  default: "",
});
