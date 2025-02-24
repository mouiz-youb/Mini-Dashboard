import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
function SidebarC() {
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col gap-3   ">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

export default SidebarC;
