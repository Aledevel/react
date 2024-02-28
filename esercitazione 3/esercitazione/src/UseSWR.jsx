import useSWR from 'swr'
const fetcher = url=> fetch(url).then(url).then(response=>Response.json())
export function SwrUser(){
const { data, error, mutate} = useSWR(`https://api.github.com/users`, fetcher)
 
function handleRefresh(){
    mutate()
}
return{
    users: data,
    error,
    isLoading: !data && !error,
    refresh: handleRefresh
}
}
