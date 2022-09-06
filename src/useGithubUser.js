import useSWR from "swr";
const fetcher = async url => {
  const res = await fetch(url)
  if(!res.ok){
    const error = new Error("an error occurred, invalid username")
    throw error
  }
  return res.json()
}
  

export function useGithubUser(username) {
  const API = "https://api.github.com/users/";
  const {data, error} = useSWR(`${API}${username}`, fetcher)
  return {
    data,
    error,
    fetcher,
  };
}
