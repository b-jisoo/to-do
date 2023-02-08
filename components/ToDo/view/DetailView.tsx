import { flexCenter } from "@/styles/flex";
import styled from "styled-components";
import { StyledButton } from "@/styles/StyledButton";
import React from "react";
import { IToDoDetailViewProps } from "../types";
import ToDoItem from "../Item";
import AddToDoModal from "@/components/ToDoModal/AddToDoModal";

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

const ToDoDetailView = ({ onModalOpen, onDelteToDo }: IToDoDetailViewProps) => {
  return (
    <Container>
      <ToDoHeader>
        <span>ToDos</span>
        <NewButton onClick={onModalOpen}>New</NewButton>
      </ToDoHeader>
      <AddToDoModal />
      <ToDoItem />
      <ToDoFooter>
        <DeleteButton onClick={onDelteToDo}>Delete</DeleteButton>
      </ToDoFooter>
    </Container>
  );
};

export default ToDoDetailView;
