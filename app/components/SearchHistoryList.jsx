"use client";
import React from "react";
import PropTypes from "prop-types";

const SearchHistoryList = ({ searchHistory, onSelect }) => {
  return (
    <div
      //   className="absolute bg-white shadow-md rounded-lg top-full mt-2 w-full max-h-60 overflow-y-auto z-20 border border-gray-300"
      style={{ flex: "1 1 0 !important" }}
    >
      <ul className="list-none p-2">
        {searchHistory.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onMouseDown={() => onSelect(item)} // Use onMouseDown to avoid blur issue
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define prop types for validation
SearchHistoryList.propTypes = {
  searchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchHistoryList;
