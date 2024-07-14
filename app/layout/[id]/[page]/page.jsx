"use client";
import AnimatedGif from "@/app/components/AnimatedGif";
import useSearchStore from "@/store/useSearchStore";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Paginator = () => {
  const router = useRouter();
  const { id, page } = useParams();
  const { data, fetchData, addPagesToLayout } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    addPagesToLayout: state.addPagesToLayout,
  }));
  const [loading, setLoading] = useState(true);
  const [layoutData, setLayoutData] = useState(null);
  const [noOfPage, setNoOfPage] = useState(1);
  const [arr, setArr] = useState([1]);

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      setLoading(false);
    };
    loadData();
  }, [fetchData]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const foundLayoutData = data.find(
      (item) => item.name.toLowerCase() === id.toLowerCase()
    );

    if (foundLayoutData) {
      setLayoutData(foundLayoutData);
      setNoOfPage(foundLayoutData.amountOfPage);
      let arrayFrom1ToC = Array.from(
        { length: foundLayoutData.amountOfPage },
        (_, index) => index + 1
      );
      setArr(arrayFrom1ToC);
    }
  }, [id, data]);

  const navigateToPage = (pageNumber) => {
    router.push(`/layout/${id}/${pageNumber}`);
  };

  const addPage = () => {
    let pageNo = arr.length + 1;
    addPagesToLayout(id, pageNo);
  };

  // console.log(arr.length);

  if (loading) {
    return (
      <div>
        <AnimatedGif />
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 py-4">
      {arr.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`py-2 px-4 rounded-lg ${
            pageNumber == page ? "bg-gray-400 text-white" : "bg-gray-300"
          }`}
          onClick={() => navigateToPage(pageNumber)}
          disabled={pageNumber == page}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="py-2 px-4 rounded-lg bg-gray-400 text-white"
        onClick={addPage}
      >
        Add More
      </button>
    </div>
  );
};

export default Paginator;
