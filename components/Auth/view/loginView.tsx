import React from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@mui/material";
import Seo from "@/components/Common/Seo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  gap: 20px;
  margin: 0 auto;
`;

const UnderLineTypography = styled(Typography)`
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

const LoginView = () => {
  return (
    <Container>
      <Seo />
      <Typography textAlign="center" variant="h4">
        로그인
      </Typography>
      <TextField label="Email" />
      <TextField type="password" label="Password" />
      <Button size="large" variant="contained">
        로그인
      </Button>
      <Typography textAlign="center" variant="caption">
        아이디가 없으신가요?{" "}
        <UnderLineTypography variant="button">회원가입</UnderLineTypography>
      </Typography>
    </Container>
  );
};

export default LoginView;
