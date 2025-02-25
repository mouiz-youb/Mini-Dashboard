import React from "react";
import SideLine from "./SideLine";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrUserManager } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
const SidebarContent: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <SideLine
        title="DashBoard"
        link="/"
        classname=""
        icon={<IoHomeOutline />}
      />
      <SideLine
        title="Product"
        link="/"
        classname=""
        icon={<MdOutlineProductionQuantityLimits />}
      />
      <SideLine
        title="Managers"
        link="/"
        classname=""
        icon={<GrUserManager />}
      />
      <SideLine title="Tasks" link="/" classname="" icon={<BiTask />} />
      <SideLine title="Profile" link="/" classname="" icon={<CgProfile />} />
    </div>
  );
};

export default SidebarContent;
