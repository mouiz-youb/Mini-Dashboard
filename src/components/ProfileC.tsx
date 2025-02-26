import React from 'react'
import { useClick2 } from '../store/useClick';
function ProfileC() {
    const click2 = useClick2((state) => state.click2);
    console.log(`ProfileC ${click2}`);
    console.log(`ProfileC `);
  return (
    <div className='absolute top-[20%] w-2xs h-72 right-[5%] bg-white shadow-2xl p-2 rounded-2xl'>
        <h1>
        ProfileC
        </h1>
    </div>
  )
}

export default ProfileC