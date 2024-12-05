import React from "react";
import IncDec from "./Components/IncDec";

const App = () => {
  return (
    <div className=' flex  items-center justify-center bg-slate-600 h-[100vh] w-[100vw]'>
      <div className=" ">
        <h1>Decreement & Increement</h1>
        <IncDec />
      </div>
     
    </div>
  );
};

export default App;
