import React, { useState, useEffect } from "react";
import { useClick } from "../store/useClick";

function Sidebar() {
  const click = useClick((state) => state.click);
  const setClick = useClick((state) => state.setClick);
  const [resized, setResized] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResized(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(resized, click);

  return (
    <>
      {resized < 640 ? (
        <div
          className={` justify-center items-center bg-amber-300 text-white ${
            click ? `flex` : `hidden`
          }`}
        >
          sidebar mibile display
        </div>
      ) : (
        <div
          className={`justify-center items-center bg-blue-400 ${
            !click ? `flex` : ` hidden`
          }`}
        >
          sidebar desktop display
        </div>
      )}
    </>
  );
}

export default Sidebar;
// {resized < 640 ? (
//   <div
//     className={
//       click
//         ? "flex bg-blue-500 md:col-start-1 md:col-end-2 border-2"
//         : "hidden"
//     }
//   >
//     Sidebar Hidden
//   </div>
// ) : (
//   <div
//     className={`flex justify-center items-center ${
//       click ? "flex" : "hidden"
//     }`}
//   >
//     Sidebar Display
//   </div>
// )}
