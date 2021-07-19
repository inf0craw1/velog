import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import Login from "./containers/Login"
import "./css/App.css";

import Footer from "./components/Footer";

import { useState } from "react";

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
      <Header toggleLogin={toggleLogin}>

      </Header>
      <div className="Body">
        <Body>
          게시글
          <div>2021. 7. 12 </div>
        </Body>
      </div>
      <Footer></Footer>

      {popupLogin === 1 ? <Login toggleLogin={toggleLogin}></Login> : null}
    </div>
  );
}

export default App;
