import useToDoActions from "@/actions/todo";
import { IsAddToDoModalState } from "@/recoil/Modal";
import { todoItemState, todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDoDetailViewProps } from "./types";
import ToDoDetailView from "./view/DetailView";

const ToDoDetail = () => {
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalState);
  const todoList = useRecoilValue(todoListState);
  const Todo = useToDoActions();

  const ToDoDetailViewProps: IToDoDetailViewProps = {
    onModalOpen: () => {
      if (todoList.length === 0) alert("ToDo 목록을 먼저 생성해주세요.");
      else setIsOpen(true);
    },
    onDelteToDo: () => Todo.deleteItem(),
  };

  return <ToDoDetailView {...ToDoDetailViewProps} />;
};

export default ToDoDetail;
