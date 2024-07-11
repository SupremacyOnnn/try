"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getAllData } from "../db/db";
import Detail from "./Detail";
import Charts from "./Charts";
import Question from "./Question";
import Fav from "./Fav";
import Preview from "./Preview";

const ModalShareableView = ({ name }) => {
  const router = useRouter();
  const data = getAllData(name);

  const handleGoBack = () => {
    router.back();
  };

  const filterDataByName = (name) => {
    const lowerCaseName = name.toLowerCase();
    return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  };

  const filteredData = filterDataByName(name);
  const hasLayoutOrStoryboard =
    filteredData?.tags.includes("layout") ||
    filteredData?.tags.includes("storyboard");

  console.log(name, filterDataByName);

  return (
    <>
      <nav className="p-4 flex items-center justify-between">
        <button
          onClick={handleGoBack}
          className="text-white bg-gray-400 hover:bg-gray-700 text-sm px-4 py-2 rounded"
        >
          Go Back
        </button>
        <h1 className="text-black text-2xl font-bold text-center flex-grow">
          {filteredData?.name}
          <p className="text-sm text-gray-500">{filteredData?.description}</p>
        </h1>
        <div className="w-16"></div>
      </nav>
      <div className="flex flex-col items-center p-12">
        <Detail filteredData={filteredData} />
        <Charts filteredData={filteredData} />
      </div>
      <Question filteredData={filteredData} />
      <Fav filteredData={filteredData} />
      {hasLayoutOrStoryboard && <Preview filteredData={filteredData} />}
    </>
  );
};

export default ModalShareableView;
