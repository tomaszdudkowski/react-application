import React, { useState } from "react";
import { useMessages } from "../Hooks/MessageHooks";
import { FaRegTimesCircle } from "react-icons/fa";

export default function SearchForm() {
  const [phrase, setPhrase] = useState("");

  const { searchMessage } = useMessages();

  return (
    <>
      <form>
        <input
          value={phrase}
          onChange={(event) => {
            setPhrase(event.target.value);
            searchMessage(event.target.value);
          }}
          type="text"
          placeholder="Search phrase"
          required
        />
        <div onClick={() => {
          setPhrase("");
          searchMessage("")
        }}>
          <FaRegTimesCircle />
        </div>
      </form>
    </>
  );
}
