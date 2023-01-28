import { IsAddToDoModalState } from "@/recoil/Modal";
import { todoListState } from "@/recoil/ToDo";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/ToDoDetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const todoList = useRecoilValue(todoListState);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    isOpen,
    todoList,
    handleModalOpen,
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
