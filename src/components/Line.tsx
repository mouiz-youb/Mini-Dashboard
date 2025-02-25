import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMicrophone } from "react-icons/io";
import { Link } from "react-router-dom";
interface Lineprops {
  icon: string;
  color: string;
  color2: string;
}
const Line: React.FC<Lineprops> = ({ icon, color, color2 }) => {
  return (
    <div className="w-full flex justify-between items-center flex-row gap-5 p-2  ">
      <div className="w-full flex justify-start items-center flex-row gap-8">
        <div
          className={`flex justify-center items-center w-[40px] h-[40px] rounded-full ${color}`}
        >
          <img src={icon} alt="" />
          {/* <IoMdMicrophone className="" /> */}
        </div>
        <div className="flex justify-center items-center flex-col gap-1 text-[16px]">
          <p>Operation Strategie</p>
          <p>28 January 2021</p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link to="/">
          <FaArrowRight className={`${color2}`} />
        </Link>
      </div>
    </div>
  );
};

export default Line;
