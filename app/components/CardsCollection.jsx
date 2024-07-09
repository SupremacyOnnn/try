"use client";
import React, { useState, useEffect } from "react";
import Cards from "./cards";

const CardsCollection = ({ name = "default name", data = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const [lim, setLim] = useState(8);
  const len = 10;

  const cardsArray = Array.from({ length: len }, (_, i) => i + 1);

  const updateLimit = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setLim(8);
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
        <h1 className="text-4xl font-sans font-bold">{name}</h1>
      </div>
      <main className="flex flex-row items-center px-24 py-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsArray.slice(0, showAll ? len : lim).map((id) => (
          <Cards key={id} id={id} />
        ))}

        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 flex items-center">
          <button
            className="mt-4 p-2 bg-gray-400 text-white rounded mx-auto"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </main>
    </>
  );
};

export default CardsCollection;
