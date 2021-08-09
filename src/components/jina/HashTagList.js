import React from "react";
import styled from "styled-components";

function HashTag({ hashtag }) {
  return <HashTagWrapper>{hashtag}</HashTagWrapper>;
}

function HashTagList({ hashtags }) {
  return (
    <HashTagListWrapper>
      {hashtags.map((hashtag) => {
        return <HashTag hashtag={hashtag} />;
      })}
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
