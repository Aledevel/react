import { useState } from "react";


export function Counter (){
        const [contatore,setcontatore]= useState(0);
 
        function handleCounterIncrement(){
            setcontatore( contatore +1)
        }
   
    return(
        <div>
        <h2>il valore è {contatore}</h2>
        <button onClick={handleCounterIncrement} >Incrementa</button>
        </div>
    )
} 