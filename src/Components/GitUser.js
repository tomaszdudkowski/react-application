import { useGit } from "../Hooks/GitHooks"
import GitProfile from "./Elements/_GitProfile";

export default function GitUser() {
    const { data, loading, fetchRepos } = useGit();
    return (
        <>
            {data && !loading ? <GitProfile {...data} /> : <p>Brak danych</p>}
            {/* <button onClick={fetchRepos}>Repozytoria</button> */}
        </>
    )
}