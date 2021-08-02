import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledHeaderRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledSearchButton = styled.div`
    width: 36px;
    height: 36px;

    font-size: 20px;
    text-align: center;

    padding: 4px;

    cursor: pointer;
    border-radius: 50%;
    &:hover{
        background:rgb(26, 29, 32);
        transition: ease all .4s;
    }
`;
const StyledLoginButton  = styled.div`

    width: 60px;
    height: 28px;

    text-align: center;
    padding: 4px;
    font-size: 16px;
    background :rgb(52, 58, 64);
    color :white;
    font-weight: bold;

    border-radius: 40px;
    cursor: pointer;
    &:hover{

        background :rgba(52, 58, 64, 0.5);
        transition: ease all .4s;
    }
`;

function HeaderRight({toggleLogin, ...args}){

    return (
        <StyledHeaderRight className="header-right">
            <Link to="/search" style={{textDecoration: 'none', marginRight: '8px'}}>
                <StyledSearchButton className="search-button">
                    🔍
                </StyledSearchButton>
            </Link>
            <StyledLoginButton className="login-button" onClick={toggleLogin}>
                로그인
            </StyledLoginButton>

        </StyledHeaderRight>

    );
}

export default HeaderRight;