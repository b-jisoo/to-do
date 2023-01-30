import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { IEmptyProps } from "../ToDo/types";
import { flexCenter } from "@/styles/flex";

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 50vh;
`;

const EmptyComponent = ({ text }: IEmptyProps) => {
  return (
    <Container>
      <Typography fontWeight={700}>{text}</Typography>
    </Container>
  );
};

export default EmptyComponent;
