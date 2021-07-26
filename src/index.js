import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from './components/jina/Post';
import PostSample from "./components/jina/PostSampleData";

const sample_post = PostSample;

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/post" component={() => <Post post={sample_post}> </Post>}></Route>
        
      </Switch>
    
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
