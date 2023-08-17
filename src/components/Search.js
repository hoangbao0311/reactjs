import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full flex items-center min-w-[407px]">
      <span className="h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500 py-6">
        <BiSearch size={24} />
      </span>
      <input
        type="text"
        className="text-gray-500 outline-none bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] w-full h-12"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
