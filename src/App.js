import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";

import "./css/App.css";
import Footer from "./components/Footer";
import styled from "styled-components";
import smile from "./img/smile.jpg";

const Img = styled.div`
  height: 210px;
  width: 350px;
  background-image: url(${smile});
  background-size: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const Title = styled.h1`
  display: inline-block;
  list-style: none;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
`;
const Post = styled.div`
  display: inline-block;
  list-style: none;
  margin-top: 10px;
  margin-left: 10px;
  color: gray;
  font-size: 15px;
`;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Body">
        <Body>
          <Img />
          <Title> 게시글</Title>
          <Post> 리액트 스터디 </Post>
        </Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
