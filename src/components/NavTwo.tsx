import React from "react";
import { Link } from "react-router-dom";

function NavTwo() {
  return (
    <div className="flex justify-evenly items-center flex-row gap-3 w-full">
      <div className="flex justify-center items-center">
        <p>My Cart</p>
      </div>
      <div className="flex justify-between items-center flex-row gap-9">
        <Link to="/" className="text-sm">
          See all
        </Link>
        <p>Strategy</p>
      </div>
    </div>
  );
}

export default NavTwo;
