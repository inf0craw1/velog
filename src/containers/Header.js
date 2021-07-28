import React from "react";

import Logo from "../components/Logo";
import HeaderRight from "../components/HeaderRight";

import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <Logo></Logo>
      <HeaderRight></HeaderRight>
    </div>
  );
}

export default Header;
