import React, { use } from "react";
import { useClick } from "../store/useClick";
function Navbar() {
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);

  console.log(click);
  return (
    <div className="flex justify-center items-center felx-row gap-2 ">
      <div onClick={() => setClick()} className="cursor-pointer">
        logo{" "}
      </div>
      <div>
        <input type="text" placeholder="Enter the text" />
      </div>
      <div>profile component</div>
    </div>
  );
}

export default Navbar;
