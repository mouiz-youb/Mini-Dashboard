import React, { useState, useEffect } from "react";
import { useClick } from "../store/useClick";
import SidebarC from "./SidebarC";
import "../App.css";
function Sidebar() {
  const click = useClick((state) => state.click);
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
      {resized < 768 ? (
        <div
          className={`${
            click
              ? `flex  justify-center items-center bg-white z-10 h-screen border-2 ${
                  resized <= 768 ? `absolute top-0 left-0 -z-10 w-1/2` : ``
                }  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1   `
              : `hidden`
          }`}
        >
          <SidebarC />
        </div>
      ) : (
        <div
          className={` ${
            !click
              ? `flex justify-center items-center   h-screen border-2 ${
                  resized <= 768 ? `absolute top-0 left-0  w-1/2` : ``
                }  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1    `
              : ` hidden`
          }`}
        >
          <SidebarC />
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
