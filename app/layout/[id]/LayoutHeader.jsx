"use client";
import { getAllData } from "@/app/db/db";
import useSearchStore from "@/store/useSearchStore";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// import useSearchStore from "../../store/useSearchStore";

const LayoutHeader = ({ modal = false }) => {
  const router = useRouter();
  const { id } = useParams();
  // const data = getAllData();
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  useEffect(() => {
    fetchData();
  }, []);
  const filterDataByName = (name) => {
    const lowerCaseName = name.toLowerCase();
    return data?.find((item) => item.name.toLowerCase() === lowerCaseName);
  };
  const filteredData = filterDataByName(id);
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <div className="p-4 items-center">
        {!modal && (
          <button
            onClick={handleGoBack}
            className="text-white bg-gray-400 hover:bg-gray-700 text-sm px-4 py-2 rounded"
          >
            Go Back
          </button>
        )}

        <div className="text-black text-2xl font-bold text-center flex-grow">
          {filteredData.name}
          <p className="text-sm text-gray-500">{filteredData.description}</p>
        </div>
        <div className="w-16"></div>
      </div>
    </>
  );
};

export default LayoutHeader;

// "use client";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// const LayoutHeader = ({ modal = false }) => {
//   const router = useRouter();
//   const { id } = useParams();
//   const [filteredData, setFilteredData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/data/${id}`);
//         if (!response.ok) {
//           throw new Error("Data not found");
//         }
//         const result = await response.json();
//         setFilteredData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleGoBack = () => {
//     router.back();
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!filteredData) {
//     return <div>No data found</div>;
//   }

//   return (
//     <>
//       <div className="p-4 items-center">
//         {!modal && (
//           <button
//             onClick={handleGoBack}
//             className="text-white bg-gray-400 hover:bg-gray-700 text-sm px-4 py-2 rounded"
//           >
//             Go Back
//           </button>
//         )}
//         <div className="text-black text-2xl font-bold text-center flex-grow">
//           {filteredData.name}
//           <p className="text-sm text-gray-500">{filteredData.description}</p>
//         </div>
//         <div className="w-16"></div>
//       </div>
//     </>
//   );
// };

// export default LayoutHeader;
