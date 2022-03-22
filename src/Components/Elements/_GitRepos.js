import { useGit } from "../../Hooks/GitHooks";
import GitRepo from "./_GitRepo";

export default function GitRepos() {
  const { userData, repoData, repoLoading } = useGit();

  let RepoItem;
  if (repoData && !repoLoading) {
    if (userData.login === repoData[0].owner.login) {
      RepoItem = repoData.map((data) => {
        return <GitRepo key={data.id} {...data} />;
      });
    } else {
      RepoItem = null
    }
  }

  return <div> {RepoItem} </div>;
}
