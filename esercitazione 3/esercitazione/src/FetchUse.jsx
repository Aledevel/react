// import { useEffect, useState } from "react";

// import { useState } from "react"
import { useFetch } from "./useFetch"

// export function DataFetch(){
//   const [data, setData] = useState(null)
//   const [user,setUser]=useState({})
 
//   function handleInput(event){
//     event.preventDefault()
//     const utente = event.target.value 
//    setData(utente)
  
//   }
//   useEffect(()=>{
//       async function FetchData(){
//             try {
               
//                 const call = await fetch(`https://api.github.com/users/${data}`)
//                 const response= await call.json()
//                 console.log(response)
//                 setUser(response)
//                 console.log(user)
                
//             } catch (error) {
//                 console.log(error)
                
//             }
//         }
//         FetchData()
//     },[data])



export function FetchHook (){
 
 const   { data,user,input}= useFetch()

 return(
    <div>
    <form >
        <input type="text" value={data} onChange={(e)=>input(e)}  />
    </form>
    
        { user && <ul> <li>{user?.login}</li> <li>{user?.id}</li> <li>{user?.url}</li> </ul>}
    </div>
 )
}
 
 

