import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import AdminSectionOne from "../components/AdminSectionOne";
import NavTwo from "../components/NavTwo";
import Chart2 from "../components/Chart2";
import AdminSectionTwo from "../components/AdminSectionTwo";
function Admin() {
  return (
    <div className="flex justify-center items-center flex-col gap-3  text-[15px] md:text-xl  w-full  ">
      <Navbar />
      <NavTwo />
      <AdminSectionOne />
      {/* <AdminSectionTwoX /> */}
      <AdminSectionTwo />
      {/* <Chart2 /> */}
    </div>
  );
}

export default Admin;
