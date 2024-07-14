"use client";
import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const SearchHistoryList = ({
  searchHistory,
  onSelect,
  onDelete,
  suggestion,
}) => {
  return (
    <div className="search-history-list">
      <ul className="list-none p-2">
        {searchHistory.map((item, index) => (
          <li
            key={index}
            className="p-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
          >
            <span onMouseDown={() => onSelect(item)}>{item}</span>
            {!suggestion && (
              <div>
                <button
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    onDelete(item);
                  }}
                  className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrash />
                </button>
              </div>
            )}
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
