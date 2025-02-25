import React from "react";
import Chart2 from "./Chart2";
import Cercle from "./Cercle";

function AdminSectionTwo() {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 md:grid md:grid-cols-4 md:grid-rows-1 ">
      <Chart2 />
      <div className="flex justify-center items-center md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-1">
        <Cercle />
      </div>
    </div>
  );
}

export default AdminSectionTwo;
