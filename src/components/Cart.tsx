import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import "../App.css";
interface CartProps {
  text?: string;
  back?: string;
}
const Cart: React.FC<CartProps> = ({ text, back }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col  gap-5  p-3 ${text} rounded-2xl lineaire w-[300px] shadow-2xl ${back}`}
    >
      <div className="flex justify-between items-center flex-row gap-4 w-full ">
        <div className="flex justify-center items-center flex-col ">
          <p className="text-sm"> Total Revenue</p>
          <p>$5,756,596</p>
        </div>
        <div className="flex justify-center items-center ">
          <FcSimCardChip className="text-3xl text-white" />{" "}
        </div>
      </div>
      <div className="flex justify-between items-center flex-row w-full ">
        <div className="flex justify-center  items-center flex-col   ">
          <p className="text-sm">CARD HOLDER</p>
          <p className="text-sm">VALID THRU</p>
        </div>
        <div className="flex justify-center  items-center flex-col   ">
          <p>Eddy Cusuma</p>
          <p>12/22</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-row gap-5  ">
        <p className="text-xl">3778 **** **** 1234</p>
        <FcSimCardChip className="text-3xl" />
      </div>
    </div>
  );
};

export default Cart;
