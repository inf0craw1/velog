import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import styled from "styled-components";
import HashTagList from "./HashTagList";
import Comment from "./CreateComment";
import CommentsList from "./CommentsList";
import LeftsideUtil from "./LeftsideUtil";
import pizzaThumnail from "./pizza.jpeg";

function Thumnail({ thumnail }) {
  return <ThumnailWrapper></ThumnailWrapper>;
}

function PostHeader({ title, author, date, thumnail }) {
  return (
    <div>
      <TitleWrapper>{title}</TitleWrapper>
      <InformationWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
        <DateWrapper>{date}</DateWrapper>
      </InformationWrapper>
      <HashTagList />
      <Thumnail thumnail={thumnail} />
    </div>
  );
}

function Post({ post }) {
  console.log(post);
  return (
    <div className="App">
      <GlobalStyle />
      <LeftsideUtil />
      <PostWrapper>
        <div>
          <PostHeader
            title={post.title}
            author={post.author}
            date={post.date}
            thumnail={post.thumnail}
          ></PostHeader>
          <ContentsWrapper>{post.contents}</ContentsWrapper>
          <div className="tmp">프로필란</div>
          <Comment />
          <CommentsList />
        </div>
      </PostWrapper>
    </div>
  );
}

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
