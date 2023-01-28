import { IsAddToDoModalListState, IsAddToDoModalState } from "@/recoil/Modal";
import { todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ITodoListViewProps } from "./types";
import TodoListView from "./view/TodoListView";

const TodoList = () => {
  const ToDo = useRecoilValue(todoListState);
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalListState);

  const onAddToDoListModalOpen = () => {
    setIsOpen(true);
  };

  const TodoListViewProps: ITodoListViewProps = {
    ToDo,
    isOpen,
    onAddToDoListModalOpen,
  };
  return <TodoListView {...TodoListViewProps} />;
};

export default TodoList;
