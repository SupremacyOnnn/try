"use client";
import React, { useState, useEffect } from "react";
import CardsCollection from "./components/CardsCollection";
import useSearchStore from "../store/useSearchStore";
import Header from "./components/Header";
import { getAllData } from "./db/db";
import AnimatedGif from "./components/AnimatedGif";

const Page = () => {
  const { data, fetchData } = useSearchStore((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  const [loading, setLoading] = useState(true);
  const searchedItem = useSearchStore((state) => state.searchHistory);
  const segmentedControl = useSearchStore((state) => state.segmentedControl);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    };
    loadData();
  }, [fetchData]);

  useEffect(() => {
    if (data.length > 0 && searchedItem.length > 0) {
      const filteredSuggestions = data.filter(
        (item) =>
          item.tags.some(
            (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
          ) && item.name.toLowerCase().includes(searchedItem[0].toLowerCase())
      );
      setFilteredData(filteredSuggestions);
    } else if (data.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.tags.some(
          (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
        )
      );
      setFilteredData(filteredSuggestions);
    }
  }, [data, searchedItem, segmentedControl]);

  return (
    <div>
      <Header />
      {loading ? (
        <AnimatedGif />
      ) : (
        <>
          <CardsCollection name={segmentedControl} data={filteredData} />
          {segmentedControl.toLowerCase() === "featured" && (
            <CardsCollection name="trending" data={filteredData} />
          )}
        </>
      )}
    </div>
  );
};

export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import CardsCollection from "./components/CardsCollection";
// import useSearchStore from "../store/useSearchStore";
// import Header from "./components/Header";

// const Page = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const searchedItem = useSearchStore((state) => state.searchHistory);
//   const segmentedControl = useSearchStore((state) => state.segmentedControl);

//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/data`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (searchedItem.length > 0) {
//       const filteredSuggestions = data.filter(
//         (item) =>
//           item.tags.some(
//             (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
//           ) && item.name.toLowerCase().includes(searchedItem[0].toLowerCase())
//       );
//       setFilteredData(filteredSuggestions);
//     } else {
//       const filteredSuggestions = data.filter((item) =>
//         item.tags.some(
//           (tag) => tag.toLowerCase() === segmentedControl.toLowerCase()
//         )
//       );
//       setFilteredData(filteredSuggestions);
//     }
//   }, [data, searchedItem, segmentedControl]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <CardsCollection name={segmentedControl} data={filteredData} />
//       {segmentedControl.toLowerCase() === "featured" && (
//         <CardsCollection name="trending" data={filteredData} />
//       )}
//     </div>
//   );
// };

// export default Page;
