"use client";
import React, { useState, useEffect } from "react";
import CardsCollection from "./components/CardsCollection";
import useSearchStore from "./useSearchStore";

const page = () => {
  const data = useSearchStore((state) => state.data);
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
      {/* <CardsCollection name="Trending" />
      <div className="mt-4">
        <h2 className="text-lg font-bold">Fetched Data:</h2>
        <pre className="text-sm text-gray-600">
          {JSON.stringify(filteredData, null, 2)}
        </pre>
      </div>
      <p>{searchedItem[0]}</p> */}
      <CardsCollection name={segmentedControl} data={filteredData} />
      {segmentedControl == "featured" && (
        <CardsCollection name="trending" data={filteredData} />
      )}
    </div>
  );
};

export default page;
