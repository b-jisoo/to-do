import { IToDoItem, TodoList } from "@/recoil/ToDo";

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
  onDelteToDo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ITodoListViewProps {
  ToDo: TodoList[];
  isOpen: boolean;
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: string;
  } | null;
  onAddToDoListModalOpen: () => void;
}
export interface ITodoItemViewProps {
  filteredItem: IToDoItem[];
}
export interface IEmptyProps {
  text: string;
}
