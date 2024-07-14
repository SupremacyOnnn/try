"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Link from "next/link";

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
  const [lim, setLim] = useState(4);
  const len = data.length;

  const updateLimit = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setLim(6);
    } else if (width >= 768) {
      setLim(4);
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
      <main className="px-24 py-5 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, showAll ? len : lim).map((card) => (
          <Link key={card.name} href={`/info/${card.name}`}>
            <Cards key={card.name} id={card.name} data={card} />
          </Link>
        ))}

        {data.length > lim && (
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3 flex items-center">
            <button
              className="mt-4 p-2 bg-gray-400 text-white rounded mx-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default CardsCollection;
