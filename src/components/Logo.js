import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    color: black;
`;
function Logo(){

    return (
        <StyledLogo className="Logo">
            Velog
        </StyledLogo>
    );
}

export default Logo;