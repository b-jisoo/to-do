import useToDoActions from "@/actions/todo";
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

  if (!todoList) return null;

  const ToDoListItemView: IToDoListItemViewProps = {
    todoList,
    activeList,
    onDeleteToDoList: (id) => ToDo.deleteList(id),
    onActiveList: (id) => setActiveList(id),
  };

  return <ListItemView {...ToDoListItemView} />;
};

export default ListItem;
