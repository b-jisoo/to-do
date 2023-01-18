import Checkbox from "@/components/Common/CheckBox";
import ModalBase from "@/components/Common/Modal";
import { flexCenter } from "@/styles/flex";
import { StyledButton } from "@/styles/StyledButton";
import React from "react";
import styled from "styled-components";
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
const Article = styled.article`
  ${flexCenter}
  justify-content: start;
  border-bottom: 1px solid #cecece;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;
const ToDoHeader = styled.div`
  ${flexCenter}
  justify-content: space-between;
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

const ToDoDetailView = ({
  isOpen,
  handleModalOpen,
  handleModalClose,
}: IToDoDetailViewProps) => {
  return (
    <Container>
      <ToDoHeader>
        <span>ToDos</span>
        {/* 모달창 여는 버튼 */}
        <NewButton onClick={handleModalOpen}>New</NewButton>
      </ToDoHeader>
      {/* 모달창의 view */}
      {/* isOpen 리덕스로 대체 해야함 */}
      <ModalBase visible={isOpen} onClose={handleModalClose}>
        <div>모달에 들어갈 콘텐츠입니다.</div>
      </ModalBase>

      {/* 생성된 todo가 map으로 생성될 부분  */}
      <Article>
        <Checkbox
          text={
            "테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1"
          }
        />
      </Article>
      <Article>
        <Checkbox text={"테스트2"} />
      </Article>
      <Article>
        <Checkbox text={"test 3"} />
      </Article>
    </Container>
  );
};

export default ToDoDetailView;
