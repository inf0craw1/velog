import React from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
  width: 350px;
  height: 400px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
const Border = styled.div`
  margin-top: 80px;
  border-top: 1px solid #efefef;
`;
function Body({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <BodyBlock>
        {children}
        <Border />
      </BodyBlock>
    </div>
  );
}

export default Body;
