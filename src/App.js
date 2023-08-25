import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./admin/Index";
import User from "./admin/User";
import LoginAdmin from "./admin/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="admin" element={<Index />}>
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/loginadmin" element={<LoginAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
