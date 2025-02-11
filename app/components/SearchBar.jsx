"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchHistoryList from "./SearchHistoryList";
import useSearchStore from "@/store/useSearchStore";
import AnimatedGif from "./AnimatedGif";

const SearchBar = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const addSearchItem = useSearchStore((state) => state.addSearchItem);
  const searchHistory = useSearchStore((state) => state.searchHistory);
  const deleteSearchItem = useSearchStore((state) => state.deleteSearchItem);
  const setRecentTyped = useSearchStore((state) => state.setRecentTyped);
  const recentTyped = useSearchStore((state) => state.recentTyped);
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const segmentedControl = useSearchStore((state) => state.segmentedControl);

  const [suggestionList, setSuggestionList] = useState([]);
  const [suggestionNames, setSuggestionNames] = useState([]);

  useEffect(() => {
    if (searchedItem.length > 0) {
      setSuggestion(true);
      const filteredSuggestions = data.filter(
        (item) =>
          item.tags.some(
            (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
          ) && item.name.toLowerCase().includes(searchedItem.toLowerCase())
      );
      setSuggestionList(filteredSuggestions);
      const names = filteredSuggestions.map((item) => item.name);
      setSuggestionNames(names);
    } else {
      setSuggestion(false);
      setSuggestionList([]);
      setSuggestionNames([]);
    }
  }, [searchedItem, segmentedControl, data]);

  const handleChange = (value) => {
    setSearchedItem(value);
    setRecentTyped(value);
  };

  const handleSearchSubmit = (value) => {
    if (value.trim()) {
      addSearchItem(value);
    }
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (value) => {
    setIsFocused(false);
    if (value.trim()) {
      addSearchItem(value);
    }
  };

  const handleSelectHistoryItem = (item) => {
    setSearchedItem(item);
    handleSearchSubmit(item);
    setRecentTyped(item);
  };

  const handleDeleteHistoryItem = (item) => {
    if (searchedItem === item) {
      setSearchedItem("");
    }
    deleteSearchItem(item);
  };

  return (
    <div className="py-2 px-2 relative w-full">
      <div className="max-w-lg min-w-sm mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <FaSearch className="absolute text-gray-400 top-3 left-4" />
              <input
                type="text"
                className="bg-white h-10 w-full px-12 rounded-lg border-solid border-2 border-gray-400 focus:outline-black hover:cursor-pointer"
                autoComplete="on"
                name=""
                placeholder="Try to search ..."
                value={searchedItem}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e.target.value)}
              />
              {isFocused && (
                <SearchHistoryList
                  searchHistory={suggestion ? suggestionNames : searchHistory}
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
