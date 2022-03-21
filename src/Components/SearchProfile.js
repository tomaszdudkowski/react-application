import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useGit } from "../Hooks/GitHooks";

export default function SearchProfile() {
  const [phrase, setPhrase] = useState("");

  const { fetchUser } = useGit();

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
              fetchUser(phrase)
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
          }}
        >
          <FaRegTimesCircle />
        </div>
      </form>
    </>
  );
}
