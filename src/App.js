import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import New from "./components/New";

function App() {
  return (
    <div className="App w-[100vw]">
      <Header />
      {/* <Home /> */}
      <New />
    </div>
  );
}

export default App;
