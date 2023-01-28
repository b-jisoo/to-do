import { IsAddToDoModalState } from "@/recoil/Modal";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IAddToDoModalProps } from "./types";
import AddToDoModalView from "./view/AddToDoModalView";

const AddToDoModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const [toDoData, setToDoData] = useState({
    title: "",
    content: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData((p) => ({ ...p, title: e.target.value }));
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData((p) => ({ ...p, content: e.target.value }));
  };

  const onCloseModal = () => {
    if (confirm("정말 닫으시겠습니까?")) {
      setToDoData({
        title: "",
        content: "",
      });
      setIsOpen(false);
    }
  };

  const AddToDoModalProps: IAddToDoModalProps = {
    isOpen,
    onCloseModal,
    onChangeTitle,
    onChangeContent,
    toDoData,
  };

  return <AddToDoModalView {...AddToDoModalProps} />;
};

export default AddToDoModal;
