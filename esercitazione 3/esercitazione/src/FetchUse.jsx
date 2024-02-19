import { useEffect, useState } from "react";

export function DataFetch(){
  const [data, setData] = useState(null)
  const [user,setUser]=useState({})
 
  function handleInput(event){
    const utente = event.target.value 
   setData(utente)
  
  }

        async function FetchData(e){
            try {
                e.preventDefault()
                const call = await fetch(`https://api.github.com/users/${data}`)
                const response= await call.json()
                
                setUser({response})
                console.log(user)
               
              
                
            } catch (error) {
                console.log(error)
                
            }
        }
 
    useEffect(()=>{},[data])
 

 return(
    <div>
    <form onSubmit={(e)=>FetchData(e)}>
        <input type="text" value={data} onChange={(e)=>handleInput(e)}  />
        <button type="submit" >Cerca l'utente</button>
    </form>
    
        { user && <ul> <li>{user.response.login}</li> <li>{user.response.id}</li> <li>{user.response.url}</li> </ul>}
    </div>
 )
}
    
// Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
// The input will be used for searching a user by providing their username.
// Each user will be displayed in a list, where each list item is a GithubUser component.
// These components will take username as a prop.