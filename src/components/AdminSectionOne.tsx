import React from "react";
import Cart from "./Cart";
import CartTwo from "./CartTwo";
import iconCart1 from "../images/iconCart1.svg";
import iconCart2 from "../images/iconCart2.svg";
import ChipCard1 from "../images/ChipCard1.svg";
import ChipCard3 from "../images/ChipCard3.svg";
const AdminSectionOne: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-5">
      <Cart
        text="text-white"
        image={iconCart1}
        image2={ChipCard3}
        back="bg-gradient-to-t from-[#997ff0] to-[#9034e0]"
        color="text-white"
        color2=""
      />
      <Cart
        text="text-black"
        image={iconCart2}
        image2={ChipCard1}
        back="bg-white"
        color="text-purple-600"
        color2=""
      />
      <CartTwo />
    </div>
  );
};

export default AdminSectionOne;
