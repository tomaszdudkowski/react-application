import { useGit } from "../Hooks/GitHooks"

export default function GitUser() {
    const { data, loading } = useGit();
    return (
        <>
            <img src={data.avatar_url} alt={data.login} />
        </>
    )
}