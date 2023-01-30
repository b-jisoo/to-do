export interface IAddToDoModalProps {
  isOpen: boolean;
  toDoData: { title: string; contents: string };
  onAddToDoItem: () => void;
  onCloseModal: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IAddToDoListModalProps {
  isOpen: boolean;
  title: string;
  onCloseModal: () => void;
  onAddToDoList: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
