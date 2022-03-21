import "../../SCSS/Components/Elements/_gitProfile.scss";
import "../../SCSS/Layout/_flex.scss";
import "../../SCSS/Layout/_column.scss";

export default function GitProfile({
  name,
  avatar_url,
  login,
  location,
  html_url,
  bio,
}) {
  return (
    <div className="flex profile">
      <img className="col-1 profile-img" alt={name} src={avatar_url} />
      <div className="col-center-wide desc">
        <h2>{name}</h2>
        <h4>{login}</h4>
        <p>{location}</p>
        <a href={html_url}>Profile on GitHub</a>
        <p>{bio}</p>
      </div>
    </div>
  );
}
