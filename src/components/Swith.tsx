import React from 'react'
import "../App.css"
import { LuSend } from "react-icons/lu";
function Swith() {
  return (
    <div className='grid gris-col-2 grid-row-1 gap-3 rounded-full shadow-xl  w-2/3 bg-gray-100 '>
        <div className='flex justify-center items-center  col-start-1 col-end-2 row-start-1 row-end-1 text-xl p-2   '>
        <p>
           5000$
        </p>
        </div>
        <div className='flex justify-center items-center flex-row gap-3 col-start-2 col-end-3 row-start-1 row-end-1 text-xl p-2 bg-purple-500 rounded-full  '>
        <p>
            Send
        </p>
        <LuSend/>
        </div>
    </div>
  )
}

export default Swith