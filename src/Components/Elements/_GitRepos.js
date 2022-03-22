import { useGit } from "../../Hooks/GitHooks";
import GitRepo from "./_GitRepo";

export default function GitRepos() {
  const { repoData, repoLoading } = useGit();

  let RepoItem;
  if (repoData && !repoLoading) {
    RepoItem = repoData.map((data) => {
      return <GitRepo key={data.id} {...data}/>
    });
  }

  return ( <div> {RepoItem} </div>)
}
