import React from "react";
import "./containers/Header";
import Header from "./containers/Header";

import "./css/App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body />
      <Footer></Footer>
    </div>
  );
}

export default App;
