import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const EmptyPage = () => {
  return (
    <Container>
      <Typography fontWeight={700}>존재하지 않는 페이지입니다.</Typography>
    </Container>
  );
};

export default EmptyPage;
