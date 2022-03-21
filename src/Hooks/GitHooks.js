import { createContext, useContext } from "react";
import useFetch from "./useFetch";

const GitContext = createContext();
export const useGit = () => useContext(GitContext);

export function GitProvider({ children }) {
  const [{data, error, loading}, fetchData] = useFetch("")

  const fetchUser = (user) => {
    fetchData(`https://api.github.com/users/${user}`)
  }

  return <GitContext.Provider value={{ data, loading, error, fetchUser }}>{children}</GitContext.Provider>;
}
