import { atom } from "recoil";

export interface IToDoItem {
  id: string;
  title: string;
  contents: string;
  isComplete: boolean;
}

export interface TodoList {
  id: string;
  title: string;
  toDoItem?: IToDoItem[];
}

export const todoListState = atom<TodoList[]>({
  key: "todoListState",
  default: [],
});
export const todoItemState = atom<IToDoItem[]>({
  key: "todoItemState",
  default: [],
});

// {
//   TodoList:
// [
//     id: string;
//     title: string;
//     toDoItem?: {
//       id: number;
//       title: string;
//      contents:string
//       isComplete: boolean;
//     },
//     id: string;
//     title: string;
//     toDoItem?: {
//       id: number;
//       title: string;
//      contents:string
//       isComplete: boolean;
//     };
// ]
//
// }
