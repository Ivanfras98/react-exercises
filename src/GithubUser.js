import { useEffect, useState } from "react"

export function GithubUser({username}){
    const API = "https://api.github.com/users/"
    const [dataApi, setDataApi] = useState({
        name : null,
        followers: null,
        url : null,
    })
    async function getApi(){
        const fetchedApi = await fetch(`${API}${username}`)
        const data = await fetchedApi.json()
        setDataApi(data)
    }
    useEffect(() => {getApi(username)}, [username])
    return (<div style={{color: "green"}}>
        <h1>Nome dell'utente : {dataApi.name}</h1>
        <h3>Followers : {dataApi.followers}</h3>
        <h3>Url GitHub{dataApi.url}</h3>
    </div>)
}