
import { FetchUse } from "./useFetch";
export function DataFetch(){

    const {input, chiamata}= FetchUse()
    
FetchUse
 return(
    <div>
    <form onSubmit={(e)=>input(e)}>
        <input type="text" value={data} onChange={(e)=>chiamata(e)}  />
        <button type="submit" >Cerca l'utente</button>
    </form>
    
        { user && <ul> <li>{user.response.login}</li> <li>{user.response.id}</li> <li>{user.response.url}</li> </ul>}
    </div>
 )
}
    
// Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
// The input will be used for searching a user by providing their username.
// Each user will be displayed in a list, where each list item is a GithubUser component.
// These components will take username as a prop.