import useToDoActions from "@/action/todo.actions";
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
  const [activeList, setActiveList] = useRecoilState(SelectedListIdState);
  const ToDo = useToDoActions();

  if (!todoList) {
    return null;
  }
  const onActiveList = (id: string) => {
    setActiveList(id);
  };

  const onDeleteToDoList = (id: string) => {
    ToDo.deleteList(id);
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
