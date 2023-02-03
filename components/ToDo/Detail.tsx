import { IsAddToDoModalState } from "@/recoil/Modal";
import { activeListState, todoItemState, todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/DetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const todoList = useRecoilValue(todoListState);

  const handleModalOpen = () => {
    if (todoList.length === 0) {
      alert("ToDo 목록을 먼저 생성해주세요.");
    } else {
      setIsOpen(true);
    }
  };

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    handleModalOpen,
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
