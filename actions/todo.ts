import {
  IToDoItem,
  SelectedListIdState,
  todoItemState,
  TodoList,
  todoListState,
} from "@/recoil/ToDo";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

const useToDoActions = () => {
  const [toDoItem, setToDoItem] = useRecoilState(todoItemState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const getItem = useCallback(() => toDoItem, [toDoItem]);
  const addItem = useCallback(
    (todoItemInputs: IToDoItem) => {
      setToDoItem((prevTodoItem) => [...prevTodoItem, todoItemInputs]);
    },
    [setToDoItem]
  );
  const deleteItem = useCallback(() => {
    const newTodoItem = toDoItem.filter((item) => !item.isComplete);
    setToDoItem(newTodoItem);
  }, [toDoItem, setToDoItem]);
  const getList = useCallback(() => todoList, [todoList]);
  const addList = useCallback(
    (todoListInputs: TodoList) => {
      setTodoList((prevTodoList) => [...prevTodoList, todoListInputs]);
    },
    [setTodoList]
  );
  const deleteList = useCallback(
    (id: string) => {
      setTodoList((prevTodoList) =>
        prevTodoList.filter((list) => list.id !== id)
      );
      setToDoItem((prevTodoItem) =>
        prevTodoItem.filter((item) => item.listId !== id)
      );
    },
    [setTodoList, setToDoItem]
  );

  return useMemo(
    () => ({
      getItem,
      addItem,
      deleteItem,
      getList,
      addList,
      deleteList,
    }),
    [getItem, addItem, deleteItem, getList, addList, deleteList]
  );
};

export default useToDoActions;
