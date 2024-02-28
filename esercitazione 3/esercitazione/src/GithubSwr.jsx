import { SwrUser } from "./UseSWR"

export function GithubSwr(){
    const {users,error,isLoading, refresh}=SwrUser()

    return (
    <div>
        {isLoading && <h1>Loading</h1>}
        {error && <h2 className="button">An error occourred</h2>}
        <button className="button" onClick={refresh}>Refresh</button>
        {users && !error && <ul>
            {users.map(user=>(<li key={user.id}>{user.login}</li>))}
            </ul>}
    </div>
    )
}