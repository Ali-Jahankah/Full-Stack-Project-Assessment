import Context from "../../context/Context";
import "../../styles/App.css";
import Home from "./Home";

function App() {
  return (
    <Context>
      <Home></Home>
    </Context>
  );
}

export default App;
