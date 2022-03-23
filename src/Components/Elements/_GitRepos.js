import { useGit } from "../../Hooks/GitHooks";
import GitRepo from "./_GitRepo";
import Loader from "./_Loader";

export default function GitRepos() {
  const { repoData, r, found, userData, userLoading, repoLoading } = useGit();

  let RepoItem;
  if (r && !found && !repoLoading) {
    if (userData && !userLoading) {
      if (r[0].owner.login === userData.login) {
        RepoItem = r.map((data) => {
          return <GitRepo key={data.id} {...data} />;
        });
      }
    }
  } else if (repoLoading) {
    return <Loader />;
  }

  if (found) {
    RepoItem = found.map((data) => {
      return <GitRepo key={data.id} {...data} />;
    });
  }

  return <div> {RepoItem} </div>;
}
