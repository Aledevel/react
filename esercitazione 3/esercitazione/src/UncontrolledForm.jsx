import { useEffect, useRef } from "react"

export function UncontrolledForm(){
    function handleSubmit(event){
        event.preventDefault()
    //   const Username=  event.target.elements.namedItem('username').value
    //   const Password=  event.target.elements.namedItem('password').value
    //   const sessione=  event.target.elements.namedItem('session').checked
       const formData = new FormData(event.target)
    //    const inRef = useRef(null)
    //    useEffect(()=>{
    //     inRef.current?.focus()
    //    },[])
      const data = {
        Username: formData.get('username'),
        Password:formData.get('password'),
        sessione:formData.get('session') === 'on'? true:false
      }
      console.log(data)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>This is the Uncontrolled one </h1>
            {<input className="InputLabel" type="text"/*ref={inRef}*/ /> }
            <input className="InputLabel" type="password" />
            <input className="InputLabel" type="checkbox" />
            <button className="button">Log In</button>
            <button className="button" type="reset"> Reset</button>
        </form>
    )
}