import { IsAddToDoModalState } from "@/recoil/states";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/ToDoDetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    isOpen,
    handleModalOpen,
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
