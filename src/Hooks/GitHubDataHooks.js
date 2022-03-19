import React, { createContext, useContext, useState } from "react";
import { useFetch } from "./useFetch";

const GitContext = createContext();
export const useGit = () => useContext(GitContext);

export function GitProvider({ children }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState();
  const searchProfile = (login) => {
    if (login !== "") {
      console.log("jest login");
      fetch(`https://api.github.com/users/${login}`)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
        
        
      setProfile(data);
      if (loading) return <h1>Wczytywanie...</h1>;
      if (error) {
        return <pre>{error}</pre>;
      }
      if (data) {
        return <pre>{data}</pre>;
      }
    } else {
      console.log("error git hook");
    }
  };

  return (
    <GitContext.Provider value={{ profile, searchProfile }}>
      {children}
    </GitContext.Provider>
  );
}
