import useSearchStore from "@/store/useSearchStore";
import React from "react";
import { FaBookmark } from "react-icons/fa";
// import useSearchStore from "../../store/useSearchStore";
import { toast } from "react-toastify";

const Fav = ({ filteredData }) => {
  const { favorites, toggleFavorite } = useSearchStore();

  const isFavorite = favorites.includes(filteredData.name);
  const addToFav = (name) => {
    toggleFavorite(name);
    if (isFavorite) {
      toast(name + " removed from Favourite");
    } else {
      toast(name + " added to Favourite");
    }
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="max-w-xl w-full flex justify-center items-center bg-black text-white p-2 rounded-md cursor-pointer"
        onClick={() => addToFav(filteredData.name)}
      >
        <FaBookmark
          className={`text-2xl mr-2 ${
            isFavorite ? "text-red-500" : "text-white"
          }`}
        />
        <p className="text-white">Favourite</p>
      </div>
    </div>
  );
};

export default Fav;
