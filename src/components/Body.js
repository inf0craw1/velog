import smile from "../img/smile.jpg";
import img2 from "../img/img_2.jpg";
import rupi from "../img/rupi.png";
import React from "react";
import "../css/Body.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from '../styles/colors';

import { Posts } from "../datas/posts";
import { Users } from "../datas/users";
import { comments } from "../datas/comments";

const StyledProfileImg = styled.div`
width: 22px;
height: 22px;
background-size: 100% auto;
background-position: center;
border-radius: 100%;
margin-right: 4px;
margin-top: -4px;
`;
const Img = styled.div`
  width: 310px;
  height: 175px;
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-right: 2rem;
`;
const Img1 = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${img2});
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const Img2 = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${rupi});
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const Title = styled.h1`
  display: inline-block;
  list-style: none;
  margin-top: 17px;
  font-weight: bold;
  font-size: 17px;
  padding-left: 15px;
`;
const Post = styled.div`
  width: 285px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  list-style: none;
  margin-top: 10px;
  color: gray;
  font-size: 13px;
  padding-left: 15px;
`;
const Info = styled.div`
  width: 310px;
  height: 10px;
  position: static;
  margin-top: 0px;
  font-size: 11px;
  color: lightgray;
  padding-left: 15px;
`;
const Border = styled.div`
  margin-top: 20px;
  border-top: 1px solid #efefef;
`;
const FooterBlock = styled.div`
  display: flex;
  margin-top: 10px;
  width: 225px;
  height: 10px;
  font-size: 12px;
  padding-left: 15px;
`;
const Likes = styled.div`
  color: ${colors.black};
  margin-top: 10px;
  position: relative;
  left: 30px;
  font-size: 13px;
  padding-left: 15px;
`;

function PostBlock({post = {title: 'abc'}}) {
  return (
    <div style={{ height: "290px" }}>
      <div style={{ cursor: "pointer" }}>
        <Img style={{backgroundImage: `url('./img/thumbnails/${post.thumbnail}')`}}/>
        <Title> { post.title }</Title>
        <Post>
          {post.content}
        </Post>
      </div>
      <Info>{post.date.substr(0, 4)}년 {post.date.substr(4, 2)}월 {post.date.substr(6, 2)}일 · {comments.filter(comment => comment.postId === post.idx)[0].commentData.length}개의 댓글</Info>
    </div>
  );
}
function PostBlock1() {
  return (
    <div style={{ height: "290px" }}>
      <div style={{ cursor: "pointer" }}>
        <Img1 />
        <Title> 스타트업 4년차에 억대연봉 개발자</Title>
        <Post Link to={"/post/1"}>
          {" "}
          4년차에 억대 연봉을 달성한 스타트업 개발자 삼촌님에게 듣는 현실적인
          자기성장 조언{" "}
        </Post>
      </div>
      <Info>6일 전 · 8개의 댓글</Info>
    </div>
  );
}
function PostBlock2() {
  return (
    <div style={{ height: "290px" }}>
      <div style={{ cursor: "pointer" }}>
        <Img2 />
        <Title> Unity 개발자의 Flutter 앱 개발기🤖</Title>
        <Post> Flutter로 첫 앱을 만들어보았습니다. </Post>
      </div>
      <Info>2일 전 · 4개의 댓글</Info>
    </div>
  );
}
function User({ id = 'id', user}) {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {console.log(user)}
      <StyledProfileImg style={{backgroundImage: `url('./img/profiles/${user.profile}')`}}></StyledProfileImg>
      <div style={{ width: "22px" }}>by</div>
      <b>{ id }</b>
    </div>
  );
}

function User1() {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      <div style={{ width: "22px" }}>🔥</div>
      <div style={{ width: "22px" }}>by</div>
      <b>heyheyhey</b>
    </div>
  );
}
function User2() {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      <div style={{ width: "22px" }}>😀 </div>
      <div style={{ width: "22px" }}>by</div>
      <b>Zanmang_Rupi</b>
    </div>
  );
}

const BodyBlock = styled.div`
  width: 310px;
  height: 350px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 76px;
  margin-bottom: 32px;

  display: inline-flex;
  flex-direction: column;

  margin-right: 1rem;
`;

function Body() {
  return (
      <div className="container">

        {
          Posts.map( (post, idx) => 
            <BodyBlock className="item" key={'BodyBlock' + idx}>
              <Link to={'/post/' + post.id + '/' + post.title} style={{textDecoration: 'none', color: colors.black}}>
                <PostBlock post={post}/>
              </Link>
              <Border />
              <div style={{ display: "flex", alignItems: "center"}}>
                <Link to={'/profile1'} style={{textDecoration: 'none', color: colors.black}}>
                  <FooterBlock>
                      <User id={post.id} user={Users.filter((user) => user.id === post.id)[0]} />
                  </FooterBlock>
                </Link>
                <Likes>❤ {post.like}</Likes>
              </div>
            </BodyBlock>
        )
        }
        
      </div>
  );
}
export default Body;
