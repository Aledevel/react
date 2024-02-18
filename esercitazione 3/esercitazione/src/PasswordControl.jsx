import { useState } from "react"

export function PaswordControl() {
   
  const [password,SetPassword]= useState("")
  const [confirm,SetConfirm]=useState("")

  function HandleEventInput1(e){
    const password1 = e.target.value            
    SetPassword(password1)
  }
  function HandleEventInput2(e){
    const password2 = e.target.value 
    SetConfirm(password2)
  }
   function HandleConfront(){
    if (password.length > 8 & password === confirm){
        alert("password confermata")
    }else{
        alert("Passwords do not match.")
    }

   }
   
   
    return(
   <div>
    <form>
        <input type="password"onChange={HandleEventInput1}/>
        <input type="password"onChange={HandleEventInput2} />
        <button type="submit" on onClick={HandleConfront}>Confirm</button>

       
        
    </form>

    </div>
    )
}