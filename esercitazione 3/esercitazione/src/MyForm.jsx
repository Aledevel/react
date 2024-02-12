import { useState } from "react"

export function MyForm(){

    const [data, setData]= useState({
        username:'',
        password:'',
    })

 function handleDataChange(event){
    const name= event.target.name
    const value=  event.target.value
    
    setData((d) =>{
         
            return{
            ...d,
            [name]:value
        }
        
    })
    
    setData(value)
 }

 function Resetform(){
    setData({
        username:'',
        password:'',
    })
}

return(
    <div>
        <h1>Il Mio form</h1>
        <input name="Username" value={data.username} onChange={handleDataChange} />
        <input name="password" type="password" value={data.password} onChange={handleDataChange} />
        <button onClick={Resetform}>Reset</button>
    </div>
)

}