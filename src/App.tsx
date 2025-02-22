import React, { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-screen flex justify-center items-center flex-col gap-3 md:grid md:grid-cols-4 md:grid-rows-1   ">
      <Sidebar />
      <div className="flex justify-center items-center flex-col gap-5 border-2 w-full md:col-start-3 md:col-end-5">
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
