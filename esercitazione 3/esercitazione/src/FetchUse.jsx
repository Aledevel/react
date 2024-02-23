
import { useParams } from "react-router-dom"

export function DataFetch(){

const {username ='Aledevel'}= useParams()

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
    },[data])
 return(
    <div>
    <form >
   
    </form>
    
        { user && <ul> <li>{user?.login}</li> <li>{user?.id}</li> <li>{user?.url}</li> </ul>}
    </div>
 )
}
 
 

