import React, { useState } from "react";

const IncDec = () => {
  const [no, setno] = useState(0);

  function dec() {
    setno(no - 1);
  }

  function inc() {
    setno(no + 1);
  }

  function resetHandler() {
    setno(0);
  }
  return (
    <div className=" text-center">
      <div className="flex items-center justify-between border border-black">
        <button
          onClick={dec}
          className="border border-black py-1 px-5  text-[34px]"
        >
          -
        </button>
        <h1 className="border border-black py-1 px-5  text-[34px]">{no}</h1>
        <button
          onClick={inc}
          className="border border-black py-1 px-5  text-[34px]"
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-emerald-400 py-2
      px-4 rounded-lg mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default IncDec;
