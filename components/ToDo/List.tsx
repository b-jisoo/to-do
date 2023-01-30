import { IsAddToDoModalListState, IsAddToDoModalState } from "@/recoil/Modal";
import { todoListState } from "@/recoil/ToDo";
import React, { SyntheticEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ITodoListViewProps } from "./types";
import TodoListView from "./view/ListView";

const TodoList = () => {
  const [ToDo, setToDo] = useRecoilState(todoListState);
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
