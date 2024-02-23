
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export function DataFetch(){
const [user, setUser]= useState(null)
const {username}= useParams()

  useEffect(()=>{
      async function FetchData(){
            try {
               
                const call = await fetch(`https://api.github.com/users/${username}`)
                const response= await call.json()
                console.log(response)
                setUser(response)
                console.log(user)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        FetchData()
    },[username])
 return(
    <div>
        { user && <ul> <li><h1>{user?.login}</h1></li> <li><h2>{user?.id}</h2></li> <li><h3>{user?.url}</h3></li> </ul>}
    </div>
 )
}
 
 

