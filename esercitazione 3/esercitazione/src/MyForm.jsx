import { useState } from "react"

export function MyForm(){

    const [data, setData]= useState({
        username:'',
        password:'',
        session: false
    })

 function handleDataChange(event){
    event.preventDefault()
    const name= event.target.name
    const value=  event.target.value
    const checked= event.target.checked
    const type = event.target.type
    
    setData((data) =>{
            return{...data,[name]: type ==='checkbox'?checked:value,  }})
             
            setData(value)
 }

 function Resetform(){
    setData({
        username:'',
        password:'',
        session:false
    })
}

return(
    <form>
        <h1>Il Mio form</h1>
        <input name="Username" value={data.username} onChange={handleDataChange} />
        <input name="password" type="password" value={data.password} onChange={handleDataChange} />
        <input type="checkbox" name="session" checked={data.session} onChange={handleDataChange}/><span>remember</span>
        <button disabled={!data.username || !data.password}>Log In</button>
        <button onClick={Resetform}>Reset</button>
      
    </form>
)

}