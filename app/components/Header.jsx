"use client";
import React from "react";
import SearchBar from "./SearchBar";
import SegmentedControl from "./SegmentedControl";
import useSearchStore from "@/store/useSearchStore";
import { useRouter } from "next/navigation";
// import useSearchStore from "../../store/useSearchStore";

const Header = () => {
  const router = useRouter();
  const updateSegmentedControl = useSearchStore(
    (state) => state.updateSegmentedControl
  );
  const handleSegmentChange = (segment) => {
    updateSegmentedControl(segment);
  };
  const handleClick = () => {
    router.push("/request");
  };

  return (
    <>
      <div className="flex justify-end mr-24 mt-2">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg"
          onClick={handleClick}
        >
          Request
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="my-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
          Library
        </p>
        <p className="mx-5 sm:mx-auto mt-4 text-gray-500">
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
    </>
  );
};

export default Header;
