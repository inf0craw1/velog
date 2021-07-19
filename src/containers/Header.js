import React from "react";

import Logo  from "../components/Logo";
import HeaderRight from "../components/HeaderRight";


import styled from "styled-components";

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
            <Logo></Logo>
            <HeaderRight toggleLogin={toggleLogin}></HeaderRight>
        </StyledHeader> 

    );
}

export default Header;