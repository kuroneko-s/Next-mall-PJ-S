import { NextPage } from "next";
import MainHeader from "@components/header/MainHeader";
import SubHeader from "@components/header/SubHeader";

const Header: NextPage = () => {
  return (
    <header>
      <MainHeader />
      <hr className="w-screen my-5" />
      <SubHeader />
    </header>
  );
};

export default Header;
