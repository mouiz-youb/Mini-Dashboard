import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="">
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
