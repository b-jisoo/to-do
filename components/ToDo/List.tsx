import { IsAddToDoModalListState } from "@/recoil/Modal";
import { todoListState } from "@/recoil/ToDo";
import { authState } from "@/recoil/user";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ITodoListViewProps } from "./types";
import TodoListView from "./view/ListView";

const TodoList = () => {
  const [ToDo, setToDo] = useRecoilState(todoListState);
  const [isOpen, setIsOpen] = useRecoilState(IsAddToDoModalListState);
  const auth = useRecoilValue(authState);

  const onAddToDoListModalOpen = () => {
    setIsOpen(true);
  };

  const TodoListViewProps: ITodoListViewProps = {
    ToDo,
    isOpen,
    onAddToDoListModalOpen,
    auth,
  };
  return <TodoListView {...TodoListViewProps} />;
};

export default TodoList;
