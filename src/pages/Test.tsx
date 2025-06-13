// import React ,{useState} from 'react'
// import { useSignup } from '../Hooks/useSignup'
// function Test() {
//     const {signup ,error ,loading}= useSignup()
//     const [username, setUserName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         await signup(username,email ,password)
//     }
//   return (
//     <div className='flex justify-center items-center gap-5 w-full h-screen'>
//         <form onSubmit={handleSubmit} action="" className='flex justify-evenly items-center gap-5 shadow-2xl w-2/3 flex-col h-2/3 border-2 rounded-2xl'>
//             <h1 className='text-3xl '>Sign Up</h1>
//             <input
//             onChange={(e)=>setUserName(e.target.value)}
//             placeholder=' Enter the User Name' 
//             className='p-3 shadow-2xl w-1/2 rounded-2xl'  
//             type="text" />
//             <input
//             onChange={(e)=>setEmail(e.target.value)}
//             placeholder=' Enter the User Email' 
//             className='p-3 shadow-2xl w-1/2 rounded-2xl'  
//             type="email" />
//             <input
//             onChange={(e)=>setPassword(e.target.value)}
//             placeholder=' Enter the User Password ' 
//             className='p-3 shadow-2xl w-1/2 rounded-2xl'  
//             type="password" />
//             <button type="submit" className='flex justify-center items-center w-1/2 shadow-2xl text-white bg-black hover:bg-gray-500 rounded-2xl p-2 text-xl cursor-pointer'>Sign Up</button>
//         </form>
//     </div>
//   )
// }

// export default Test