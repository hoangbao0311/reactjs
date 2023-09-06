import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import New from "./components/New";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./admin/Index";
import UserAdmin from "./admin/User";
import LoginAdmin from "./admin/Login";
import Post from "./admin/Post";
import EditPost from "./admin/EditPost";
import EditUser from "./admin/EditUser";
import User from "./components/User";
import EditPostUser from "./components/EditPostUser";
import Bookmark from "./components/Bookmark ";

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
            <Route path="user" element={<User />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="user/edit/:id" element={<EditPostUser />} />
          </Route>
          <Route path="admin" element={<Index />}>
            <Route path="/admin/user" element={<UserAdmin />} />
            <Route path="/admin/loginadmin" element={<LoginAdmin />} />
            <Route path="/admin/post/" element={<Post />} />
            <Route path="/admin/post/edit/:id" element={<EditPost />} />
            <Route path="/admin/user/edit/:id" element={<EditUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
