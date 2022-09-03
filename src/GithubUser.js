import { useEffect, useState } from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {dataApi} = useGithubUser(username)
    return (<div style={{color: "green"}}>
        <h1>Nome dell'utente : {dataApi.name}</h1>
        <h3>Followers : {dataApi.followers}</h3>
        <h3>Url GitHub{dataApi.url}</h3>
    </div>)
}