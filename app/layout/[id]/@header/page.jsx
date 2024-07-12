"use client";
import { useParams } from "next/navigation";
import React from "react";

const HeaderPage = () => {
  const { id } = useParams();
  return <div>Header page {id}</div>;
};

export default HeaderPage;
