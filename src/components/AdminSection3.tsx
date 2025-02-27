import React from "react";
import AiEngent from "./AiEngent";
import Chart3 from "./Chat3";
import Cercle from "./Cercle";
import  Chart4  from "./Chart4";
function AdminSection3() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:grid md:grid-cols-6 md:grid-rows-1 w-full p-3  " >
      <div className="flex justify-center items-center flex-row md:col-start-1 md:col-end-4 md:gap-5 md:row-start-1 md:row-end-1">
        <Chart4/>
      </div>
      <div className="flex justify-center items-center flex-col md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-1  ">
        <Chart3/>
      </div>
    </div>
  );
}

export default AdminSection3;
{/* <AiEngent /> */}
{/* <Cercle/> */}
