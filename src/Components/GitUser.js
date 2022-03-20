import GitProfile from "../Components/Elements/_GitProfile"
import { useGit } from "../Hooks/GitHooks"

export default function GitUser() {
    const { data } = useGit();
    console.log(data)
    return (
        <>
            {!data ? <p>{data}</p> : <p>Błąd</p>}
             {/* {!loading ? <p>{data.login}</p> : <p>Loading...</p>} */}
        </>
    )
}