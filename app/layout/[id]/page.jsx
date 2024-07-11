"use client";
import { getAllData } from "@/app/db/db";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const page = ({ modal = false }) => {
  const router = useRouter();
  const { id } = useParams();
  const data = getAllData();
  const filterDataByName = (name) => {
    const lowerCaseName = name.toLowerCase();
    return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  };
  const filteredData = filterDataByName(id);
  const handleGoBack = () => {
    router.back();
  };
  return (
    // <div className="p-4 items-center">
    //   {!modal && (
    //     <button
    //       onClick={handleGoBack}
    //       className="text-white bg-gray-400 hover:bg-gray-700 text-sm px-4 py-2 rounded"
    //     >
    //       Go Back
    //     </button>
    //   )}

    //   <h1 className="text-black text-2xl font-bold text-center flex-grow">
    //     {filteredData.name}
    //     <p className="text-sm text-gray-500">{filteredData.description}</p>
    //   </h1>
    //   <div className="w-16"></div>
    // </div>
    <div>
      <p>Hi</p>Hello
    </div>
  );
};

export default page;
