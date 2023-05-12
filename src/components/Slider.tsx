"use client";

import React from "react";
import { useState } from "react";

const Slider = () => {
  const [value, setvalue] = useState(10);
  const [page, setpage] = useState(1);

  function handleClick() {
    if (value < 100) {
      setvalue(value + 10);
    }
  }
  return (
    <>
      <div className="w-full h-1 bg-gray-500 rounded-full flex items-center">
        <div
          className="h-full  bg-white rounded-full"
          style={{ width: `${value}%` }}>
          {/* <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
          onClick={handleClick}>
          Increase
        </button> */}
        </div>
      </div>
      <div className="ml-12">Pages</div>
    </>
  );
};

export default Slider;
