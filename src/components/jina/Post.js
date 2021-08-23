import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import styled from "styled-components";
import HashTagList from "./HashTagList";
import CreateComment from "./CreateComment";
import CommentsList from "./CommentsList";
import LeftsideUtil from "./LeftsideUtil";
import pizzaThumnail from "./pizza.jpeg";

import colors from "../../styles/colors";
import { Posts } from "../../datas/posts";
import { comments } from "../../datas/comments";

function Thumnail({ thumnail }) {
  return <ThumnailWrapper></ThumnailWrapper>;
}

function PostHeader({ title, author, date, thumnail, hashtags }) {
  return (
    <div>
      <TitleWrapper>{title}</TitleWrapper>
      <InformationWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
        <DateWrapper>{date}</DateWrapper>
      </InformationWrapper>
      <HashTagList hashtags={hashtags} />
      <Thumnail thumnail={thumnail} />
    </div>
  );
}

function Post({ match }) {
  const { userid, title } = match.params;
  const post = Posts.filter(
    (post) => post.id === userid && post.title == title
  )[0];

  const comments_data = comments.filter(
    (comment) => comment.postId === post.idx
  )[0].commentData;

  const [comments_list, setComment] = useState(comments_data);
  const createComment = (text) => {
    let data = {
      user: {
        profile: "",
        id: "ham",
      },
      text: text,
      date: "5일전",
    };
    setComment(comments_list.concat(data));
  };

  return (
    <div className="App">
      <GlobalStyle />
      <LeftsideUtil />
      <PostWrapper>
        <div>
          <PostHeader
            title={post.title}
            author={post.id}
            date={post.date}
            thumnail={post.thumnail}
            hashtags={post.hashtag}
          ></PostHeader>
          <ContentsWrapper>{post.content}</ContentsWrapper>
          <div className="tmp">프로필란</div>
          <CreateComment
            num={comments_list.length}
            createComment={createComment}
          />
          <CommentsList comments={comments_list} />
        </div>
      </PostWrapper>
    </div>
  );
}

const SomethingBlock = styled.div`
  height: 150px;
  background-color: ${colors.gray};
  border-radius: 8px;
`;

const PostWrapper = styled.div`
  padding: 80px 100px;
  display: flex;

  .tmp {
    background-color: rgb(250, 250, 250);
    padding: 30px 0;
    color: gray;
    margin: 90px 0;
  }
`;
const InformationWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;
const TitleWrapper = styled.span`
  font-size: 3em;
  font-weight: 800;
  display: flex;
  align-items: center;
  margin: 30px 0;
`;
const AuthorWrapper = styled.span`
  font-weight: bold;
`;
const DateWrapper = styled.div`
  color: gray;
`;
const ContentsWrapper = styled.div`
  font-size: 1.2em;
  margin-bottom: 80px;
`;

const ThumnailWrapper = styled.div`
  background-image: url(${pizzaThumnail});
  width: 100%;
  height: 400px;
  border-radius: 20px;
  margin: 40px 0;
`;

export default Post;
