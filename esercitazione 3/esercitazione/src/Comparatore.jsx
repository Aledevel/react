import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Comparatore(){
    const [input1 , setInput1] = useState(0)
    const [inpiut2, setInput2] = useState(0)
  const navigate= useNavigate()

  function HandleLogInButtonClick(){
    navigate('/Login')
  }
  function NavigateToDo(){
    navigate('ToDo')
  }
  function NavigateFetch(){
    navigate('users/:username')
  }

           function HandleInputChange(event, callback){
            const value =  event.target.value
            callback(value)
            
           }
    
    return(
        <form >
            <input className="InputLabel" type="text" onChange={(event) => HandleInputChange(event, setInput1)} value={input1}/>
            <input  className="InputLabel" type="text" onChange={(event)=> HandleInputChange(event, setInput2)} value={inpiut2}/>
         <div>
          <button onClick={HandleLogInButtonClick}>Enter the LogIn</button>
          <button onClick={NavigateToDo}>To Do</button>
          <button onClick={NavigateFetch}> Fetch</button>
         </div>
        
            {input1 > inpiut2 && (<h1>{input1} è maggiore di {inpiut2}</h1>)}
            {input1 < inpiut2 && (<h1>{input1} è minore {inpiut2}</h1>)}
            {input1 === inpiut2 && (<h1>{input1} è pari a  {inpiut2}</h1>)}
        </form>
    )
}