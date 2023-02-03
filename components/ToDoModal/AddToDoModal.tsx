import { IsAddToDoModalState } from "@/recoil/Modal";
import { activeListState, todoItemState } from "@/recoil/ToDo";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IAddToDoModalProps } from "./type";
import AddToDoModalView from "./View/AddToDoModalView";

const AddToDoModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);
  const [activeList, setActiveList] = useRecoilState(activeListState);

  const [toDoInputs, setToDoInputs] = useState({
    title: "",
    contents: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoInputs((p) => ({ ...p, title: e.target.value }));
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoInputs((p) => ({ ...p, contents: e.target.value }));
  };
  const todoItemInputValue = {
    id: uuidv4(),
    listId: activeList,
    title: toDoInputs.title,
    contents: toDoInputs.contents,
    isComplete: true,
  };

  const onAddToDoItem = () => {
    setTodoItem((oldTodoItem) => [...oldTodoItem, todoItemInputValue]);

    setToDoInputs({
      title: "",
      contents: "",
    });
    setIsOpen(false);
  };

  // closeModal + reset
  const onCloseModal = () => {
    if (confirm("정말 닫으시겠습니까?")) {
      setToDoInputs({
        title: "",
        contents: "",
      });
      setIsOpen(false);
    }
  };

  const AddToDoModalProps: IAddToDoModalProps = {
    isOpen,
    onCloseModal,
    onChangeTitle,
    onChangeContent,
    onAddToDoItem,
    toDoData: toDoInputs,
  };

  return <AddToDoModalView {...AddToDoModalProps} />;
};

export default AddToDoModal;
