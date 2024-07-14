"use client";
import AnimatedGif from "@/app/components/AnimatedGif";
import Modal from "@/app/components/Modal";
import ModalShareableView from "@/app/components/ModalSharableView";
import Preview from "@/app/components/Preview";
import useSearchStore from "@/store/useSearchStore";
import React, { useEffect, useState } from "react";

const page = ({ params: { name } }) => {
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

  const filterDataByName = (name) => {
    const lowerCaseName = name.toLowerCase();
    return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  };

  const filteredData = filterDataByName(name);

  if (loading) {
    return <AnimatedGif />;
  }

  return (
    <Modal>
      <ModalShareableView name={name} modal={true} />
      {filteredData.affliateApplicability && <Preview name={name} />}
    </Modal>
  );
};

export default page;
