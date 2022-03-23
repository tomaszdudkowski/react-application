import { useGit } from "../../Hooks/GitHooks";
import GitRepo from "./_GitRepo";

export default function GitRepos() {
  const { repoData, userData, userLoading, repoLoading } = useGit();

  let RepoItem;
  if (repoData && !repoLoading) {
    if (userData && !userLoading) {
      if (repoData[0].owner.login === userData.login) {
        RepoItem = repoData.map((data) => {
          return <GitRepo key={data.id} {...data} />;
        });
      } else {
        return <></>
      }
    }
  }

  return <div> {RepoItem} </div>;
}
