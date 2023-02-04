import {
  SelectedListIdState,
  todoItemState,
  todoListState,
} from "@/recoil/ToDo";
import React from "react";
import { useRecoilValue } from "recoil";
import EmptyComponent from "../Common/Empty";
import { ITodoItemViewProps } from "./types";
import ToDoItemView from "./view/ItemView";

const ToDoItem = () => {
  const todoList = useRecoilValue(todoListState);
  const listId = useRecoilValue(SelectedListIdState);
  const todoItem = useRecoilValue(todoItemState);

  if (todoList.length === 0) {
    return <EmptyComponent text={"ToDo 목록이 존재하지 않습니다."} />;
  }
  if (todoItem.length === 0) {
    return <EmptyComponent text={"ToDo가 존재하지 않습니다."} />;
  }
  let filteredItem = todoItem.filter((item) => item.listId === listId);

  const TodoItemViewProps: ITodoItemViewProps = {
    filteredItem,
  };

  return <ToDoItemView {...TodoItemViewProps} />;
};

export default ToDoItem;
