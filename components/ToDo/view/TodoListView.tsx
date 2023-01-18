import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  min-width: 300px;
  min-height: 100vh;
  background-color: #fafafa;
`;
const Wrap = styled.div`
  margin-top: 50px;
`;

const List = styled.div`
  font-weight: 600;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 0.5em;
  cursor: pointer;
  :hover {
    background-color: #cecece;
  }
`;

const TodoListView = () => {
  return (
    <Container>
      <Wrap>
        <List>테스트1</List>
        <List>Test 2</List>
        <List>테스트 3</List>
        <List>Test4</List>
        <List>테스트5</List>
      </Wrap>
    </Container>
  );
};

export default TodoListView;
