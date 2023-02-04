import { todoItemState } from "@/recoil/ToDo";
import React, { SyntheticEvent, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ICheckbox } from "./types";

function Checkbox({ contents, title, id }: ICheckbox) {
  const [isCheckd, setIsCheckd] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);

  const handleClick = (e: SyntheticEvent) => {
    setIsCheckd((e.target as HTMLInputElement).checked);
    setIsComplete(!isComplete);

    const itemIndex = todoItem.findIndex((item) => item.id === id);
    let copyTodoItem = [...todoItem];
    if (itemIndex !== -1)
      copyTodoItem[itemIndex] = {
        ...copyTodoItem[itemIndex],
        isComplete,
      };
    setTodoItem(copyTodoItem);
    console.log(isComplete);
  };

  return (
    <StyledLabel htmlFor={contents} isCheckd={isCheckd}>
      <StyledInput type="checkbox" onClick={handleClick} />
      <StyledP>
        <BoldFont>{title}</BoldFont>
        {contents}
      </StyledP>
    </StyledLabel>
  );
}

export default Checkbox;

const StyledLabel = styled.label<{ isCheckd: boolean }>`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  text-decoration: ${(props) => (props.isCheckd ? "line-through" : "none")};
`;

const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  :checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #0071e3;
  }
`;

const StyledP = styled.div`
  margin-left: 15px;
`;

const BoldFont = styled.h1`
  font-weight: 700;
  font-size: 25px;
`;
