import { useEffect, useState } from "react";

export function DataFetch({user}){
    
    const[user,setUser]= useState(null);
    const [error,setError]=useState(null);

async function fetchData(username){
    try {
        const response =  await fetch(`https://api.github.com/users/${username}`)
        const data= await response.json()   
        setUser(data)  
    } catch (error) {
        setError(error)   
    }     
}
 useEffect(()=>{ fetchData(username) },[username])
 return(
    <div>
        {error && <h1>there has been an error </h1>}
        {data && <h1>{data.name}</h1>}
    </div>
 )
}
    
