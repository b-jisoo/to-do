import { useSession } from "next-auth/react";
import React from "react";
import { IHeaderProps } from "./type";
import HeaderView from "./view/headerView";

const Header = () => {
  const { data: session, status } = useSession();

  const HeaderProps: IHeaderProps = {
    session,
    status,
  };

  return <HeaderView {...HeaderProps} />;
};

export default Header;
