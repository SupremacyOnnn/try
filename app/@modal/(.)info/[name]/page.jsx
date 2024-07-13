"use client";
import Modal from "@/app/components/Modal";
import ModalShareableView from "@/app/components/ModalSharableView";
import Preview from "@/app/components/Preview";
import React, { useEffect } from "react";
import useSearchStore from "@/store/useSearchStore";
import Detail from "@/app/components/Detail";
import Charts from "@/app/components/Charts";
import Question from "@/app/components/Question";
import Fav from "@/app/components/Fav";
import Header from "@/app/components/Header2";

const page = ({ params: { name } }) => {
  // const { data } = useSearchStore((state) => ({
  //   data: state.data,
  // }));
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const handleGoBack = () => {
  //   router.push(`/`);
  // };

  // const filterDataByName = (name) => {
  //   const lowerCaseName = name.toLowerCase();
  //   return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  // };

  // const filteredData = filterDataByName(name);
  // const hasLayoutOrStoryboard =
  //   filteredData?.tags.includes("layout") ||
  //   filteredData?.tags.includes("storyboard");
  return (
    <Modal>
      {/*<div>
         <Header
          modal={true}
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
      </div> */}
      <ModalShareableView name={name} modal={true} />
      <Preview name={name} />
    </Modal>
  );
};

export default page;
