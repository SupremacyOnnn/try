import React from "react";

const Question = ({ filteredData }) => {
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <div className="grid grid-cols-2 gap-4">
          {filteredData.questions.map((q, index) => (
            <div
              key={index}
              className="border rounded-lg p-2  hover:bg-gray-400"
            >
              <p className="font-semibold text-black">{q.question}</p>
              <p className="text-gray-600">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
