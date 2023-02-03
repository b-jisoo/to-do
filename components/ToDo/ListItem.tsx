import { activeListState, todoListState } from "@/recoil/ToDo";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IToDoListItemProps, IToDoListItemViewProps } from "./types";
import ListItemView from "./view/ListItemView";

const ListItem = ({ todoList }: IToDoListItemProps) => {
  const [ToDo, setToDo] = useRecoilState(todoListState);
  const [activeList, setActiveList] = useRecoilState(activeListState);

  if (!todoList) {
    return null;
  }
  const onActiveList = (id: string) => {
    setActiveList(id);
  };

  const onDeleteToDoList = (id: string) => {
    const removeItem = ToDo.filter((todo) => todo.id !== id);
    setToDo(removeItem);
  };
  const ToDoListItemView: IToDoListItemViewProps = {
    todoList,
    activeList,
    onDeleteToDoList,
    onActiveList,
  };

  return <ListItemView {...ToDoListItemView} />;
};

export default ListItem;
