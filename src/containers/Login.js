import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, .6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLogin = styled.div`
    position: relative;
    display: flex;

    width: 600px;
    height: 400px;

    background: white;
    box-shadow : rgb(0 0 0 / 9%) 0px 2px 12px 0px;
`;

const StyledLoginLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 100%;
    background: rgb(241, 243, 245);
`;

const StyledImg = styled.img`
    width: 184px;
`;

const StyledLoginRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    width: 400px;
    height: 100%;

    padding: 12px;
`;

const StyledLoginExit = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    color: rgb(142, 146, 150);
    &:hover{
        color: rgb(33, 37, 41);
    }

    cursor: pointer;
`;

const StyledInputRow = styled.div`

width: 100%;
display: flex;

`;

const StyledInput = styled.input`
    width: 250px;
    height: 50px;
    font-size: 16px;

    padding: 4px;
    padding-left: 12px;

    border: 1px solid rgb(222, 226, 230);

    &:focus{
        border: 1px solid rgb(18, 184, 134);

    }

`;

const StyledLoginButton = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 50px;

    font-size: 16px;
    font-weight: bold;
    color: white;
    background: rgb(18, 184, 134);
    border: none;

    cursor: pointer;
    &:hover{

        background: rgb(28, 194, 144);
    }
    `;

const StyledH3 = styled.h3`
    font-size: 24px;

    margin-bottom: 20px;
`;

const StyledH4 = styled.h4`
    color: rgb(134, 142, 150);

    margin-bottom: 8px;
`;

function Login({toggleLogin, ...args}) {

    return ( 
        <StyledBackground>
            <StyledLogin>
                <StyledLoginLeft>
                    <StyledImg src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" />

                </StyledLoginLeft>
                <StyledLoginRight>
                    <StyledLoginExit onClick={toggleLogin}>
                    ✕
                    </StyledLoginExit>
                    <StyledH3>로그인</StyledH3>
                    <StyledH4>이메일로 로그인</StyledH4>

                    <StyledInputRow>
                        <StyledInput placeholder="example@example.com"></StyledInput>
                        <StyledLoginButton>로그인</StyledLoginButton>

                    </StyledInputRow>
                </StyledLoginRight>
            </StyledLogin>

        </StyledBackground>
    );
}

export default Login;