import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo  from "../components/Logo";
import HeaderRight from "../components/HeaderRight";


const StyledHeader = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    align-items: center;
`;

function Header({toggleLogin, ...args}) {
    return (
        <StyledHeader className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Logo />
            </Link>
            <HeaderRight toggleLogin={toggleLogin}></HeaderRight>
        </StyledHeader> 
    );
}

export default Header;