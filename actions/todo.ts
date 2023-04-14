import {
  IToDoItem,
  SelectedListIdState,
  todoItemState,
  TodoList,
  todoListState,
} from "@/recoil/ToDo";
import { useMemo } from "react";
import { useRecoilState } from "recoil";

const useToDoActions = () => {
  const [toDoItem, setToDoItem] = useRecoilState(todoItemState);
  const [TodoList, setTodoList] = useRecoilState(todoListState);
  const ToDoActions = useMemo(
    () => ({
      getItem: () => {
        return toDoItem;
      },
      addItem: (todoItemInputs: IToDoItem) => {
        setToDoItem((oldTodoItem) => [...oldTodoItem, todoItemInputs]);
      },
      deleteItem: () => {
        const newTodoItem = toDoItem.filter(
          (item) => item.isComplete === false
        );
        setToDoItem(newTodoItem);
      },
      getList: () => {
        return TodoList;
      },
      addList: (todoListInputs: TodoList) => {
        setTodoList((oldTodoList) => [...oldTodoList, todoListInputs]);
      },
      deleteList: (id: string) => {
        const removeTodoList = TodoList.filter((list) => list.id !== id);
        const removeTodoItem = toDoItem.filter((item) => item.listId !== id);
        setTodoList(removeTodoList);
        setToDoItem(removeTodoItem);
      },
    }),
    [toDoItem, setToDoItem, TodoList, setTodoList]
  );

  return ToDoActions;
};

export default useToDoActions;
