import { flexCenter } from "@/styles/flex";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { BlueStyle } from "@/styles/blue";
import { IHeaderProps } from "../type";

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

const LogOutButton = styled.div`
  ${BlueStyle}
`;

const LoginButton = styled.div`
  a {
    ${BlueStyle}
  }
`;

const HeaderView = ({ auth, onLogout }: IHeaderProps) => {
  return (
    <Container id="Header">
      <Wrapper>
        <Logo>ToDos</Logo>
        {auth ? (
          <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
        ) : (
          <LoginButton>
            <Link href={"/auth/login"}>로그인</Link>
          </LoginButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default HeaderView;
