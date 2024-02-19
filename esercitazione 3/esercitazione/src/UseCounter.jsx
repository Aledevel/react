import { useState } from "react";

export function usecounter(){
const [contatore,setcontatore]= useState(0);
 
function handleCounterIncrement(){
    setcontatore( contatore +1)
}
function handleCounterDecrement(){
    setcontatore(contatore-1)
}
return{    
    contatore: contatore,
    incrementa: handleCounterIncrement,
    decrementa: handleCounterDecrement
}
    

}
