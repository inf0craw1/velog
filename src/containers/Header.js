import React from "react";

import Logo  from "../components/Logo";
import HeaderRight from "../components/HeaderRight";

import "../css/Header.css";

import styled from "styled-components";

const StyledHeader = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    align-items: center;
`;

function Header() {
    return (
        <StyledHeader className="header">
            <Logo></Logo>
            <HeaderRight></HeaderRight>
        </StyledHeader> 

    );
}

export default Header;