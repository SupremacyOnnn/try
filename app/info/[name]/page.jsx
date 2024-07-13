"use client";
import Charts from "@/app/components/Charts";
import Detail from "@/app/components/Detail";
import Fav from "@/app/components/Fav";
import Header from "@/app/components/Header2";
import Question from "@/app/components/Question";
import useSearchStore from "@/store/useSearchStore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ModalShareableView from "@/app/components/ModalSharableView";

const Page = ({ params: { name } }) => {
  // const router = useRouter();
  // const { data, fetchData } = useSearchStore((state) => ({
  //   data: state.data,
  //   fetchData: state.fetchData,
  // }));
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadData = async () => {
  //     await fetchData();
  //     setLoading(false);
  //   };
  //   loadData();
  // }, [fetchData]);

  // const handleGoBack = () => {
  //   router.push(`/`);
  // };

  // const filterDataByName = (name) => {
  //   const lowerCaseName = name.toLowerCase();
  //   return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // const filteredData = filterDataByName(name);
  // if (!filteredData) {
  //   return <div>Data not found</div>;
  // }

  // const hasLayoutOrStoryboard =
  //   filteredData?.tags.includes("layout") ||
  //   filteredData?.tags.includes("storyboard");

  return (
    <>
      {/* <Header
        modal={false}
        name={filteredData.name}
        description={filteredData.description}
        handleGoBack={handleGoBack}
      />
      <div className="flex flex-col items-center p-12">
        <Detail filteredData={filteredData} />
        <Charts filteredData={filteredData} />
      </div>
      <Question filteredData={filteredData} />
      <Fav filteredData={filteredData} /> */}
      {/* {hasLayoutOrStoryboard && <Preview filteredData={filteredData} />} */}
      <ModalShareableView modal={false} name={name} />
    </>
  );
};

export default Page;
