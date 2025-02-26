import React from "react";
import AiEngent from "./AiEngent";

function AdminSection3() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:grid md:grid-cols-5 md:grid-rows-1 w-full p-3">
      <div className="flex justify-center items-center flex-col md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-1 border-2">
        <AiEngent />
      </div>
      <div className="flex justify-center items-center flex-col md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-1 border-2"></div>
    </div>
  );
}

export default AdminSection3;
