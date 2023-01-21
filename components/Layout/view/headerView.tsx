import { flexCenter } from "@/styles/flex";
import styled from "styled-components";
import React from "react";
import { StyledButton } from "@/styles/StyledButton";
import Link from "next/link";

const Container = styled.nav`
  ${flexCenter}
  position: sticky;
  top: 0px;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px rgba(130, 130, 130, 0.1);
  background-color: white;
`;

const Wrapper = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 20px 15px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const LoginButton = styled.div`
  margin-right: 5px;
  a {
    text-decoration-line: none;
    font-weight: 700;
    background-color: white;
    color: #228be6;
    &:hover {
      color: #339af0;
    }
    &:active {
      color: #1c7ed6;
    }
  }
`;

const HeaderView = () => {
  return (
    <Container id="Header">
      <Wrapper>
        <Logo>ToDos</Logo>
        <LoginButton>
          <Link href={"/auth/login"}>로그인</Link>
        </LoginButton>
      </Wrapper>
    </Container>
  );
};

export default HeaderView;
