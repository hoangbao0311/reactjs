import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
