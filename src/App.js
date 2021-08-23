import React, { useState } from "react";
import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import Post from "./components/jina/Post";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile1 from "./components/Profile1";

import User1post from "./components/users/User1post";
import User1info from "./components/users/User1info";
import User1series from "./components/users/User1series";
import Search from "./containers/Search";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [popupLogin, setPopupLogin] = useState(false);

  function toggleLogin() {
    setPopupLogin(!popupLogin);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Header toggleLogin={toggleLogin}></Header>

        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/User1post" component={User1post}></Route>
          <Route path="/User1info" component={User1info}></Route>
          <Route path="/User1series" component={User1series}></Route>
          <Route path="/post/:userid/:title" component={Post} />
          {/* <Route path="/Profile1" component={Profile1}></Route> */}
          <Route path="/User1post" exact component={User1post} />
          <Route path="/User1info" component={User1post} />
          <Route path="/User1series" component={User1series} />
        </Switch>

        <Footer></Footer>

        {popupLogin ? <Login toggleLogin={toggleLogin}></Login> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
