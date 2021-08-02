import React from "react";
import styled from "styled-components";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentBlock>
          <div key={comment.id}>
            <div className="user_info">
              <div className="profile_image">{comment.user.profile}</div>
              <div className="user_id_date">
                <div className="user_id">{comment.user.id}</div>
                <div className="date">{comment.date}</div>
              </div>
            </div>
            <div className="text">{comment.text}</div>
          </div>
        </CommentBlock>
      ))}
    </>
  );
}

const CommentBlock = styled.div`
  margin-bottom: 50px;
  .user_info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .profile_image {
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50px;
    margin-right: 20px;
  }
  .user_id {
    font-weight: bold;
    margin-bottom: 4px;
  }
  .text {
    font-size: 18px;
  }
`;

export default CommentsList;
