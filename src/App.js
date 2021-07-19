import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import "./css/App.css";

import Footer from "./components/Footer";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <div className="Body">
        <Body>
          게시글
          <BrowserRouter>
          <Link to="/abc"><div>2021. 7. 12 </div></Link>
          </BrowserRouter>
        </Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
