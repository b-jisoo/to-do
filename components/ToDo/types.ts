import { TodoList } from "@/recoil/ToDo";

export interface IToDoDetailViewProps {
  isOpen: boolean;
  todoList: TodoList[];
  handleModalOpen: () => void;
}
export interface IAddToDoModalProps {
  isOpen: boolean;
  toDoData: { title: string; content: string };
  onCloseModal: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IAddToDoModalListProps {
  isOpen: boolean;
  title: string;
  onCloseModal: () => void;
  onAddToDoList: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoListViewProps {
  ToDo: TodoList[];
  isOpen: boolean;
  onAddToDoListModalOpen: () => void;
}
export interface IToDoItemViewProps {
  todoItem: TodoList;
}
