export interface IToDoDetailViewProps {
  isOpen: boolean;
  handleModalOpen: () => void;
}
export interface IAddToDoModalProps {
  isOpen: boolean;
  toDoData: { title: string; content: string };
  onCloseModal: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
