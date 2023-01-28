import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ITodoListViewProps } from "../types";
import AddToDoListModal from "../AddToDoListModal";

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

const TodoListView = ({
  ToDo,
  isOpen,
  onAddToDoListModalOpen,
}: ITodoListViewProps) => {
  return (
    <Container>
      <ButtonContainer>
        <Image
          src="/addFolder.png"
          alt="addfolder"
          width="20"
          height="20"
          onClick={onAddToDoListModalOpen}
        />
      </ButtonContainer>
      <Wrap>
        {ToDo.map((todoList, index) => (
          <List key={todoList.id}>{`${todoList.title} `}</List>
        ))}
      </Wrap>
      <AddToDoListModal />
    </Container>
  );
};

export default TodoListView;
