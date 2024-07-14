"use client";
import AnimatedGif from "@/app/components/AnimatedGif";
import Charts from "@/app/components/Charts";
import useSearchStore from "@/store/useSearchStore";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import PptxGenJS from "pptxgenjs";
import html2canvas from "html2canvas";
import { FaRegWindowClose } from "react-icons/fa";

const MainSegmentedPage = () => {
  const { id, page } = useParams();
  const [layoutData, setLayoutData] = useState();
  const [pageKpiUsed, setPageKpiUsed] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  const [loading, setLoading] = useState(true);

  const chartRefs = useRef([]);

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
      const kpiUsed = foundLayoutData.pages[`page${page}`] || [];
      setPageKpiUsed(kpiUsed);

      const displayData = kpiUsed
        .map((kpiName) => data.find((item) => item.name === kpiName))
        .filter((item) => item !== undefined);

      setDisplayData(displayData);
    }
  }, [id, page, data]);

  const exportToPPT = async () => {
    const pptx = new PptxGenJS();

    for (let i = 0; i < displayData.length; i++) {
      const item = displayData[i];
      const chartRef = chartRefs.current[i];

      if (chartRef) {
        const canvas = await html2canvas(chartRef);
        const dataURL = canvas.toDataURL("image/png");

        const slide = pptx.addSlide();
        slide.addText(item.name, { x: 0.5, y: 0.5, fontSize: 18, bold: true });
        slide.addImage({
          data: dataURL,
          x: 0.5,
          y: 1.0,
          w: 8.0,
          h: 4.5,
        });
      }
    }

    pptx.writeFile({ fileName: `${id}_page${page}_charts.pptx` });
  };

  if (loading) {
    return (
      <div>
        <AnimatedGif />
      </div>
    );
  }

  return (
    <>
      <div className="h-3/5 flex items-center justify-center">
        <div className="bg-white rounded-lg w-5/6 h-5/6 overflow-auto p-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayData.length > 0 ? (
              displayData.map((item, index) => (
                <Draggable key={index}>
                  <div
                    className="mb-4"
                    ref={(el) => (chartRefs.current[index] = el)}
                  >
                    <Charts filteredData={item} />
                  </div>
                </Draggable>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="font-sans font-bold text-lg">
                  No KPI data found for this page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={exportToPPT}
        >
          Export to PPT
        </button>
      </div>
    </>
  );
};

export default MainSegmentedPage;
