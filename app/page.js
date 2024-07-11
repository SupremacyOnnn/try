"use client";
import React, { useState, useEffect } from "react";
import CardsCollection from "./components/CardsCollection";
import useSearchStore from "./useSearchStore";
import Header from "./components/Header";
import { getAllData } from "./db/db";

const page = () => {
  const data = getAllData();
  const searchedItem = useSearchStore((state) => state.searchHistory);
  const segmentedControl = useSearchStore((state) => state.segmentedControl);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchedItem.length > 0) {
      const filteredSuggestions = data.filter(
        (item) =>
          item.tags.some(
            (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
          ) && item.name.toLowerCase().includes(searchedItem[0].toLowerCase())
      );
      setFilteredData(filteredSuggestions);
    } else {
      const filteredSuggestions = data.filter((item) =>
        item.tags.some(
          (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
        )
      );
      setFilteredData(filteredSuggestions);
    }
  }, [data, searchedItem, segmentedControl]);
  return (
    <div>
      <Header />
      <CardsCollection name={segmentedControl} data={filteredData} />
      {segmentedControl == "featured" && (
        <CardsCollection name="trending" data={filteredData} />
      )}
    </div>
  );
};

export default page;
