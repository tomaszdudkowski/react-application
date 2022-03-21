export default function GitProfile({name, avatar_url, login, location, html_url, bio}) {
    
    return (
        <>
            <img alt={name} src={avatar_url} />
            <h2>{name}</h2>
            <h4>{login}</h4>
            <p>{location}</p>
            <a href={html_url}>{login} Profile on GitHub</a>
            <p>{bio}</p>

            {/* <GitRepo /> */}
        </>
    )
}