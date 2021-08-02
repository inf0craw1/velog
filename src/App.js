import React from "react";
import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Post from "./components/jina/Post";
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [popupLogin, setPopupLogin] = useState(false);

  function toggleLogin() {
    setPopupLogin(!popupLogin);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header toggleLogin={toggleLogin}></Header>

      <div className="Body">
        <Link to="/post">
          <Body />
        </Link>
      </div>

      <Footer></Footer>

      {popupLogin ? <Login toggleLogin={toggleLogin}></Login> : null}
    </div>
  );
}

export default App;
