import { useState, useEffect } from "react";


export function Counter (){
        const [contatore,setcontatore]= useState(0);

        useEffect(()=>{
            console.log(`the valiue of the counter is ${contatore}`)
        }
        )
 
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