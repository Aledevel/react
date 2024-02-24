
import { useState } from "react"
import { useEffect } from "react"


export function ShowGithubUser(){
const [user, setUser]= useState("")

useEffect(()=>{
    
async function handleFetchData(){
    try {
        const call= await fetch(`https://api.github.com/users`)
        const response =await call.json();
        console.log(response)
        setUser(response)
        
    } catch (error) {
        console.error(error)
        
    }
}
handleFetchData()},[])

return(
    <div>
        <ul>
            {user.map((user)=><li>{user.login}</li>)}
        </ul>
        
    </div>
)

 
}