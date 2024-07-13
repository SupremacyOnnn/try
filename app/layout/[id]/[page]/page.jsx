"use client";
import useSearchStore from "@/store/useSearchStore";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Paginator = () => {
  const { page } = useParams();
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(data);
  return <div>page : {page}</div>;
};

export default Paginator;
