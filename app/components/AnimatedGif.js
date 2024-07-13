import React from "react";

const AnimatedGif = ({ src, alt }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-lg mb-4">
        <span role="img" aria-label="Happy waiting">
          🤚
        </span>{" "}
        Wait !! Let me load first . Till then drink Water 🥛 .
      </div>
      <span>
        <img
          src={"https://media.tenor.com/tLQNV1ygf6gAAAAj/mimibubu.gif"}
          alt={"Hard Work"}
        ></img>
      </span>
    </div>
  );
};

export default AnimatedGif;
