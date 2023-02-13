import {
  IToDoItem,
  SelectedListIdState,
  todoItemState,
  TodoList,
  todoListState,
} from "@/recoil/ToDo";
import { useRecoilState, useRecoilValue } from "recoil";

const useToDoActions = () => {
  const [toDoItem, setToDoItem] = useRecoilState(todoItemState);
  const [TodoList, setTodoList] = useRecoilState(todoListState);
  const listId = useRecoilValue(SelectedListIdState);

  const getItem = () => {
    return toDoItem;
  };

  const addItem = (todoItemInputs: IToDoItem) => {
    setToDoItem((oldTodoItem) => [...oldTodoItem, todoItemInputs]);
  };

  const deleteItem = () => {
    const newTodoItem = toDoItem.filter((item) => item.isComplete === false);
    setToDoItem(newTodoItem);
  };

  const getList = () => {
    return TodoList;
  };
  const addList = (todoListInputs: TodoList) => {
    setTodoList((oldTodoList) => [...oldTodoList, todoListInputs]);
  };
  const deleteList = (id: string) => {
    const removeTodoList = TodoList.filter((list) => list.id !== id);
    const removeTodoItem = toDoItem.filter((item) => item.listId !== id);
    setTodoList(removeTodoList);
    setToDoItem(removeTodoItem);
  };

  return {
    getItem,
    addItem,
    deleteItem,
    getList,
    addList,
    deleteList,
  };
};

export default useToDoActions;
