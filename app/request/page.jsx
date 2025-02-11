"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header2";
import { useRouter } from "next/navigation";
import useSearchStore from "@/store/useSearchStore";
import AnimatedGif from "../components/AnimatedGif";

const Page = () => {
  const router = useRouter();
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
  const handleAdmin = () => {
    router.push("/request/admin");
  };

  const filteredData = filterDataByName("Request");

  if (loading) {
    return <AnimatedGif />;
  }

  return (
    <div>
      <Header
        modal={false}
        name={filteredData.name}
        description={filteredData.description}
        handleGoBack={handleGoBack}
      />
      <div className="flex justify-center py-3">
        <div className="w-5/6 h-3/5">
          {filteredData.data.map((e, index) => (
            <p key={index} className="font-semibold text-center py-2">
              {index + 1}. {e}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg"
          onClick={handleAdmin}
        >
          Admin Panel
        </button>
      </div>
    </div>
  );
};

export default Page;
