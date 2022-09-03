import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const API = "https://api.github.com/users/";
  const [dataApi, setDataApi] = useState({
    name: null,
    followers: null,
    url: null,
  });
  async function getApi() {
    const fetchedApi = await fetch(`${API}${username}`);
    const data = await fetchedApi.json();
    setDataApi(data);
  }
  useEffect(() => {
    getApi(username);
  }, [username]);
  return {
    dataApi,
  };
}
