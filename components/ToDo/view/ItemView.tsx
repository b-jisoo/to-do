import React from "react";
import Checkbox from "@/components/Common/CheckBox";
import { flexCenter } from "@/styles/flex";
import styled from "styled-components";
import { ITodoItemViewProps } from "../types";

const Article = styled.article`
  ${flexCenter}
  justify-content: start;
  border-bottom: 1px solid #cecece;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

const ToDoItemView = ({ filteredItem }: ITodoItemViewProps) => {
  return (
    <>
      {filteredItem.map((todoItem) => (
        <Article key={todoItem.id}>
          <Checkbox
            title={todoItem.title}
            contents={todoItem.contents}
            id={todoItem.id}
          />
        </Article>
      ))}
    </>
  );
};

export default ToDoItemView;
