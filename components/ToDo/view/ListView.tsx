import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ITodoListViewProps } from "../types";
import AddToDoListModal from "@/components/ToDoModal/AddToDoListModal";
import ListItem from "../ListItem";

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
  margin-bottom: 20px;

  img {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const TodoListView = ({
  ToDo,
  onAddToDoListModalOpen,
  auth,
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
      <AddToDoListModal />
      <div>
        {ToDo.map((todoList, index) => (
          <ListItem todoList={todoList} key={todoList.id} />
        ))}
      </div>
    </Container>
  );
};

export default TodoListView;
