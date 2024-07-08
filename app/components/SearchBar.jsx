"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSearchStore from "../useSearchStore";
import SearchHistoryList from "./SearchHistoryList";

const SearchBar = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const addSearchItem = useSearchStore((state) => state.addSearchItem);
  const searchHistory = useSearchStore((state) => state.searchHistory);
  const deleteSearchItem = useSearchStore((state) => state.deleteSearchItem);

  useEffect(() => {
    if (searchedItem.length > 0) {
      setSuggestion(true);
    } else {
      setSuggestion(false);
    }
  }, [searchedItem]);

  const handleChange = (value) => {
    setSearchedItem(value);
    console.log("handleChange:", value);
  };

  const handleSearchSubmit = (value) => {
    console.log("handleSearchSubmit:", value);
    if (value.trim()) {
      addSearchItem(value);
    }
    setIsFocused(false);
  };

  const handleFocus = () => {
    console.log("Input focused");
    setIsFocused(true);
  };

  const handleBlur = (value) => {
    console.log("Input blurred");
    setTimeout(() => setIsFocused(false), 200);
    if (value.trim()) {
      addSearchItem(value);
    }
  };

  const handleSelectHistoryItem = (item) => {
    console.log("History item selected:", item);
    setSearchedItem(item);
    handleSearchSubmit(item);
  };

  const handleDeleteHistoryItem = (item) => {
    if (searchedItem == item) {
      setSearchedItem("");
    }
    deleteSearchItem(item);
  };
  //   console.log("SearchBar rendered with searchHistory:", searchHistory);

  return (
    <div className="py-2 px-2 relative">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <FaSearch className="absolute text-gray-400 top-3 left-4" />
              <input
                type="text"
                className="bg-white h-10 w-full px-12 rounded-lg border-solid border-2
                  border-gray-400 focus:outline-black hover:cursor-pointer"
                autoComplete="on"
                name=""
                placeholder="Try to search ..."
                value={searchedItem}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e.target.value)}
              />
              {isFocused && searchHistory.length > 0 && (
                <SearchHistoryList
                  searchHistory={searchHistory}
                  onSelect={handleSelectHistoryItem}
                  onDelete={handleDeleteHistoryItem}
                  suggestion={suggestion}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
