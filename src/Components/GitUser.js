import { useGit } from "../Hooks/GitHooks";
import GitProfile from "./Elements/_GitProfile";
import Loader from "./Elements/_Loader";

export default function GitUser() {
  const { userData, userLoading, fetchRepos } = useGit();
  return (
    <>
      {userLoading ?  <Loader /> : <></>}
      {userData && !userLoading ? <GitProfile {...userData} /> : <></>}
      {userData && !userLoading ? (
        <button onClick={() => fetchRepos(userData.login)}>Repozytoria</button>
      ) : (
        <></>
      )}
    </>
  );
}
