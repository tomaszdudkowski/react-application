import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const GitContext = createContext();
export const useGit = () => useContext(GitContext);

export function GitProvider({ children }) {
  const {
    data: userData,
    error: userError,
    loading: userLoading,
    fetchData: userFetch,
  } = useFetch();
  const {
    data: repoData,
    error: repoError,
    loading: repoLoading,
    fetchData: repoFetch,
  } = useFetch();

  const [r, setR] = useState();
  const [found, setFound] = useState();

  const fetchUser = (user) => {
    userFetch(`https://api.github.com/users/${user}`);
  };

  const fetchRepos = (login) => {
    repoFetch(`https://api.github.com/users/${login}/repos`);
  };
  const findRepos = (text) => {
    if (text !== "") {
      setFound(
        r.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      );
    }
  };

  return (
    <GitContext.Provider
      value={{
        userData,
        userError,
        userLoading,
        repoData,
        r,
        setR,
        found,
        setFound,
        repoError,
        repoLoading,
        fetchUser,
        fetchRepos,
        findRepos,
      }}
    >
      {children}
    </GitContext.Provider>
  );
}
