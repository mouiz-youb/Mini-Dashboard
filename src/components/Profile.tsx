import React from "react";
import MiniProfile from "./MiniProfile";
import { IoIosArrowDown } from "react-icons/io";
import { useClick2 } from "../store/useClick";
import ProfileC from "./ProfileC";

const Profile:React.FC =()=> {
  const  setClick2 = useClick2((state) => state.setClick2);
      const click2 = useClick2((state) => state.click2);
  
  return (
    <div className="flex  justify-center items-center gap-4 shadow-2xl p-2 rounded-2xl">
    <MiniProfile classname="flex-row"/>
     <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-100  ">
        <IoIosArrowDown className="cursor-pointer" onClick={()=>setClick2()}/>
      </div>
      {
        click2 ?<ProfileC/>:null
      }
    </div>
  );
}

export default Profile;
