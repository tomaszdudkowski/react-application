import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useGit } from "../Hooks/GitHooks";

export default function SearchRepo() {
  const [phrase, setPhrase] = useState("");

  const { findRepos } = useGit();
  
  return (
    <>
      <form>
        <input
          value={phrase}
          onChange={(event) => {
            setPhrase(event.target.value);
            findRepos(event.target.value);
          }}
          type="text"
          placeholder="Search repository"
          required
        />
        <div onClick={() => {
          setPhrase("")
          findRepos("")
        }}>
          <FaRegTimesCircle />
        </div>
      </form>
    </>
  );
}
