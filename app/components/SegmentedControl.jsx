import React, { useState } from "react";
import PropTypes from "prop-types";

const SegmentedControl = ({ segments, onSegmentChange }) => {
  const [selectedSegment, setSelectedSegment] = useState(segments[0]);

  const handleSegmentClick = (segment) => {
    setSelectedSegment(segment);
    onSegmentChange(segment);
  };

  return (
    <div className="flex rounded-md border-2 border-solid bg-gray-200 border-gray-400">
      {segments.map((segment, index) => (
        <button
          key={index}
          onClick={() => handleSegmentClick(segment)}
          className={`w-[135px] px-3 py-1 rounded-sm transition-all duration-300 text-gray-400 ${
            selectedSegment === segment
              ? "bg-white text-black font-bold"
              : "bg-gray-200 text-gray-700"
          } ${index < segments.length - 1 ? "border-r border-gray-400" : ""}`}
        >
          {segment}
        </button>
      ))}
    </div>
  );
};

SegmentedControl.propTypes = {
  segments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSegmentChange: PropTypes.func.isRequired,
};

export default SegmentedControl;
