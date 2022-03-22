import "../../SCSS/Components/Elements/_gitRepo.scss";
import "../../SCSS/Layout/_flex.scss";
import "../../SCSS/Layout/_column.scss";

export default function GitRepo({ name, html_url }) {
    return (
        <div className="repo">
            <h1 className="repo-name">{name}</h1>
            <a className="repo-url" href={html_url}>Link to repo</a>
        </div>
    )
}