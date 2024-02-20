import { useEffect, useState } from "react";

export function DataFetch(){
  const [data, setData] = useState(null)
  const [user,setUser]=useState({})
 
  function handleInput(event){
    const utente = event.target.value 
   setData(utente)
  
  }
  useEffect(()=>{
      async function FetchData(){
            try {
               
                const call = await fetch(`https://api.github.com/users/${data}`)
                const response= await call.json()
                console.log(response)
                setUser(response)
                console.log(user)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        FetchData()
    },[data])
 

 return(
    <div>
    <form >
        <input type="text" value={data} onChange={(e)=>handleInput(e)}  />
        <button type="submit" onClick={(e)=>FetchData(e)} >Cerca l'utente</button>
    </form>
    
        { user && <ul> <li>{user?.login}</li> <li>{user?.id}</li> <li>{user?.url}</li> </ul>}
    </div>
 )
}
