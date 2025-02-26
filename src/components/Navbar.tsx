import React, { use } from "react";
import { useClick } from "../store/useClick";
import { IoSettings } from "react-icons/io5";
import Profile from "./Profile";
function Navbar() {
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);

  console.log(click);
  return (
    <div className="flex justify-between items-center flex-row gap-2 w-full pt-2 pb-2 pl-4 pr-4  text-sm    ">
      <div onClick={() => setClick()} className="cursor-pointer z-20">
        Campany Name
      </div>
      <div className="flex justify-center items-center flex-row gap-8">
        <div className="flex justify-center items-center flex-row gap-1 shadow-xl  pt-1 pb-1 pl-2 pr-2 rounded-xl">
          <IoSettings />
          <input
            type="text"
            placeholder="Search for something"
            className="  pt-1 pb-1 pl-2 pr-2 md:text-xl "
          />
        </div>
        <div className="flex justify-center items-center ">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
