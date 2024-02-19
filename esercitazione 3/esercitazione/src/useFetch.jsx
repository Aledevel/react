export function FetchUse(){
   
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
    return{
        input: handleInput(e),
        chiamata:FetchData(e),
        errore:error

    }
    
}