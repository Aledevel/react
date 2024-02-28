import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
export function GithubuserList(){
    const [user,setUser]=useState([])
    
    async function fetcher(){
        try {
            const call= await fetch(`https://api.github.com/users`)
            const response = await call.json()
            setUser(response)

            
        } catch (error) {
            
        }
    }
    useEffect(()=>{fetcher()},[])

    return(
        <>
            <ul>
            {user.map((user)=>(<li key={user?.id}><Link to={`/users/${user?.login}`}>{user?.login}</Link></li>))}
            </ul>
            <Outlet/>
        </>
    )
}