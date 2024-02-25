import { useEffect, useState } from "react"

export function GithubUser({username}){
const [data,setData]=useState("")

async function fetchGithub(){
    try {
        const call= await fetch(`https://api.github.com/users/${username}`)
        const response= await call.json()
        console.log(response)
        setData(response)
        
    } catch (error) {
        
    }
}
useEffect(()=>{fetchGithub()},[username])

    return(
        <div>
            {data && <h1>name:{data.login}</h1>}
            {data && <h1>avatar:{<img src="data.avatar_url"></img>}</h1>}
        </div>
    )
}