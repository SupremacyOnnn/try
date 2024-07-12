"use client";
import { useParams } from "next/navigation";
import React from "react";

const MainSegmentedPage = () => {
  const { page } = useParams();
  return <div>MainSegmentedPage {page}</div>;
};

export default MainSegmentedPage;
