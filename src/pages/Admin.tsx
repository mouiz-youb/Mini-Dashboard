import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import AdminSectionOne from "../components/AdminSectionOne";
import NavTwo from "../components/NavTwo";
function Admin() {
  return (
    <div className="flex justify-center items-center flex-col gap-3  text-[15px] md:text-xl  w-full  ">
      <Navbar />
      <NavTwo />
      <AdminSectionOne />
    </div>
  );
}

export default Admin;
