"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSearchStore from "@/store/useSearchStore";
import Header from "@/app/components/Header2";
import AnimatedGif from "@/app/components/AnimatedGif";

const Page = () => {
  const router = useRouter();
  const { data, fetchData, approveRequest } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    approveRequest: state.approveRequest,
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

  const filteredData = filterDataByName("Request");

  const handleApprove = (request) => {
    const name = request.split("Access request raised for ")[1];
    approveRequest(name);
  };

  if (loading) {
    return <AnimatedGif />;
  }

  return (
    <div>
      <Header
        modal={false}
        name={"Admin Request Planner"}
        description={"Approve or reject request"}
        handleGoBack={handleGoBack}
      />
      <div className="flex justify-center py-3">
        <div className="w-5/6 h-3/5">
          {filteredData.data.map((e, index) => (
            <div className="flex justify-center gap-3" key={index}>
              <p className="font-semibold text-center py-2 m-2">
                {index + 1}. {e}
              </p>
              <button
                onClick={() => handleApprove(e)}
                className="bg-green-400 text-white p-2 m-2 rounded-lg"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
