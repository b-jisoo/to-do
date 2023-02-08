import { useSession } from "next-auth/react";
import React from "react";
import ToDoLayoutView from "./view/LayoutView";

const TodoLayout = () => {
  return <ToDoLayoutView />;
};

export default TodoLayout;
