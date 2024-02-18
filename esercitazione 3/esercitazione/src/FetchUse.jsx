import { useEffect, useState } from "react";

export function DataFetch(){
    
    const[user,setUser]= useState(null);
    const [error,setError]=useState(null);


    function HandleChange(event){
        event.preventDefault()
     const username =  event.target.value  
     return username
    }

    function handleSubmit(username){
        setUser(username)

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
}

 return(
    <div>
        <input type="text" value="" onChange={HandleChange} />
        <button onClick={handleSubmit}>Cerca</button>
        {error && <h1>there has been an error </h1>}
        {user && <h1>{`${user.login} ${user.id}  ${user.url}`}</h1>}
    </div>
 )
}
    
