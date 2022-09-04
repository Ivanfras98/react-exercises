import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const API = "https://api.github.com/users/";
  const [dataApi, setDataApi] = useState({
    name: null,
    followers: null,
    url: null,
  });
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  async function getApi() {
    setLoading(true);
    setError(null);
    try {
      const fetchedApi = await fetch(`${API}${username}`);
      const data = await fetchedApi.json();
      if (fetchedApi.status !== 200) {
        setError(new Error());
      }
      setDataApi(data);
    } catch (error) {
      setError(error);
      setDataApi.name(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getApi(username);
  }, [username]);
  return {
    getApi,
    dataApi,
    loading,
    error
  };
}
