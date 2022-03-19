import { useEffect, useState } from "react";

export default function GitHubUser({ login }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if(loading) return <h1>Wczytywanie...</h1>
  if(error) {
      <pre>{error}</pre>
  }
  if(!data) return null;
  if (data)
    return (
      <div>
        <img
          alt={data.login}
          src={data.avatar_url}
          width="50%"
        />
        <h1>Login: {data.login}</h1>
        <p>{data.location}</p>
        <p>{data.name}</p>
      </div>
    );
}
