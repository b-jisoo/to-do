import { IsAddToDoModalState } from "@/recoil/Modal";
import { todoItemState } from "@/recoil/ToDo";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IAddToDoModalProps } from "./type";
import AddToDoModalView from "./View/AddToDoModalView";

const AddToDoModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);
  const [toDoData, setToDoData] = useState({
    title: "",
    contents: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData((p) => ({ ...p, title: e.target.value }));
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData((p) => ({ ...p, contents: e.target.value }));
  };
  const onAddToDoItem = () => {
    setTodoItem((oldTodoItem) => [
      ...oldTodoItem,
      {
        id: uuidv4(),
        title: toDoData.title,
        contents: toDoData.contents,
        isComplete: true,
      },
    ]);
    setToDoData({
      title: "",
      contents: "",
    });
    setIsOpen(false);
  };

  const onCloseModal = () => {
    if (confirm("정말 닫으시겠습니까?")) {
      setToDoData({
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
    toDoData,
  };

  return <AddToDoModalView {...AddToDoModalProps} />;
};

export default AddToDoModal;
