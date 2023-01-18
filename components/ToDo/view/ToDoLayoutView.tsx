import { flexCenter } from "@/styles/flex";
import React from "react";
import styled from "styled-components";
import ToDoDetail from "../ToDoDetail";
import TodoList from "../todoList";

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  min-width: 850px;
`;

const Content = styled.div`
  ${flexCenter}
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const ToDoLayoutView = () => {
  return (
    <Container id="ToDo">
      <Content>
        <TodoList />
        <ToDoDetail />
      </Content>
    </Container>
  );
};

export default ToDoLayoutView;
