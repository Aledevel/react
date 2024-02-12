export function UncontrolledForm(){
    function handleSubmit(event){
        event.preventDefault()
    //   const Username=  event.target.elements.namedItem('username').value
    //   const Password=  event.target.elements.namedItem('password').value
    //   const sessione=  event.target.elements.namedItem('session').checked
       const formData = new FormData(event.target)
      const data = {
        Username: formData.get('username'),
        Password:formData.get('password'),
        sessione:formData.get('session') === 'on'? true:false
      }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>This is the Uncontrolled one </h1>
            <input type="text" />
            <input type="password" />
            <input type="checkbox" />
            <button>Log In</button>
            <button type="reset"> Reset</button>
        </form>
    )
}