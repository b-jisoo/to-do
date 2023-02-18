import React from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@mui/material";
import Seo from "@/components/Common/Seo";
import Link from "next/link";
import { ILoginProps } from "../types";

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
  :hover {
    cursor: pointer;
  }
`;

const LoginView = ({
  inputs,
  onChangeEmail,
  onChangePassword,
  onLogin,
  isNotEnterPassword,
  isNotEnterEmail,
  validData,
}: ILoginProps) => {
  return (
    <Container>
      <Seo />
      <Typography textAlign="center" variant="h4">
        로그인
      </Typography>
      <TextField
        label="Email"
        value={inputs.email}
        onChange={onChangeEmail}
        error={isNotEnterEmail ? false : !validData.isEmailValid}
        helperText={
          isNotEnterEmail || validData.isEmailValid
            ? ""
            : "이메일 형식에 맞게 입력해주세요."
        }
      />
      <TextField
        type="password"
        label="Password"
        value={inputs.password}
        onChange={onChangePassword}
        error={isNotEnterPassword ? false : !validData.isPasswordValid}
        helperText={
          isNotEnterPassword || validData.isPasswordValid
            ? ""
            : "비밀번호는 8자리 이상이어야 합니다."
        }
      />
      <Button size="large" variant="contained" onClick={onLogin}>
        로그인
      </Button>
      <Typography textAlign="center" variant="caption">
        아이디가 없으신가요?{" "}
        <UnderLineTypography variant="button">
          <Link href={"/auth/signup"}>회원가입</Link>
        </UnderLineTypography>
      </Typography>
    </Container>
  );
};

export default LoginView;
