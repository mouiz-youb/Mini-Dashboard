import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import "../App.css";
interface CartProps {
  text?: string;
  back?: string;
  image: string;
  image2: string;
  color: string;
  color2: string;
}
const Cart: React.FC<CartProps> = ({
  text,
  back,
  image,
  image2,
  color,
  color2,
}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col  gap-5  p-3 ${text} rounded-2xl  w-[300px] shadow-2xl ${back}`}
    >
      <div className="flex justify-between items-center flex-row gap-4 w-full ">
        <div className="flex justify-center items-center flex-col ">
          <p className={`text-sm ${color}`}> Total Revenue</p>
          <p>$5,756,596</p>
        </div>
        <div className="flex justify-center items-center ">
          <img src={image2} alt="" />
          {/* <FcSimCardChip className="text-3xl text-white" />{" "} */}
        </div>
      </div>
      <div className="flex justify-between items-center flex-row w-full ">
        <div className="flex justify-center  items-center flex-col   ">
          <p className={`text-sm ${color}`}>CARD HOLDER</p>
          <p className="text-sm">VALID THRU</p>
        </div>
        <div className="flex justify-center  items-center flex-col  text-sm  ">
          <p className={`text-sm ${color} `}>Eddy Cusuma</p>
          <p>12/22</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-row gap-5  ">
        <p className="text-xl">3778 **** **** 1234</p>
        <img src={image} alt="" className="w-[30px]" />
        {/* <FcSimCardChip className="text-3xl" /> */}
      </div>
    </div>
  );
};

export default Cart;
