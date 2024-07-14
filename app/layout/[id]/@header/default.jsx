"use client";
import AnimatedGif from "@/app/components/AnimatedGif";
import useSearchStore from "@/store/useSearchStore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderDefault = () => {
  const { id, page } = useParams();
  const { data, fetchData, addKpiToLayout, addKpiToPages } = useSearchStore(
    (state) => ({
      data: state.data,
      fetchData: state.fetchData,
      addKpiToLayout: state.addKpiToLayout,
      addKpiToPages: state.addKpiToPages,
    })
  );
  const [loading, setLoading] = useState(true);
  const [suggestionNames, setSuggestionNames] = useState([]);
  const [layoutData, setLayoutData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      setLoading(false);
    };
    loadData();
  }, [fetchData]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const filteredNames = data
      .filter((item) => item.tags.includes("Kpi") && item.affliateApplicability)
      .map((item) => item.name);

    const foundLayoutData = data.find(
      (item) => item.name.toLowerCase() === id.toLowerCase()
    );

    if (foundLayoutData && Array.isArray(foundLayoutData.KpiUsed)) {
      const filteredNamesWithoutUsedKpi = filteredNames.filter(
        (name) => !foundLayoutData.KpiUsed.includes(name)
      );
      setSuggestionNames(filteredNamesWithoutUsedKpi);
    } else {
      setSuggestionNames(filteredNames);
    }

    setLayoutData(foundLayoutData);
  }, [id, data]);

  function setKpiUsed(name) {
    if (layoutData) {
      addKpiToLayout(layoutData.name, name);
      addKpiToPages(layoutData.name, name, page);
    }
  }

  if (loading) {
    return (
      <div>
        <AnimatedGif />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      {layoutData ? (
        <>
          <p className="font-bold text-sm text-center">Kpi to be used</p>
          <div className="w-5/6 border rounded-lg flex justify-around flex-wrap border-black mx-auto my-4 p-2">
            {suggestionNames.map((name, index) => (
              <button
                key={index}
                className="bg-gray-500 text-white rounded px-4 py-2 m-1"
                onClick={() => setKpiUsed(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>No layout data found for ID: {id}</p>
      )}
    </div>
  );
};

export default HeaderDefault;
