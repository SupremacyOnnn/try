import React from "react";
import { AiOutlineExport } from "react-icons/ai";

const Preview = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="max-w-xl w-full flex justify-center items-center bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-md cursor-pointer">
        <AiOutlineExport className="text-2xl mr-2" />
        <p className="text-white">Preview Layout</p>
      </div>
    </div>
  );
};

export default Preview;
