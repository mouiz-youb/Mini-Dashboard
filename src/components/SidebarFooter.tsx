import React from "react";
import SideLine from "./SideLine";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
const SidebarFooter: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 w-full">
      <SideLine
        title="Log out "
        link="/"
        icon={<IoIosLogOut />}
        classname="bg-purple-400 text-white hover:bg-white hover:text-purple-400 hover:shadow rounded-2xl p-2 "
      />
      <SideLine
        title="Log out "
        link="/"
        icon={<IoIosLogIn />}
        classname="bg-purple-400 text-white hover:bg-white hover:text-purple-400 hover:shadow rounded-2xl p-2 "
      />
    </div>
  );
};

export default SidebarFooter;
