export default function PopularArticle({id, categories, title}) {
    return(
        <>
            <span>{id}</span>
            <span>{categories}</span>
            <h1>{title}</h1>
        </>
    );
}