export default function GitRepo({ name, html_url }) {
    return (
        <div>
            <h1>{name}</h1>
            <a href={html_url}>Link: {name}</a>
        </div>
    )
}