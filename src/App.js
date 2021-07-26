import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login"
import "./css/App.css";
import Footer from "./components/Footer";
<<<<<<< HEAD
import { BrowserRouter, Link } from "react-router-dom";
=======
import Post from "./components/jina/Post";

//박진아 작성
import PostSample from "./components/jina/PostSampleData";
const sample_post = PostSample;

import { useState } from "react";
>>>>>>> fb696fa3986cd2e842507273161bb679b120285a

function App() {
  const [popupLogin, setPopupLogin] = useState(0);

  function toggleLogin(){
    
    if(popupLogin) {
      setPopupLogin(0);
    } else {
      setPopupLogin(1);
    }
    console.log(popupLogin);

  }

  return (
    <div className="App">

      <div className="Body">
        <Body>
          게시글
          <BrowserRouter>
          <Link to="/abc"><div>2021. 7. 12 </div></Link>
          </BrowserRouter>
        </Body>
      </div>
      <Footer></Footer>

      {popupLogin === 1 ? <Login toggleLogin={toggleLogin}></Login> : null}
    </div>
  );
}

export default App;
