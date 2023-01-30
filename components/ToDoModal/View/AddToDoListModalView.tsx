import React from "react";
import ModalBase from "@/components/Common/Modal";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import { IAddToDoListModalProps } from "../type";

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AddToDoListModalView = ({
  isOpen,
  title,
  onCloseModal,
  onAddToDoList,
  onChangeTitle,
}: IAddToDoListModalProps) => {
  return (
    <>
      <ModalBase
        visible={isOpen}
        onClose={onCloseModal}
        footer={
          <>
            <Button onClick={onCloseModal} color="inherit" variant="outlined">
              닫기
            </Button>
            <Button onClick={onAddToDoList} variant="outlined">
              등록
            </Button>
          </>
        }
      >
        <Title>New ToDoList</Title>
        <TextField onChange={onChangeTitle} value={title} label="Title" />
      </ModalBase>
    </>
  );
};

export default AddToDoListModalView;
