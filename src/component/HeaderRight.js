import React from "react";

function HeaderRight(){

    const handleClick = function (){
        console.log("login clicked");
    }

    return (
        <div className="header-right">
            <div className="search-button">
                🔍
            </div>
            <div className="login-button" onClick={handleClick}>
                로그인
            </div>

        </div>

    );
}

export default HeaderRight;