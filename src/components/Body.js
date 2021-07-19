import React from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
  width: 310px;
  height: 350px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;

  display: inline-flex;
  flex-direction: column;

  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const Border = styled.div`
  margin-top: 20px;
  border-top: 1px solid #efefef;
`;
const FooterBlock = styled.div`
  margin-top: 7px;
  width: 310px;
  height: 10px;
  font-size: 13px;
`;
function Body({ children }) {
  const style = {
    display: "flex",
  };
  return (
    <div>
      <BodyBlock>
        {children}
        <Border />
        <FooterBlock>
          <div style={style}>
            <div className="search-button">😀 </div>
            <div className="login-button"> . by </div>
            <div style={{ width: "7px" }} />
            <b>jsy1999</b>
            <div style={{ width: "155px" }} />
            <div>❤ n</div>
          </div>
        </FooterBlock>
      </BodyBlock>
    </div>
  );
}

export default Body;
