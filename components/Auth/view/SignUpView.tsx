import Seo from "@/components/Common/Seo";
import styled from "@emotion/styled";
import { TextField, Button, Typography } from "@mui/material";
import { ISignUpProps } from "../types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  gap: 20px;
  margin: 0 auto;
`;

const SignUpView = ({
  inputs,
  onChangeEmail,
  onChangePassword,
  onSignUp,
  isNotEnterPassword,
  isNotEnterEmail,
  validData,
}: ISignUpProps) => {
  return (
    <Container>
      <Seo />
      <Typography textAlign="center" variant="h4">
        회원가입
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
      <Button size="large" variant="contained" onClick={onSignUp}>
        완료
      </Button>
    </Container>
  );
};

export default SignUpView;
