import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useGit } from "../Hooks/GitHubDataHooks";

export default function SearchProfile() {
  const [phrase, setPhrase] = useState("");

  const { searchProfile } = useGit();

  return (
    <>
      <form>
        <input
          value={phrase}
          onChange={(event) => {
            setPhrase(event.target.value);
          }}
          onKeyDown={(event) => {
            if(event.key === 'Enter') {
              searchProfile(phrase)
              console.log(phrase)
              event.preventDefault()
            }
          }}
          type="text"
          placeholder="Search profile"
          required
        />
        <div
          onClick={() => {
            setPhrase("");
            searchProfile("");
          }}
        >
          <FaRegTimesCircle />
        </div>
      </form>
    </>
  );
}
