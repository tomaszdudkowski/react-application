import { useGit } from "../Hooks/GitHooks"
import GitProfile from "./Elements/_GitProfile";

export default function GitUser() {
    const { userData, userLoading, fetchRepos } = useGit();
    return (
        <>
            {userData && !userLoading ? <GitProfile {...userData} /> : <p>Brak danych</p>}
            {userData && !userLoading ? <button onClick={() => fetchRepos(userData.login)}>Repozytoria</button> : <></> }
        </>
    )
}