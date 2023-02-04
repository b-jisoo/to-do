import {
  SelectedListIdState,
  todoItemState,
  todoListState,
} from "@/recoil/ToDo";
import React from "react";
import { useRecoilState } from "recoil";
import { IToDoListItemProps, IToDoListItemViewProps } from "./types";
import ListItemView from "./view/ListItemView";

const ListItem = ({ todoList }: IToDoListItemProps) => {
  const [toDoItem, setToDoItem] = useRecoilState(todoItemState);
  const [toDoList, setToDoList] = useRecoilState(todoListState);
  const [activeList, setActiveList] = useRecoilState(SelectedListIdState);

  if (!todoList) {
    return null;
  }
  const onActiveList = (id: string) => {
    setActiveList(id);
  };

  const onDeleteToDoList = (id: string) => {
    const removeTodoList = toDoList.filter((list) => list.id !== id);
    const removeTodoItem = toDoItem.filter((item) => item.listId !== id);
    setToDoList(removeTodoList);
    setToDoItem(removeTodoItem);
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
