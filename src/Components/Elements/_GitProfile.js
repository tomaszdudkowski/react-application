import GitRepo from "./_GitRepo";
import { useGit } from "../../Hooks/GitHubDataHooks";

export default function GitProfile() {
    const { ...profile } = useGit();
    
    return (
        <>
            <img alt={profile.name} src={profile.avatar_url} />
            <h2>{profile.name}</h2>
            <h4>{profile.login}</h4>
            <p>{profile.location}</p>
            <a href={profile.html_url}>{profile.login} Profile on GitHub</a>
            <p>{profile.bio}</p>

            {/* <GitRepo /> */}
        </>
    )
}