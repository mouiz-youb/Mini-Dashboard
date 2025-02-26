import React from 'react'

function MiniProfile() {
  return (
    <div className='flex justify-center items-center flex-col gap-4 '>
        <div className='flex justify-center items-center w-[50px] h-[50px] rounded-full shadow-2xl border-2'></div>
        <div className='flex justify-center flex-col items-center gap-2'>
          <p className='text-[15px]'>Username </p>
          <p className='text-sm'>Email</p>
        </div>
    </div>
  )
}

export default MiniProfile