import { createContext, useContext } from "react";
import useFetch from "./useFetch";

const GitContext = createContext();
export const useGit = () => useContext(GitContext);

export function GitProvider({ children }) {
  const {data : userData, error : userError, loading : userLoading, fetchData : userFetch} = useFetch("")
  const {data: repoData, error : repoError, loading : repoLoading, fetchData : repoFetch} = useFetch("")

  const fetchUser = (user) => {
    userFetch(`https://api.github.com/users/${user}`)
  }

  const fetchRepos = (login) => {
    repoFetch(`https://api.github.com/users/${login}/repos`)
  }

  return <GitContext.Provider value={{ userData, userError, userLoading, repoData, repoError, repoLoading, fetchUser, fetchRepos }}>{children}</GitContext.Provider>;
}
