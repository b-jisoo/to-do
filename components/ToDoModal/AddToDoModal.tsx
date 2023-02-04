import { IsAddToDoModalState } from "@/recoil/Modal";
import { SelectedListIdState, todoItemState } from "@/recoil/ToDo";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IAddToDoModalProps } from "./type";
import AddToDoModalView from "./View/AddToDoModalView";

const AddToDoModal = () => {
  const [toDoInputs, setToDoInputs] = useState({ title: "", contents: "" });
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);
  const listId = useRecoilValue(SelectedListIdState);

  const todoItemInputValue = {
    id: uuidv4(),
    listId,
    title: toDoInputs.title,
    contents: toDoInputs.contents,
    isComplete: false,
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoInputs((p) => ({ ...p, title: e.target.value }));
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoInputs((p) => ({ ...p, contents: e.target.value }));
  };

  const onAddToDoItem = () => {
    setTodoItem((oldTodoItem) => [...oldTodoItem, todoItemInputValue]);
    setToDoInputs({ title: "", contents: "" });
    setIsOpen(false);
  };

  const onCloseModal = () => {
    setToDoInputs({ title: "", contents: "" });
    setIsOpen(false);
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
