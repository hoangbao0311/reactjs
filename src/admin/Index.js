import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  const loginAdmin = localStorage.getItem("admin");

  let isLoginStyle = "hidden ";
  let isLogoutStyle = "block";
  if (loginAdmin !== null) {
    isLoginStyle = "hidden";
    isLogoutStyle = "block";
  } else {
    isLoginStyle = "block";
    isLogoutStyle = "hidden";
  }

  const logOut = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin/loginadmin";
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex h-full">
            <div className="w-44 bg-blue-500">
              <div className="p-4 text-white">
                <h1 className="text-2xl font-semibold">Admin Panel</h1>
              </div>

              <nav className="mt-6">
                <ul>
                  <li className="mb-2">
                    <Link
                      className="block p-4 text-white hover:bg-blue-600"
                      to="/admin/user"
                    >
                      Users
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="block p-4 text-white hover:bg-blue-600"
                      to="/admin/post"
                    >
                      Post
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="block p-4 text-white hover:bg-blue-600"
                      to="/admin/oder"
                    >
                      Order
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="block p-4 text-white hover:bg-blue-600"
                      to="/admin/voucher"
                    >
                      Voucher
                    </Link>
                  </li>
                  <li className={isLoginStyle}>
                    <Link
                      className="block p-4 text-white hover:bg-blue-600"
                      to="/admin/loginadmin"
                    >
                      Login
                    </Link>
                  </li>
                  <li
                    onClick={logOut}
                    className="block p-4 text-white hover:bg-blue-600"
                  >
                    <p className={isLogoutStyle}>Logout</p>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex-1 p-4 h-full">
              {loginAdmin ? (
                <Outlet />
              ) : (
                <div>
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
