"use client";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import SegmentedControl from "./SegmentedControl";
import useSearchStore from "../useSearchStore";

const Header = () => {
  // const selectedSegment = useSearchStore((state) => state.segmentedControl);
  const updateSegmentedControl = useSearchStore(
    (state) => state.updateSegmentedControl
  );
  const handleSegmentChange = (segment) => {
    updateSegmentedControl(segment);
  };
  const data = useSearchStore((state) => state.data);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
        Library
      </h1>
      <p className="mx-auto mt-4 text-gray-500">
        Browse for assets needed to report and present analysis.
      </p>
      <SearchBar />
      <div className="flex justify-center mt-4">
        <SegmentedControl
          segments={["Featured", "KPI", "Layout", "Storyboard"]}
          onSegmentChange={handleSegmentChange}
        />
      </div>
    </div>
  );
};

export default Header;
