import { IToDoItem, TodoList } from "@/recoil/ToDo";
import { UserAccount } from "@/recoil/user";

export interface IToDoListItemProps {
  todoList: TodoList;
}
export interface IToDoItemProps {
  todoItem: IToDoItem[];
}
export interface IToDoListItemViewProps {
  todoList: TodoList;
  activeList: string;
  onDeleteToDoList: (id: string) => void;
  onActiveList: (id: string) => void;
}
export interface IToDoDetailViewProps {
  onModalOpen: () => void;
  onDelteToDo: () => void;
}

export interface ITodoListViewProps {
  ToDo: TodoList[];
  isOpen: boolean;
  auth: UserAccount | null;
  onAddToDoListModalOpen: () => void;
}
export interface ITodoItemViewProps {
  filteredItem: IToDoItem[];
}
export interface IEmptyProps {
  text: string;
}
