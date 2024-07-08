import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="my-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
        Header
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
