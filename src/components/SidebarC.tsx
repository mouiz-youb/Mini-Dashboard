import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
function SidebarC() {
  return (
    <div className="bg-gray-400 grid-rows-10 grid-col-1 gap-2 border-2 ">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

export default SidebarC;
