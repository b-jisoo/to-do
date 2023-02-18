import useUserAction from "@/actions/user";
import { authState } from "@/recoil/user";
import React from "react";
import { useRecoilValue } from "recoil";
import { IHeaderProps } from "./type";
import HeaderView from "./view/headerView";

const Header = () => {
  const auth = useRecoilValue(authState);
  const user = useUserAction();

  const HeaderProps: IHeaderProps = {
    auth,
    onLogout: () => user.logout(),
  };

  return <HeaderView {...HeaderProps} />;
};

export default Header;
