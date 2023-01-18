import React, { useState } from "react";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/ToDoDetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    if (confirm("정말 닫으시겠습니까?")) {
      setIsOpen(false);
    }
  };

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    isOpen,
    handleModalOpen,
    handleModalClose,
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
