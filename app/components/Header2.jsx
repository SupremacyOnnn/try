// Header.jsx
import React from "react";

const Header = ({ handleGoBack, name, description, modal }) => {
  return (
    <nav className="p-4 items-center">
      {!modal && (
        <button
          onClick={handleGoBack}
          className="text-white bg-gray-400 hover:bg-gray-700 text-sm px-4 py-2 rounded"
        >
          Go Back
        </button>
      )}

      <h1 className="text-black text-2xl font-bold text-center flex-grow">
        {name}
        <p className="text-sm text-gray-500">{description}</p>
      </h1>
      <div className="w-16"></div>
    </nav>
  );
};

export default Header;
