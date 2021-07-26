import React from "react";
import styled from "styled-components";
import HashTagList from "./HashTagList";
import Comment from "./CreateComment";
import LeftsideUtil from "./LeftsideUtil";
import pizzaThumnail from "./pizza.jpeg";

function Thumnail({ thumnail }) {
  return <ThumnailWrapper></ThumnailWrapper>;
}

function PostHeader({ title, author, date, thumnail }) {
  return (
    <>
      <TitleWrapper>{title}</TitleWrapper>
      <InformationWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
        <DateWrapper>{date}</DateWrapper>
      </InformationWrapper>
      <HashTagList />
      <Thumnail thumnail={thumnail} />
    </>
  );
}

function Post({ post }) {
  console.log(post);
  return (
    <>
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
        </div>
      </PostWrapper>
    </>
  );
}

const PostWrapper = styled.div`
  padding: 80px 100px;
  display: flex;

  .tmp {
    border: 1px solid black;
    padding: 30px 0;
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
