import React, { use } from "react";
import { useClick } from "../store/useClick";
import { Calendar } from "@mantine/dates";
function Navbar() {
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);

  console.log(click);
  return (
    <div className="flex justify-between items-center flex-row gap-2 w-full pt-2 pb-2 pl-4 pr-4    ">
      <div onClick={() => setClick()} className="cursor-pointer">
        logo{" "}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the text"
          className=" shadow-xl  pt-1 pb-1 pl-2 pr-2 rounded-xl "
        />
      </div>
      <div className="flex justify-center items-center ">profile component</div>
    </div>
  );
}

export default Navbar;
