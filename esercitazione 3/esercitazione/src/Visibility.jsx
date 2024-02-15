import { useState } from "react";

export function Visibility(){
const  [niente, appari] = useState(false)
       
  
    function handleAppear(){
        appari ((a)=> !a)
     
    }

    return(
        <div>
       {niente && <h1 className=" text-6xl">Buuuu</h1>}
         <button className="button" onClick={handleAppear}>appear</button>
        </div>
    )
    }
