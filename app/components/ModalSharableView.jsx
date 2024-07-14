"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import Charts from "./Charts";
import Question from "./Question";
import Fav from "./Fav";
import Header2 from "./Header2";
import useSearchStore from "@/store/useSearchStore";
import AnimatedGif from "./AnimatedGif";
import { AiOutlineExport } from "react-icons/ai";

const ModalShareableView = ({ name, modal = false }) => {
  const router = useRouter();
  const { data, fetchData, requestAccess, addRequestAccessToRequest } =
    useSearchStore((state) => ({
      data: state.data,
      fetchData: state.fetchData,
      requestAccess: state.requestAccess,
      addRequestAccessToRequest: state.addRequestAccessToRequest,
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

  const filteredData = filterDataByName(name);
  const hasLayout = filteredData?.tags.includes("layout");
  const hasStory = filteredData?.tags.includes("storyboard");

  function handleClick() {
    if (hasLayout) {
      router.push(`/layout/${name}/1`);
    } else {
      router.push(`/storyboard/${name}`);
    }
  }

  const handleRequestAccess = () => {
    requestAccess(filteredData.name);
    addRequestAccessToRequest(filteredData.name);
  };

  if (loading) {
    return <AnimatedGif />;
  }

  return (
    <>
      {filteredData.affliateApplicability ? (
        <>
          <Header2
            modal={modal}
            name={filteredData.name}
            description={filteredData.description}
            handleGoBack={handleGoBack}
          />
          <div className="flex flex-col items-center p-12">
            <Detail filteredData={filteredData} />
            {!hasLayout && !hasStory && <Charts filteredData={filteredData} />}
          </div>
          {(hasLayout || hasStory) && (
            <>
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <p className="font-bold text-center">
                      {filteredData.noOfKpiUse}
                    </p>
                    <p className="text-sm text-center">Kpi Used</p>
                  </div>
                  <div className="col-span-1">
                    <p className="font-bold text-center">
                      {filteredData.amountOfPage}
                    </p>
                    <p className="text-sm text-center">Pages</p>
                  </div>
                  <div className="col-span-1">
                    <p className="font-bold text-center">
                      {filteredData.visualAvialable}
                    </p>
                    <p className="text-sm text-center">Type</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <img
                  src="https://visme.co/blog/wp-content/uploads/2018/03/How-Grids-Can-Help-You-Create-Professional-Looking-Designs-Composite-Grids.png"
                  alt="Layout example"
                  className="max-w-md max-h-md rounded-lg"
                />
              </div>
            </>
          )}
          <Question filteredData={filteredData} />
          <Fav filteredData={filteredData} />

          {(hasLayout || hasStory) && (
            <div className="w-full flex justify-center py-4">
              <div
                onClick={handleClick}
                className="max-w-xl w-full flex justify-center items-center bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-md cursor-pointer"
              >
                <AiOutlineExport className="text-2xl mr-2" />
                <p className="text-white">
                  Preview {hasLayout ? "Layout" : "StoryBoard"} Pages
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <Header2
              modal={modal}
              name={filteredData.name}
              description={filteredData.description}
              handleGoBack={handleGoBack}
            />
            <div className="flex justify-center">
              <img
                className="h-20 w-20"
                src="https://media.tenor.com/NdxkzdUbDikAAAAi/no-nope.gif"
                alt="no access"
              />
            </div>

            <div className="max-w-md mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden shrink">
              <div className="md:flex justify-around items-center">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-xl text-black font-semibold text-center">
                    {filteredData.name}
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-sm leading-tight font-medium text-gray-400 hover:underline"
                  >
                    {filteredData.description}
                  </a>
                  {!filteredData.submitted ? (
                    <>
                      <div className="flex flex-col justify-center my-2 items-center">
                        <button
                          className="py-2 px-4 bg-green-600 text-white rounded-lg"
                          onClick={handleRequestAccess}
                        >
                          Request Access
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col justify-center my-2 items-center">
                        <img
                          className="h-20 w-20 my-2"
                          src="https://media.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif"
                          alt="done"
                        />
                        <p className="font-bold text-green-600 text-sm">
                          Request Submitted
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalShareableView;
