import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const Charts = ({ filteredData }) => {
  return (
    <>
      {filteredData.type === "card" ? (
        <div className="max-w-md mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden shrink">
          <div className="md:flex justify-around">
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
              <p className="mt-2 text-green-600 text-center">
                {filteredData.data}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-xl mt-10 mx-auto bg-white rounded-xl shadow-md object-fill overflow-x-auto">
            <div className="md:flex justify-around">
              <div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={filteredData.data}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Charts;
