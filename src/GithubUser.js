import { useEffect, useState } from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {data, error, fetcher} = useGithubUser(username)
    return (
      <div style={{ color: "green" }}>
        {/* <button onClick={HandleDataFetch}>Load user</button> */}
        {!data && !error&& <h1>Loading..</h1>}
        {error && <h1>{error.message}</h1>}
        {data && <h1>Nome dell'utente : {data.name}</h1>}
        {data && <h3>Followers : {data.followers}</h3>}
        {data && <h3>Url GitHub{data.url}</h3>}
      </div>
    );
}