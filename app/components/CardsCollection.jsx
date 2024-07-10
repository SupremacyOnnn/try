"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const CardsCollection = ({ name = "default name", data = [] }) => {
  if (name == "trending") {
    const filteredSuggestions = data.filter((item) =>
      item.tags.some((tag) => tag.toLowerCase() === name)
    );
    data = filteredSuggestions;
  }
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  name = capitalizeFirstLetter(name);
  const [showAll, setShowAll] = useState(false);
  const [lim, setLim] = useState(8);
  const len = data.length;

  // const cardsArray = Array.from({ length: len }, (_, i) => i + 1);

  const updateLimit = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setLim(6);
    } else if (width >= 768) {
      setLim(6);
    } else {
      setLim(4);
    }
  };

  useEffect(() => {
    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return (
    <>
      <div className="w-full flex justify-start mt-4 ml-24">
        <p className="text-4xl font-sans font-bold">{name}</p>
      </div>
      <main className="flex flex-row items-center px-24 py-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.slice(0, showAll ? len : lim).map((card) => (
          <Cards key={card.name} id={card.name} data={card} />
        ))}

        {data.length > lim ? (
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 flex items-center">
            <button
              className="mt-4 p-2 bg-gray-400 text-white rounded mx-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default CardsCollection;
