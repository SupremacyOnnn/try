"use client";
import React, { useState, useEffect } from "react";
import CardsCollection from "./components/CardsCollection";
import useSearchStore from "../store/useSearchStore";
import Header from "./components/Header";
import AnimatedGif from "./components/AnimatedGif";

const Page = () => {
  const { data, fetchData, recentTyped } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    recentTyped: state.recentTyped,
  }));
  const [loading, setLoading] = useState(true);
  const segmentedControl = useSearchStore((state) => state.segmentedControl);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    };
    loadData();
  }, [fetchData]);

  useEffect(() => {
    if (data.length > 0) {
      const filteredSuggestions = data.filter(
        (item) =>
          item.tags.some(
            (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
          ) &&
          (recentTyped === "" ||
            item.name.toLowerCase().includes(recentTyped.toLowerCase()))
      );
      setFilteredData(filteredSuggestions);
    }
  }, [data, recentTyped, segmentedControl]);

  return (
    <div>
      <Header />
      {loading ? (
        <AnimatedGif />
      ) : (
        <>
          <CardsCollection name={segmentedControl} data={filteredData} />
          {segmentedControl.toLowerCase() === "featured" && (
            <CardsCollection name="trending" data={filteredData} />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
