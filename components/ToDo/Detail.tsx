import { IsAddToDoModalState } from "@/recoil/Modal";
import { todoItemState, todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/DetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const todoList = useRecoilValue(todoListState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);

  const onModalOpen = () => {
    if (todoList.length === 0) {
      alert("ToDo 목록을 먼저 생성해주세요.");
    } else {
      setIsOpen(true);
    }
  };

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodoItem = todoItem.filter((item) => item.isComplete === false);
    setTodoItem(newTodoItem);
  };

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    onModalOpen,
    onClickButton,
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
