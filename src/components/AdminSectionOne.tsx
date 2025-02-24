import React from "react";
import Cart from "./Cart";

const AdminSectionOne: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-5">
      <Cart text="text-white" back="" />
      <Cart text="text-black" back="bg-white" />
      <Cart />
    </div>
  );
};

export default AdminSectionOne;
