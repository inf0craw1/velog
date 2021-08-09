import smile from "../img/smile.jpg";
import img2 from "../img/img_2.jpg";
import rupi from "../img/rupi.png";
import React from "react";
import "../css/Body.css";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import colors from '../styles/colors';

import { Posts } from "../datas/posts";

const Img = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${smile});
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
  height: 60px;
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
      {console.log(post)}
      <div style={{ cursor: "pointer" }}>
        <Img />
        <Title> { post.title }</Title>
        <Post>
          {" "}
          지난번엔 HTML편이었는데 이번엔 CSS 관련 문제들로 정리해봤습니다.
          오늘도 프론트엔드 화이팅..!{" "}
        </Post>
      </div>
      <Info>년 7월 9일 · 0개의 댓글</Info>
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
function User({ id = 'id', profileImg = '🦄'}) {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      <div style={{ width: "22px" }}>{profileImg}</div>
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
          Posts.map( (post) => 
            <BodyBlock className="item">
              <Link to={'/post/' + post.id + '/' + post.title} style={{textDecoration: 'none', color: colors.black}}>
                <PostBlock post={post}/>
              </Link>
              <Border />
              <div style={{ display: "flex" }}>
                <Link to={'/profile/1'} style={{textDecoration: 'none', color: colors.black}}>
                  <FooterBlock>
                      <User id={post.id} />
                  </FooterBlock>
                </Link>
                <Likes>❤ {post.like}</Likes>
              </div>
            </BodyBlock>
        )
        }
        <BodyBlock className="item">
          <PostBlock />
          <Border />
          <div style={{ display: "flex" }}>
            <FooterBlock>
              <Link to="/Profile1">
                <User />
              </Link>
            </FooterBlock>
            <Likes>❤ n</Likes>
          </div>
        </BodyBlock>
        <BodyBlock className="item">
          <PostBlock1 />
          <Border />
          <div style={{ display: "flex" }}>
            <FooterBlock>
              <Link to="/Profile2">
                <User1 />
              </Link>
            </FooterBlock>
            <Likes>❤ n</Likes>
          </div>
        </BodyBlock>
        <BodyBlock className="item">
          <PostBlock2 />
          <Border />
          <div style={{ display: "flex" }}>
            <FooterBlock>
              <Link to="/Profile3">
                <User2 />
              </Link>
            </FooterBlock>
            <Likes>❤ n</Likes>
          </div>
        </BodyBlock>
      </div>
  );
}
export default Body;
