import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { Link } from "react-router-dom";
interface SideLine {
  title: string;
  link: string;
  icon: React.ReactNode;
  classname: string;
}
const SideLine: React.FC<SideLine> = ({ title, link, icon, classname }) => {
  return (
    <Link
      to={link}
      className={`flex justify-start items-center flex-row gap-5 text-xl md:text-xl w-full ${classname}`}
    >
      <div className="flex justify-center items-center ">{icon}</div>
      <h1 className="flex  justify-center items-center ">{title}</h1>
    </Link>
  );
};

export default SideLine;
