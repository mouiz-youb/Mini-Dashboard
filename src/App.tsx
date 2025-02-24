import React, { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";
import { useClick } from "./store/useClick";
import "./App.css";
function App() {
  const click = useClick((state) => state.click);
  return (
    <div className="w-screen gap-5  grid grid-cols-4 grid-rows-1 md:grid-cols-6  transition-css  h-screen  ">
      <Sidebar />
      <div
        className={
          !click
            ? `col-start-1 col-end-7 row-start-1 row-end-1 md:col-start-2 md:col-end-7 md:row-start-1 md:row-end-1 overflow-y-scroll  `
            : `col-start-2 col-end-7 row-start-1 row-end-1 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-1 overflow-y-scroll   `
        }
      >
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
// `col-start-1 col-end-5 row-start-1 row-end-1 bg-red-200`
// `gap-5 border-2  col-start-2 col-end-5 row-start-1 row-end-1 bg-blue-200 `
// {
//   !click
//     ? `col-start-1 col-end-5 row-start-1 row-end-1 `
//     : `col-start-1 col-end-5 row-start-1 row-end-1   bg-red-200`
// }
