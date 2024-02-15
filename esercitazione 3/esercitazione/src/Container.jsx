import { useState } from "react"

export function Container({title,children}){
 const [collapse,setCollapse]= useState(false)
 
 function HandleToggle(){
    setCollapse(t=> !t)
 }

    return (
    
   <div > 
    <div>{title} <button className="button" onClick={HandleToggle}>toggle</button></div>
    {collapse && <div className="appContainer" >{children}</div>}
   </div>
 
  ) 
}