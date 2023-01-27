import styled from "@emotion/styled";
import { TextField, Button, Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  gap: 20px;
  margin: 0 auto;
`;

const SignUpView = ({}) => {
  return (
    <Container>
      <Typography textAlign="center" variant="h4">
        회원가입
      </Typography>
      <TextField label="Email" />
      <TextField type="password" label="Password" />
      <Button size="large" variant="contained">
        완료
      </Button>
    </Container>
  );
};

export default SignUpView;
