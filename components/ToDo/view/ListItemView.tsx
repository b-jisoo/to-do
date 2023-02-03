import styled from "@emotion/styled";
import React from "react";
import { IToDoListItemViewProps } from "../types";

const Wrap = styled.ul<{ id: string; active: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 0.5em;
  margin-top: 3px;
  background-color: ${({ id, active }) => (id === active ? "#cecece" : null)};

  :hover {
    background-color: #cecece;
  }
  div {
    padding: 10px;
    color: #fafafa;
    :hover {
      color: #666666;
    }
  }
`;

const List = styled.li`
  font-weight: 600;
  padding: 10px 30px;
  font-size: 20px;
`;

const ListItemView = ({
  todoList,
  activeList,
  onActiveList,
  onDeleteToDoList,
}: IToDoListItemViewProps) => {
  return (
    <Wrap
      id={todoList.id}
      active={activeList}
      onClick={() => onActiveList(todoList.id)}
    >
      <List key={todoList.id}>{`${todoList.title}`}</List>
      <div onClick={() => onDeleteToDoList(todoList.id)}>x</div>
    </Wrap>
  );
};

export default ListItemView;
