import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import AdminSectionOne from "../components/AdminSectionOne";
function Admin() {
  return (
    <div className="flex justify-center items-center flex-col gap-3 border-2 text-[15px] md:text-xl  w-full  ">
      <Navbar />
      <AdminSectionOne />
    </div>
  );
}

export default Admin;
