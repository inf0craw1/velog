import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from './components/jina/Post';
import PostSample from "./components/jina/PostSampleData";
import Profile1 from './components/Profile1';
import User1post from './components/users/User1post';
import User1info from './components/users/User1info';
import User1series from './components/users/User1series';

const sample_post = PostSample;

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/post" component={() => <Post post={sample_post}> </Post>}></Route>
        <Route exact path="/profile1" component={Profile1}></Route>
        <Route path="/User1post" component={User1post}></Route>
        <Route path="/User1info" component={User1info}></Route>
        <Route path="/User1series" component={User1series}></Route>
      </Switch>
    
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
