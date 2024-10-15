import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center p-1 px-2 rounded-lg max-md:hidden w-48 border-2 border-gray-200">
        <input
          type="text"
          className="outline-none bg-transparent ml-2 caret-gray-400 text-gray-400 placeholder:font-light
             placeholder:text-gray-600 text-[15px] w-[90%]"
          placeholder="Search"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button className="h-8 w-8 hover:bg-blue-500 font-bold rounded-full flex items-center justify-center p-2 transition-all duration-300">
          <BiSearch size={20} className="text-gray-300 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
