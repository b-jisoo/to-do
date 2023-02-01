import { IToDoItem, TodoList } from "@/recoil/ToDo";

export interface IToDoListItemProps {
  todoList: TodoList;
}
export interface IToDoListItemViewProps {
  todoList: TodoList;
  activeList: string;
  onDeleteToDoList: (id: string) => void;
  onActiveList: (id: string) => void;
}
export interface IToDoDetailViewProps {
  handleModalOpen: () => void;
}

export interface ITodoListViewProps {
  ToDo: TodoList[];
  isOpen: boolean;
  onAddToDoListModalOpen: () => void;
}
export interface ITodoItemViewProps {
  todoItem: IToDoItem[];
  todoList: TodoList[];
}
export interface IEmptyProps {
  text: string;
}
