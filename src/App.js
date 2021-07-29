import React from "react";
import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login";
import "./css/App.css";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Post from "./components/jina/Post";
import { useState } from "react";

//박진아 작성
import PostSample from "./components/jina/PostSampleData";
const sample_post = PostSample;

function App() {
  const [popupLogin, setPopupLogin] = useState(0);

  function toggleLogin() {
    if (popupLogin) {
      setPopupLogin(0);
    } else {
      setPopupLogin(1);
    }
    console.log(popupLogin);
  }

  return (
    <div className="App">
      <Header toggleLogin={toggleLogin}></Header>

      <div className="Body">
        <Link to="/post">
          <Body />
        </Link>
      </div>

      <Footer></Footer>

      {popupLogin === 1 ? <Login toggleLogin={toggleLogin}></Login> : null}
    </div>
  );
}

export default App;
