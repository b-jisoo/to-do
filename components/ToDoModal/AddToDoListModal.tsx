import { IsAddToDoModalListState } from "@/recoil/Modal";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { SelectedListIdState, todoListState } from "@/recoil/ToDo";
import AddToDoListModalView from "./View/AddToDoListModalView";
import { IAddToDoListModalProps } from "./type";
import useToDoActions from "@/actions/todo";

const AddToDoListModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalListState);
  const [title, setTitle] = useState("");
  const [activeList, setActiveList] = useRecoilState(SelectedListIdState);
  const ToDo = useToDoActions();
  const TodoList = ToDo.getList();
  const todoListInputs = {
    id: uuidv4(),
    title,
    toDoItem: [],
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAddToDoList = () => {
    if (title.length === 0) {
      alert("최소 1글자 이상 입력해주세요");
    } else {
      ToDo.addList(todoListInputs);
      setIsOpen(false);
      setTitle("");
    }
  };
  if (TodoList.length === 1) setActiveList(TodoList[0].id);

  const onCloseModal = () => {
    setTitle("");
    setIsOpen(false);
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
