import React from "react";
import Line from "./Line";
import iconLine1 from "../images/iconLine1.svg";
import iconLine2 from "../images/iconLine2.svg";
import iconLine3 from "../images/iconLine3.svg";
const CartTwo: React.FC = () => {
  return (
    <div className="w-[300px] rounded-2xl shadow-2xl">
      <Line icon={iconLine2} color2="text-[#FF4B4A]" color="bg-[#FFF5D9]" />
      <Line icon={iconLine3} color2="text-[#41D4A8]" color="bg-[#E7EDFF]" />
      <Line icon={iconLine1} color2="text-[#41D4A8]" color="bg-[#DCFAF8]" />
    </div>
  );
};

export default CartTwo;
