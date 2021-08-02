import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import styled from "styled-components";
import HashTagList from "./HashTagList";
import CreateComment from "./CreateComment";
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
      <SomethingBlock></SomethingBlock>
      <Thumnail thumnail={thumnail} />
    </div>
  );
}

function Post({ post }) {
  const [comments, setComment] = useState(SAMPLE_COMMENTS_DATA);
  const createComment = (comment) => {
    setComment(comments.concat(comment));
  };

  console.log("comments", comments);
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
          <CreateComment createComment={createComment} />
          <CommentsList comments={comments} />
        </div>
      </PostWrapper>
    </div>
  );
}

const SomethingBlock = styled.div`
  height: 150px;
  background-color: #f8f9fa;
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

const SAMPLE_COMMENTS_DATA = [
  {
    id: 0,
    user: {
      profile: "",
      id: "jina",
    },
    text: "우와 대박~",
    date: "2일전",
  },
  {
    id: 1,
    user: {
      profile: "",
      id: "banana",
    },
    text: "와우!",
    date: "1일전",
  },
  {
    id: 2,
    user: {
      profile: "",
      id: "vrvr",
    },
    text: "오~",
    date: "3일전",
  },
  {
    id: 3,
    user: {
      profile: "",
      id: "ham",
    },
    text: "굳",
    date: "5일전",
  },
];

export default Post;
