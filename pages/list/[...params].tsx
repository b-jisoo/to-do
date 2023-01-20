import { TParams } from "@/types/ToDoList";
import { useRouter } from "next/router";
import React from "react";

const ToDoList = () => {
  const router = useRouter();
  const [id] = (router.query.params || []) as TParams;

  return <div>ToDoList</div>;
};

export default ToDoList;
