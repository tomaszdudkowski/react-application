import React, { useState } from "react";

export default function SearchForm() {
  const [phrase, setPhrase] = useState("");

  return (
    <>
      <h1>{phrase}</h1>
      <form>
        <input
          value={phrase}
          onChange={(event) => setPhrase(event.target.value)}
          type="text"
          placeholder="Search phrase"
          required
        />
      </form>
    </>
  );
}
