import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
function SidebarC() {
  return (
    <div className=" w-full h-full flex justify-evenly items-center flex-col gap-3 p-5    ">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

export default SidebarC;
