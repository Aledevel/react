import { useState } from "react";

export function Visibility(){
const  [niente, appari] = useState(false)
       
  
    function handleAppear(){
        appari ((a)=> !a)
     
    }

    return(
        <div>
       {niente && <h1>Buuuu</h1>}
         <button onClick={handleAppear}>appear</button>
        </div>
    )
    }
