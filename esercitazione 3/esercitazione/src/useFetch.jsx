import { useEffect, useState } from "react"

export default function DataFetch(){
  const [data, setData] = useState(null)
  const [user,setUser]=useState({})
 
  function handleInput(event){
    event.preventDefault()
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
 
return{
    funzionericevente: handleInput(),
    user:user(),

}
    
}