import "./containers/Header";
import Header from "./containers/Header";
import Body from "./components/Body";
import "./css/App.css";
import Footer from "./components/Footer";
import Post from "./components/jina/Post";

//박진아 작성
import PostSample from "./components/jina/PostSampleData";
const sample_post = PostSample;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Body">
        <Post post={sample_post}></Post>
        {/* <Body>
          게시글
          <div>2021. 7. 12 </div>
        </Body> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
