"use client";
import ModalShareableView from "@/app/components/ModalSharableView";
import React from "react";

const Page = ({ params: { name } }) => {
  return <ModalShareableView name={name} />;
};

export default Page;
