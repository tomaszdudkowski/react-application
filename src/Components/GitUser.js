import { useGit } from "../Hooks/GitHooks"

export default function GitUser() {
    const { data, loading } = useGit();
    return (
        <>
            {data && !loading ? <img src={data.avatar_url} alt={data.login} /> : <p>Brak obrazu</p>}
            {data && !loading ? <h1>{data.login}</h1> : <p>Brak danych</p>}
            {data && !loading ? <h1>{data.name}</h1> : <p>Brak danych</p>}
            {data && !loading ? <h1>{data.location}</h1> : <p>Brak danych</p>}
        </>
    )
}