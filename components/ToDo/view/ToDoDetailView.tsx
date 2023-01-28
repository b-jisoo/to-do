import Checkbox from "@/components/Common/CheckBox";
import ModalBase from "@/components/Common/Modal";
import { flexCenter } from "@/styles/flex";
import { StyledButton } from "@/styles/StyledButton";
import React from "react";
import styled from "styled-components";
import AddToDoModal from "../AddToDoModal";
import { IToDoDetailViewProps } from "../types";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 0px 70px;
`;

const ToDoHeader = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  font-size: 23px;
  margin: 50px 0;
`;
const ToDoFooter = styled.div`
  ${flexCenter}
  justify-content: end;
  width: 100%;
  font-weight: bold;
  font-size: 23px;
  margin: 50px 0;
`;

const NewButton = styled(StyledButton)`
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;
const DeleteButton = styled(StyledButton)`
  background: #dc3545;
  &:hover {
    background: #bb2d3b;
  }
  &:active {
    background: #b02a37;
  }
`;
const Article = styled.article`
  ${flexCenter}
  justify-content: start;
  border-bottom: 1px solid #cecece;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

const ToDoDetailView = ({
  isOpen,
  todoList,
  handleModalOpen,
}: IToDoDetailViewProps) => {
  return (
    <Container>
      <ToDoHeader>
        <span>ToDos</span>
        <NewButton onClick={handleModalOpen}>New</NewButton>
      </ToDoHeader>
      <AddToDoModal />

      {/* 생성된 todo가 map으로 생성될 부분  */}

      {/* {todoList.map((todoItem) => (
        <ToDoItemView key={todoItem.id} todoItem={todoItem} />
      ))} */}

      <Article>
        <Checkbox
          text={
            "테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1"
          }
        />
      </Article>
      <ToDoFooter>
        <DeleteButton>Delete</DeleteButton>
      </ToDoFooter>
    </Container>
  );
};

export default ToDoDetailView;
