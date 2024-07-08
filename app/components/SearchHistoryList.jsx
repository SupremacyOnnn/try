"use client";
import React from "react";
import PropTypes from "prop-types";

const SearchHistoryList = ({ searchHistory, onSelect }) => {
  return (
    <div className="search-history-list">
      <ul className="list-none p-2">
        {searchHistory.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onMouseDown={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchHistoryList.propTypes = {
  searchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchHistoryList;
