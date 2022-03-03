import React, { useState } from "react";
import { useMessages } from "../Hooks/MessageHooks";

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
            searchMessage(phrase);
          }}
          type="text"
          placeholder="Search phrase"
          required
        />
      </form>
    </>
  );
}
