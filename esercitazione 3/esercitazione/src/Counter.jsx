
import { usecounter } from "./UseCounter";

export function Counter (){
    const {contatore, incrementa, decrementa}= usecounter()

       
    return(
        <div>
        <h2>il valore è {contatore}</h2>
        <button className="button" onClick={incrementa} >Incrementa</button>
        <button className="button" onClick={ decrementa} >decrementa</button>
        </div>
    )
} 