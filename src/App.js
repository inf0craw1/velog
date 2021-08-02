import React, { useState } from "react";
import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import Post from "./components/jina/Post";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile1 from './components/Profile1';
import User1post from './components/users/User1post';
import User1info from './components/users/User1info';
import User1series from './components/users/User1series';
import Search from './containers/Search';
import PostSample from "./components/jina/PostSampleData";


import GlobalStyle from "./styles/GlobalStyle";


function App() {
  const sample_post = PostSample;
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
          <Route path="/post" component={() => <Post post={sample_post}> </Post>}></Route>
          <Route exact path="/profile1" component={Profile1}></Route>
          <Route path="/User1post" component={User1post}></Route>
          <Route path="/User1info" component={User1info}></Route>
          <Route path="/User1series" component={User1series}></Route>
        </Switch>


      <Footer></Footer>

      {popupLogin ? <Login toggleLogin={toggleLogin}></Login> : null}
    </div>

    </BrowserRouter>
  );
}

export default App;
