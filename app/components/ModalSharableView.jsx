"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getAllData } from "../db/db";
import Detail from "./Detail";
import Charts from "./Charts";
import Question from "./Question";
import Fav from "./Fav";
import Preview from "./Preview";
import Header2 from "./Header2";

const ModalShareableView = ({ name, modal = false }) => {
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
      <Header2
        modal={modal}
        name={filteredData.name}
        description={filteredData.description}
        handleGoBack={handleGoBack}
      />
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
