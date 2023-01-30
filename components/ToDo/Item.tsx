import { todoItemState, todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import EmptyComponent from "../Common/Empty";
import { ITodoItemViewProps } from "./types";
import ToDoItemView from "./view/ItemView";

const ToDoItem = () => {
  const todoList = useRecoilValue(todoListState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);

  if (todoList.length === 0) {
    return <EmptyComponent text={"ToDo 목록이 존재하지 않습니다."} />;
  }
  if (todoItem.length === 0) {
    return <EmptyComponent text={"ToDo가 존재하지 않습니다."} />;
  }

  const TodoItemViewProps: ITodoItemViewProps = {
    todoItem,
    todoList,
  };

  return <ToDoItemView {...TodoItemViewProps} />;
};

export default ToDoItem;
