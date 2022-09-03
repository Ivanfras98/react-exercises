import { useEffect, useState } from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {dataApi, error, loading, getApi} = useGithubUser(username)
    function HandleDataFetch(){
        getApi(username)
    }
    return (
      <div style={{ color: "green" }}>
        <button onClick={HandleDataFetch}>Load user</button>
        {loading && <h1>Loading..</h1>}
        {error && <h1>There was an error</h1>}
        {dataApi.name && <h1>Nome dell'utente : {dataApi.name}</h1>}
        {dataApi.followers && <h3>Followers : {dataApi.followers}</h3>}
        {dataApi.url && <h3>Url GitHub{dataApi.url}</h3>}
      </div>
    );
}