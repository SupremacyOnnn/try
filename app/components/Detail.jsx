import React from "react";

const Detail = ({ filteredData }) => {
  return (
    <>
      {filteredData && (
        <div>
          <div className="flex flex-row gap-3">
            {filteredData.metricId.map((m, index) => (
              <div
                key={index}
                className="border-2 border-black bg-white text-gray-500 rounded-md p-2"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
