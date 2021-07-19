import React from "react";
import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import "./css/App.css";
import Footer from "./components/Footer";
import styled from "styled-components";
import smile from "./img/smile.jpg";
import img2 from "./img/img_2.jpg";
import rupi from "./img/rupi.png";

const Img = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${smile});
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-left: -1rem;
`;
const Img1 = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${img2});
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-left: -1rem;
`;
const Img2 = styled.div`
  width: 310px;
  height: 175px;
  background-image: url(${rupi});
  background-size: 100% auto;
  background-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-left: -1rem;
`;
const Title = styled.h1`
  display: inline-block;
  list-style: none;
  margin-top: 10px;
  font-weight: bold;
  font-size: 17px;
`;
const Post = styled.div`
  height: 60px;
  display: inline-block;
  list-style: none;
  margin-top: 10px;
  color: gray;
  font-size: 13px;
`;
const Info = styled.div`
  width: 310px;
  height: 10px;
  position: static;
  font-size: 11px;
  color: lightgray;
`;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Body className="item">
          <Img />
          <Title> 프론트엔드 면접 문제 2탄 ⭐️</Title>
          <Post>
            {" "}
            지난번엔 HTML편이었는데 이번엔 CSS 관련 문제들로 정리해봤습니다.
            오늘도 프론트엔드 화이팅..!{" "}
          </Post>
          <Info>2021년 7월 9일 · 0개의 댓글</Info>
        </Body>
        <Body className="item">
          <Img1 />
          <Title> 스타트업 4년차에 억대연봉 개발자</Title>
          <Post> 4년만에 억대연봉을 달성 </Post>
          <Info>6일 전 · 8개의 댓글</Info>
        </Body>
        <Body className="item">
          <Img2 />
          <Title> Unity 개발자의 Flutter 앱 개발기🤖</Title>
          <Post> Flutter로 첫 앱을 만들어보았습니다. </Post>
          <Info>2일 전 · 4개의 댓글</Info>
        </Body>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
