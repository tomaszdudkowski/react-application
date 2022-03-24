import { useEffect } from "react";
import { useGit } from "../../Hooks/GitHooks";
import GitRepo from "./_GitRepo";
import Loader from "./_Loader";

export default function GitRepos() {
  const {
    r,
    setR,
    setFound,
    repoData,
    found,
    userData,
    userLoading,
    repoLoading,
  } = useGit();

  let RepoItem;

  useEffect(() => {
    setR(repoData);
    setFound(repoData);
  }, [repoData]);

  if (r && !repoLoading) {
    if (userData && !userLoading) {
      if (r[0].owner.login == userData.login) {
        RepoItem = r.map((data) => {
          return <GitRepo key={data.id} {...data} />;
        });
      } else {
        RepoItem = null;
      }
    }
  } else if (repoLoading) {
    return <Loader />;
  }

  if (r !== found) {
    if (r[0].owner.login == userData.login) {
      RepoItem = found.map((data) => {
        return <GitRepo key={data.id} {...data} />;
      });
    }
  }

  return <div> {RepoItem} </div>;
}
