import { useState } from "react"

export function Comparatore(){
    const [input1 , setInput1] = useState(0)
    const [inpiut2, setInput2] = useState(0)

           function HandleInputChange(event, callback){
            const value =  event.target.value
            callback(value)
            
           }
    
    return(
        <form >
            <input type="text" onChange={(event) => HandleInputChange(event, setInput1)} value={input1}/>
            <input type="text" onChange={(event)=> HandleInputChange(event, setInput2)} value={inpiut2}/>
            {input1 > inpiut2 && (<h1>{input1} è maggiore di {inpiut2}</h1>)}
            {input1 < inpiut2 && (<h1>{input1} è minore {inpiut2}</h1>)}
            {input1 === inpiut2 && (<h1>{input1} è pari a  {inpiut2}</h1>)}
        </form>
    )
}