import React from "react";
import PopularArticle from "./Elements/_PopularArticle";

export default function MostPopular({articles}) {

    const Articles = articles.map(article => {
        return <PopularArticle key={article.id} {...article} />;
    });

    return(
        <div className="popular">
            <h1># Most POPULAR</h1>
            {Articles}
        </div>
    )
}