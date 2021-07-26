import React from "react";
import styled from "styled-components";

function CreateComment() {
  return (
    <CreateCommentBlock>
      <div className="num_of_comments">댓글 수 100개</div>
      <InputBlock placeholder="댓글을 작성하세요" />
      <WriteButton>등록</WriteButton>
    </CreateCommentBlock>
  );
}

const CreateCommentBlock = styled.div`
  .num_of_comments {
    font-weight: bold;
  }
`;
const InputBlock = styled.input`
  width: 100%;
  padding: 30px 10px;
  border: 1px solid #eaeaea;
  color: #eaeaea;
  font-size: 15px;
  border-radius: 8px;
`;
const WriteButton = styled.button`
  background-color: #21c896;
  color: white;
  border: none;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  right: 0;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export default CreateComment;
