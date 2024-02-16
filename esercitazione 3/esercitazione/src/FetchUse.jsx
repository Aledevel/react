import { useEffect, useState } from "react";

export function DataFetch({username}){
    
    const[user,setUser]= useState(null);
    const [error,setError]=useState(null);

async function fetchData(username){
    try {
        const response =  await fetch(`https://api.github.com/users/${username}`)
        const data= await response.json()   
        console.log(data)
        setUser(data)  
    } catch (error) {
        setError(error)   
    }     
}
 useEffect(()=>{ fetchData(username) },[username])
 return(
    <div>
        {error && <h1>there has been an error </h1>}
        {user && <h1>{user.login}</h1>}
    </div>
 )
}
    
