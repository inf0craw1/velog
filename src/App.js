import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";

import "./css/App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <div className="Body">
        <Body>
          게시글
          <div>2021. 7. 12 </div>
        </Body>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
