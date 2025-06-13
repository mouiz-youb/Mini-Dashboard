// import { useState } from "react"
// export const useSignup=()=>{
//     const [error, seterror] = useState(null)
//     const [loading, setloading] = useState(null)
//     const signup =async(username ,email ,password)=>{
//         try {
//             setloading(true)
//             seterror(false)
//             const response= await axios.post("url of your endpoint",{
//                 username ,email ,password
//             }) 
//             if(!response){
//                 toast.error("the response is empty")
//             }
//             toast.seccuss("you are sign up secccusefully")
//         } catch (error) {
//             seterror(true)
//         }
//     }
//     export {error,loading ,signup}
// }