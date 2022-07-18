import React from "react";
import { handleLogger } from "../../utils/handleLogger";
import { ArrowIcon } from "../../utils/icons";

const ArrowKeys = () => {
  return (
    <div className="w-20 bg-white ml-5 h-20 rounded-md items-center text-center grid grid-cols-3">
      <button
        className="col-start-2"
        name="up-arrow"
        onClick={(e) => handleLogger(e.currentTarget.name)}
      >
        <ArrowIcon />
      </button>
      <button
        className="col-start-1 rotate-[-90deg]"
        name="left-arrow"
        onClick={(e) => handleLogger(e.currentTarget.name)}
      >
        <ArrowIcon />
      </button>
      <button
        className="col-start-3 rotate-90"
        name="right-arrow"
        onClick={(e) => handleLogger(e.currentTarget.name)}
      >
        <ArrowIcon />
      </button>
      <button
        className="col-start-2 rotate-180"
        name="down-arrow"
        onClick={(e) => handleLogger(e.currentTarget.name)}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default ArrowKeys;
