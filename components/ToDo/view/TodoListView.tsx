import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  min-width: 300px;
  min-height: 100vh;
  background-color: #fafafa;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;

  img {
    cursor: pointer;
    margin-left: 10px;
  }
`;
const Wrap = styled.div`
  margin-top: 20px;
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
      <ButtonContainer>
        <Image src="/addFolder.png" alt="addfolder" width="20" height="20" />
        <Image
          src="/deleteFolder.png"
          alt="deletefolder"
          width="20"
          height="20"
        />
      </ButtonContainer>
      <Wrap>
        <List>테스트1 (4/4)</List>
        <List>Test 2</List>
        <List>테스트 3</List>
        <List>Test4</List>
        <List>테스트5</List>
      </Wrap>
    </Container>
  );
};

export default TodoListView;
