import ModalBase from "@/components/Common/Modal";
import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IAddToDoModalProps } from "../type";

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AddToDoModalView = ({
  isOpen,
  onCloseModal,
  onChangeTitle,
  onChangeContent,
  onAddToDoItem,
  toDoData,
}: IAddToDoModalProps) => {
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
            <Button onClick={onAddToDoItem} variant="outlined">
              등록
            </Button>
          </>
        }
      >
        <Title>New ToDo</Title>
        <TextField
          onChange={onChangeTitle}
          value={toDoData.title}
          label="Title"
        />
        <TextField
          onChange={onChangeContent}
          value={toDoData.contents}
          label="Content"
          multiline
          minRows={5}
        />
      </ModalBase>
    </>
  );
};

export default AddToDoModalView;
