import React from "react";
import { Link, Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="">
      <div>
        <div>
          <div class="flex  bg-gray-100">
            <aside class="w-44 bg-blue-500 ">
              <div class="p-4 text-white">
                <h1 class="text-2xl font-semibold">Admin Panel</h1>
              </div>

              <nav class="mt-6">
                <ul>
                  <li class="mb-2">
                    <Link
                      class="block p-4 text-white hover:bg-blue-600"
                      to="/admin/user"
                    >
                      Users
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link
                      class="block p-4 text-white hover:bg-blue-600"
                      to="/admin/post"
                    >
                      Post
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link
                      class="block p-4 text-white hover:bg-blue-600"
                      to="/admin/loginadmin"
                    >
                      Login
                    </Link>
                  </li>

                  <li class="mb-2">
                    <a href="#" class="block p-4 text-white hover:bg-blue-600">
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <main class="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
