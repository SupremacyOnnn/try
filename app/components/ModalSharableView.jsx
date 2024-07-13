"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllData } from "../db/db";
import Detail from "./Detail";
import Charts from "./Charts";
import Question from "./Question";
import Fav from "./Fav";
import Header2 from "./Header2";
import useSearchStore from "@/store/useSearchStore";
import AnimatedGif from "./AnimatedGif";
// import useSearchStore from "../../store/useSearchStore";

const ModalShareableView = ({ name, modal = false }) => {
  const router = useRouter();
  // const data = getAllData(name);
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      setLoading(false);
    };
    loadData();
  }, [fetchData]);

  const handleGoBack = () => {
    router.push(`/`);
  };

  const filterDataByName = (name) => {
    const lowerCaseName = name.toLowerCase();
    return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  };

  const filteredData = filterDataByName(name);
  const hasLayoutOrStoryboard =
    filteredData?.tags.includes("layout") ||
    filteredData?.tags.includes("storyboard");

  if (loading) {
    return <AnimatedGif />;
  }

  // console.log(name, data, modal);

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
      {/* <AnimatedGif
        className={"w-30 h-20"}
        src={"https://media.tenor.com/kRbTCxEMfqsAAAAi/deadline-work-hard.gif"}
        alt={"Hard Work"}
      ></AnimatedGif> */}
      {/* {hasLayoutOrStoryboard && <Preview filteredData={filteredData} />} */}
    </>
  );
};

export default ModalShareableView;
