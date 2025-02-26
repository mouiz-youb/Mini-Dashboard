import React from "react";
import MiniProfile from "./MiniProfile";
import Swith from "./Swith";
import { FaChevronRight } from "react-icons/fa";
function AiEngent() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4 w-full shadow-2xl rounded-2xl ">  
      <p>Ai Agent Alert And Desicion</p>
      <div className="flex justify-center items-center flex-col gap-4 p-5 w-full  rounded-xl">
        <div className="flex justify-center items-center flex-row gap-8 ">
          <MiniProfile/>
          <MiniProfile/>
          <MiniProfile/>
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-xl ">
          <FaChevronRight/>
        </div>
        </div>
        <div className="flex justify-between items-center flex-row gap-3 w-full">
          <p className="text-sm text-blue-300">Write amount</p>
          <Swith/>
        </div>
      </div>
    </div>
  );
}

export default AiEngent;
