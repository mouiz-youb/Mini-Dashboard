import React ,{useState} from 'react'

function Testing() {
    const [Click, setClick] = useState(false)
    const handleClick = () => {
        setClick((prev) => !prev);
    };
  return (
    <div className='flex w-full items-center justify-center ' >
        <p className={Click?`text-blue-500 text-2xl`:`text-red-500 text-2xl`}>Fuck You </p>
        <button onClick={handleClick} type='submit'>Click me </button>
    </div>
  )
}

export default Testing