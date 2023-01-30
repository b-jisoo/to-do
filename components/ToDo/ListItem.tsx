import { todoListState } from "@/recoil/ToDo";
import React from "react";
import { useRecoilState } from "recoil";
import { IToDoListItemProps, IToDoListItemViewProps } from "./types";
import ListItemView from "./view/ListItemView";

const ListItem = ({ todoList }: IToDoListItemProps) => {
  const [ToDo, setToDo] = useRecoilState(todoListState);

  if (!todoList) {
    return null;
  }

  const onDeleteToDoList = (id: string) => {
    const removeItem = ToDo.filter((todo) => todo.id !== id);
    setToDo(removeItem);
  };
  const ToDoListItemView: IToDoListItemViewProps = {
    todoList,
    onDeleteToDoList,
  };

  return <ListItemView {...ToDoListItemView} />;
};

export default ListItem;
