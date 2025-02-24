import React from "react";
import Cart from "./Cart";
import CartTwo from "./CartTwo";

const AdminSectionOne: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-5">
      <Cart text="text-white" back="" />
      <Cart text="text-black" back="bg-white" />
      <CartTwo />
    </div>
  );
};

export default AdminSectionOne;
