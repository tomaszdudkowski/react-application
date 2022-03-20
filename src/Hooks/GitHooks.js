import { createContext, useContext, useEffect, useState } from "react";
import UseFetch from "./useFetch";
import axios from "axios";

const GitContext = createContext();
export const useGit = () => useContext(GitContext);

export function GitProvider({ children }) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUser = () => {
      setLoading(true);
      axios
        .get("https://api.github.com/users/tomaszdudkowski")
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchUser();
  }, []);

  // if(loading) return <h1> WCZYTYWANIE ... </h1>
  // if(error) return <h1>{error}</h1>
  return <GitContext.Provider value={{ data }}>{children}</GitContext.Provider>;
}
