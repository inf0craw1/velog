import React from "react";

import Logo  from "../component/Logo";
import HeaderRight from "../component/HeaderRight";

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