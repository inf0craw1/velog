import "./css/App.css";
import Body from "./components/Body";
import { render } from "@testing-library/react";

function App() {
  render(){
    return (
    <div className="App">
      Velog
      <Body></Body>
    </div>
  );
  }
}

export default App;
