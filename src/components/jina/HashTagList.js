import React from "react";
import styled from "styled-components";

function HashTag() {
  return <HashTagWrapper>GET</HashTagWrapper>;
}

function HashTagList() {
  return (
    <HashTagListWrapper>
      <HashTag />
      <HashTag />
    </HashTagListWrapper>
  );
}

const HashTagWrapper = styled.div`
  background-color: #f8f9fa;
  width: 50px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #15b885;
  margin-bottom: 20px;
`;
const HashTagListWrapper = styled.div`
  display: flex;
`;

export default HashTagList;
