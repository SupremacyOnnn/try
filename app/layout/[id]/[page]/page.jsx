"use client";
import { useParams } from "next/navigation";
import React from "react";

const Paginator = () => {
  const { page } = useParams();
  return <div>page : {page}</div>;
};

export default Paginator;
