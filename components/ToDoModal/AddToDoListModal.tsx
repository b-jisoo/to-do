import { IsAddToDoModalListState } from "@/recoil/Modal";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { todoListState } from "@/recoil/ToDo";
import AddToDoListModalView from "./View/AddToDoListModalView";
import { IAddToDoListModalProps } from "./type";

const AddToDoListModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalListState);
  const [TodoList, setTodoList] = useRecoilState(todoListState);

  const [title, setTitle] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAddToDoList = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuidv4(),
        title,
      },
    ]);
    setTitle("");
    setIsOpen(false);
  };

  const onCloseModal = () => {
    if (confirm("정말 닫으시겠습니까?")) {
      setTitle("");
      setIsOpen(false);
    }
  };

  const AddToDoListModalProps: IAddToDoListModalProps = {
    isOpen,
    title: title,
    onCloseModal,
    onChangeTitle,
    onAddToDoList,
  };

  return <AddToDoListModalView {...AddToDoListModalProps} />;
};

export default AddToDoListModal;
